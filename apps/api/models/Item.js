import mongoose from 'mongoose';

/**
 * Generic Item model — rename this on hackathon day!
 * Examples: Complaint, Product, Appointment, Task, Post, etc.
 */
const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: 200,
  },
  description: {
    type: String,
    default: '',
    maxlength: 2000,
  },
  status: {
    type: String,
    enum: ['active', 'pending', 'completed', 'cancelled'],
    default: 'pending',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  category: {
    type: String,
    default: 'general',
  },
  tags: [{
    type: String,
    trim: true,
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Add more fields on hackathon day
  metadata: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
}, {
  timestamps: true,
});

// Index for faster queries
itemSchema.index({ user: 1, status: 1 });
itemSchema.index({ createdAt: -1 });

export default mongoose.model('Item', itemSchema);
