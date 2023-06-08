import { Category } from "../model/categoryModel.js";


export const categoryController = {
    getAll: (res) => {
        Category.find()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ error: err.message }))
    },
    getByiD: (res) => {
        const id = req.params.id;
        Category.findById(id)
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ error: err.message }))
    },
    addCategory: (req, res) => {
        const newLocation = new Category({
            name: req.body.name
        })
        newLocation.save()
            .then(saveLocation => res.status(201).json(saveLocation))
            .catch(err => res.status(500).json({ error: err.message }))

    },
    deleteCategory: (req, res) => {
        const id = req.params.id;
        Category.findByIdAndDelete(id)
            .then(() => res.send("Delete Location !"))
            .catch(err => res.status(500).json({ error: err.message }))
    }
}