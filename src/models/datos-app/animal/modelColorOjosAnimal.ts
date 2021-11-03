import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface ColorOjos extends Document {
  color: string;
}

const schema_color_ojos: Schema = new Schema({
  color: { type: String, require: true, unique: true },
});

schema_color_ojos.plugin(uniqueValidator);

export default mongoose.model<ColorOjos>("ColorOjos", schema_color_ojos);
