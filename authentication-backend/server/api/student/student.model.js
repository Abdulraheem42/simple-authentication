import mongoose from 'mongoose';
import {registerEvents} from './student.events';

var StudentSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(StudentSchema);
export default mongoose.model('Student', StudentSchema);
