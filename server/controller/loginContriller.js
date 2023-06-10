import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Bu Email tapımlanmadı!" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(500).json({ message: "Şifre yanlıştır!" });
        } else {
            let token = jwt.sign(req.body.email, process.env.PRIVATE_KEY)
            res.json({ "token": token })
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default login;
