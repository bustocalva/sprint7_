import mongoose from "mongoose"

const messageSchema = new Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
  });
  
  const Message = mongoose.model('Message', messageSchema);
  
  module.exports = Message;

module.exports = mongoose.model('User', UserSchema);