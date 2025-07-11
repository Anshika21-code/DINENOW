import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [30, "First name must not exceed 30 characters!"],
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name must not exceed 30 characters!"],
    },
    email:{
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email address!",
        },
    },  
    phone: {
        required: true,
        type: String,
        minLength: [10, "Phone number must contain at least 10 characters!"],
        maxLength: [10, "Phone number must not exceed 10 characters!"],
    },
    date:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,

    },
})

export const Reservation = mongoose.model("Reservation", reservationSchema);