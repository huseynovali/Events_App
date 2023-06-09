import userModel from "../model/userModel.js"
import bcrypt from "bcrypt"

const singUp = async (req, res) => {
    try {
        console.log(req.body)
        const { name, lastname, phonenumber, email, password } = req.body;
        const checkUser = await userModel.findOne({ email,phonenumber});
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
}

export default singUp