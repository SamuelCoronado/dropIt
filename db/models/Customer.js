const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Customer schema and model
const CustomerSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email field is required'],
        max: [50, 'Email address must be max 50 characters']
    },
    name: {
        type: String,
        required: [true, 'Email field is required'],
        max: [50, 'Email address must be max 50 characters'],  
    },
    location: {
            name: {
                type: String,
                max: [30, 'Location name must be max 30 characters'],
                min: [1, 'Location name '],
            }
        
    }
})