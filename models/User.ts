import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "user already exists"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
})


const User = mongoose.models.User || mongoose.model("User", schema);

export default User;