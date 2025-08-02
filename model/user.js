import { models, model } from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    username:{
        type: String,
        default: "Unnamed",
        require : true
    },
    address:{
        type: String,
        require: true,
        unique: true
    }
},{timestamps: true});

const User = models.User || model("User", UserSchema);

export default User;