import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide a first name.']
  },
  lastName: {
    type: String,
    required: [true, 'Please provide a last name.']
  },
  username: {
    type: String,
    required: [true, 'Please provide a user name.'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default model('User', UserSchema)