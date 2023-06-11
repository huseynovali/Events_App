import { Event } from "../model/eventSchema.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from "fs"
import { v4 as uuidv4 } from "uuid"
import moment from 'moment';

export const eventController = {
    getAll: (req, res) => {
        const limit = req.query.limit || 10;
        Event.find()
            .populate("category")
            .populate({
                path: "location",
                select: "-seats"
            })
            .limit(limit)
            .then(data => {
                const eventsWithImageUrl = data.map(event => {
                    let imageUrl = event.imageUrl;
                    if (Array.isArray(imageUrl)) {
                        imageUrl = imageUrl.map(fileName => `http://localhost:5001/img/${fileName}`);
                    } else {
                        imageUrl = `http://localhost:5001/img/${imageUrl}`;
                    }

                    return {
                        ...event.toObject(),
                        imageUrl: imageUrl // Resim URL'sini oluşturun
                    };
                });
                res.json(eventsWithImageUrl);
            })
            .catch(err => res.status(500).json({ error: err.message }))
    },


    getByiD: (req, res) => {
        const id = req.params.id;
        Event.findById(id)
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ error: err.message }))
    },
    addEvent: (req, res) => {
        let files = req.files.photo;
        const currentFilePath = fileURLToPath(import.meta.url);
        const currentDirPath = dirname(currentFilePath);
        const uploadedFiles = [];

        if (!Array.isArray(files)) {
            files = [files];
        }

        files.forEach((file) => {
            const fileExtension = file.name.split('.').pop();
            const fileName = `${uuidv4()}.${fileExtension}`;
            const path = join(currentDirPath, '..', 'img', fileName);

            file.mv(path, function (err) {
                if (err) {
                    return res.status(500).json(err);
                }
                uploadedFiles.push(fileName);




                if (uploadedFiles.length === files.length) {
                    const dateStr = req.body.date;
                    const formattedDate = moment(dateStr, 'DD.MM.YYYY HH:mm').utcOffset('+04:00').format();
                    const newEvent = new Event({
                        name: req.body.name,
                        description: req.body.description,
                        date: formattedDate,
                        location: req.body.location,
                        organizer: req.body.organizer,
                        category: req.body.category,
                        imageUrl: uploadedFiles,
                    });

                    newEvent.save()
                        .then((data) => res.send(data))
                        .catch(err => res.status(500).json({ error: err.message }));
                }
            });
        });
    }
    ,
    deleteEvent: (req, res) => {
        const id = req.params.id;
        Event.findByIdAndDelete(id)
            .then((data) => {
                const imageUrls = data.imageUrl;
    
                if (!Array.isArray(imageUrls)) {
                    return res.send(`Event and associated images removed.`);
                }
    
                const currentFilePath = fileURLToPath(import.meta.url);
                const currentDirPath = dirname(currentFilePath);
    
                imageUrls.forEach(item => {
                    const imagePath = join(currentDirPath, '..', 'img', item);
                    fs.unlink(imagePath, function (err) {
                        if (err && err.code === 'ENOENT') {
                            console.info("File doesn't exist, won't remove it.");
                        } else if (err) {
                            console.error("Error occurred while trying to remove file");
                        }
                    });
                });
    
                res.send(`Event and associated images removed.`);
            })
            .catch(err => res.status(500).json({ error: err.message }));
    }
,    
    
    createReservation: (req, res) => {
        const id = req.params.id;
        const seatId = req.params.seatId;
        Event.findById(id)
            .then(event => {
                if (!event) {
                    return res.status(404).json({ error: "Etkinlik bulunamadı" });
                }

                const seat = event.location.seats.find(s => s._id.toString() === seatId);
                if (!seat) {
                    return res.status(404).json({ error: "Yer bulunamadı" });
                }

                if (seat.reserved) {
                    return res.status(400).json({ error: "Yer zaten rezerve edilmiş" });
                }

                seat.reserved = true;

                event.save()
                    .then(savedEvent => res.status(201).json(savedEvent))
                    .catch(err => res.status(500).json({ error: err.message }));
            })
            .catch(err => res.status(500).json({ error: err.message }));
    }


}