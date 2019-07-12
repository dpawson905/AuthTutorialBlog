const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  isVerified: {
    type: Boolean,
    required: true
  },
  expiresDateCheck: {
    type: Date,
    default: undefined,
    // if user is not verified then the account will be removed in 24 hours
    expires: 86400
  },
  passwordExp: {
    // set up password expire feature
    type: Date,
    required: true
  }
}, { timestamps: true });

UserSchema.plugin(passportLocalMongoose, {
  limitAttempts: true,
  interval: 100,
  // 300000ms is 5 min
  maxInterval: 300000,
  // This will completely lock out an account and requires user intervention.
  maxAttempts: 10
});

module.exports = mongoose.model('User', UserSchema);