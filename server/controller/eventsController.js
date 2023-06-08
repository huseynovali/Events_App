import { Event } from "../model/eventSchema.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from "fs"
import { v4 as uuidv4 } from "uuid"
export const eventController = {
    getAll: (req, res) => {
        const limit = req.query.limit || 10;
        Event.find()
            .populate("category")
            .populate("location")
            .then(data => {
                const eventsWithImageUrl = data.map(event => ({
                    ...event.toObject(),
                    imageUrl: `http://localhost:5000/img/${event.imageUrl}` // Resim URL'sini oluşturun
                }));
                res.json(eventsWithImageUrl);
            })
            .catch(err => res.status(500).json({ error: err.message }))
    },

    getByiD: (res) => {
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

                uploadedFiles.push(path);

                if (uploadedFiles.length === files.length) {
                    const newLocation = new Event({
                        name: req.body.name,
                        description: req.body.description,
                        date: req.body.date,
                        location: req.body.location,
                        organizer: req.body.organizer,
                        price: req.body.price,
                        category: req.body.category,
                        imageUrl: uploadedFiles,
                    });

                    newLocation.save()
                        .then(saveLocation => res.status(201).json(saveLocation))
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
                imageUrls.forEach(item => {
                    fs.unlink(item, function (err) {
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

}