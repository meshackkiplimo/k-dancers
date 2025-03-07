import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  name: string;
  package: 'gold' | 'silver' | 'bronze';
  price: number;
  imageUrl: string;
  venue: string;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  package: { type: String, enum: ['gold', 'silver', 'bronze'], required: true },
  price: { type: Number, required: true, min: 0 },
  imageUrl: { type: String, required: true },
  venue: { type: String, required: true, trim: true },
}, { timestamps: true });

export default mongoose.model<IEvent>('Event', EventSchema);