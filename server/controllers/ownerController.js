import Editor from "../models/editorModel.js";
import User from "../models/userModel.js";

export const addEditor = async (req, res) => {
    try {
        const { email } = req.body;
        const user = req.user;
        const id = user.id;

        if (!email) {
            res.status(400).json({
                message: "Email of the editor is required!",
                success: false
            })
        }

        const editor = Editor.findOne({ email })("-password");

        if (!editor) {
            res.status(404).status({
                message: "No editor found with this email, try another one.",
                success: false
            })
        }

        const editorId = editor._id;

        const updatedOwner = await User.findByIdAndUpdate(
            { id }, 
            { $push: { editors: editorId } }, 
            { new: true }
        );

        res.status(200).json({
            message: "Editor added successfully!",
            success: true,
            data: updatedOwner
        });
        
    } catch (error) {
        res.status(400).json({
            message: "Error while adding editor to environment!",
            success: false,
            error: error.message
        })
    }
}