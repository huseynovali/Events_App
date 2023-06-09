import { Location } from "../model/locationModel.js"



export const locationController = {
    getAll: (req, res) => {
        Location.find()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ error: err.message }))
    }
,    
    getByiD: (res) => {
        const id = req.params.id;
        Location.findById(id)
           .select("name")
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ error: err.message }))
    },
    addLocation: (req, res) => {
        const newLocation = new Location({
            name: req.body.name,
            seats: req.body.seats
        })
        newLocation.save()
            .then(saveLocation => res.status(201).json(saveLocation))
            .catch(err => res.status(500).json({ error: err.message }))

    },
    deleteLocation: (req, res) => {
        const id = req.params.id;
        Location.findByIdAndDelete(id)
            .then(() => res.send("Delete Location !"))
            .catch(err => res.status(500).json({ error: err.message }))
    }
    
}