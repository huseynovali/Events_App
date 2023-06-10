import userModel from "../model/userModel.js"
import bcrypt from "bcrypt"

export const register = {
    singUp: async (req, res) => {
        try {
            console.log(req.body)
            const { name, lastname, phonenumber, email, password } = req.body;
            const checkUser = await userModel.findOne({ email, phonenumber });
            if (checkUser)
                return res.status(400).json({ message: "Bu email artiq movcutdur !" })

            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = await userModel.create({
                name,
                lastname,
                phonenumber,
                email,
                password: hashedPassword,
            })

            res.status(201).json(newUser)

        } catch (err) {
            res.status(400).json({ mes: err })
        }
    },
    getAllUser: (req, res) => {
        userModel.find()
            .then(data => res.status(200).json(data))
            .catch(err => err.status(500).json(err))
    },
    getUserById: (req, res) => {
        const id = req.body.id;
        userModel.findById(id)
            .then(data => res.status(200).json(data))
            .catch(err => err.status(500).json(err))
    }
}


