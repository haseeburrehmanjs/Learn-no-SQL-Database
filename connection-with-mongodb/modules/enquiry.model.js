import mongoose from 'mongoose' 

const userEnquirySchema = mongoose.Schema({
    name: {
        type: String,
        requiredL: true
    },
    email: {
        type: String,
        requiredL: true,
        unique: true
    },
    phone: {
        type: String,
        requiredL: true
    },
    message: {
        type: String,
        requiredL: true
    },
})

export const enquiryModel = mongoose.model('enquiry', userEnquirySchema)