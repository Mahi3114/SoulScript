import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {      
    type: String,
    required: true,
  },
  author: {       
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Poem', 'Thought', 'Story'],
    default: 'Thought',
  },
  tags: {
    type: [String],
    default: [],
  },
  image: String,
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
