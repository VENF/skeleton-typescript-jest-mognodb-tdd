import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  }
});

export default model<IUser>('user', userSchema);
