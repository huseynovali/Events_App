import { body } from "express-validator";

export const registerValidation = [
    body('name').notEmpty().isLength(5).withMessage('Name is required'),
    body('lastname').isInt().withMessage('Age must be an integer'),
    body('phonenumber').isEmail().withMessage('Invalid email'),
    body('email').notEmpty().isLength(5).withMessage('Name is required'),
    body('password').isInt().withMessage('Age must be an integer'),

];