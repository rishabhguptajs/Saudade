import { comparePasswords, hashPassword } from '../helpers/authHelper.js';
import Editor from '../models/editorModel.js';
import jwt from 'jsonwebtoken'

export const registerEditor = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            res.status(400).json({
                message: "Fill all the fields!",
                success: false
            })
        }

        const hashedPassword = await hashPassword(password);

        const newEditor = new Editor({
            name,
            email,
            password: hashedPassword
        })

        await newEditor.save();

        res.status(200).json({
            message: "Editor registered successfully!",
            success: true,
            data: newEditor
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error while registering editor!",
            success: false,
            error: error.message
        })
    }
}

export const loginEditor = async(req, res) => {
    try {
        const { email, password } = req.body;

        const editor = await Editor.findOne({ email });
        if(!editor){
            res.status(400).json({
                message: "No editor found with this email!",
                success: false
            })
        }

        const isMatch = await comparePasswords(password, editor.password);
        
        if(editor && isMatch){
            const payload = {
                editor: {
                    id: editor._id
                }
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' });

            req.editor = {
                id: editor._id,
                token
            };

            res.status(200).json({
                message: "Editor logged in successfully!",
                success: true,
                token
            })
        }

        res.status(200).json({
            message: "Editor logged in successfully!",
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while logging in editor!",
            success: false,
            error: error.message
        })
    }
}