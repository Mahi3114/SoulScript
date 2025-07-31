import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: { type: String, default: 'Thought' },  // example
  photo: String,
  createdAt: { type: Date, default: Date.now },
  // other fields...
});

export default mongoose.model('Post', postSchema);
