// Database collection
import mongoose, { Schema } from "mongoose"

export const PlantsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  waterFrequency: {
    type: Number,
    required: true
  },
  lastWatered: {
    type: Date,
    required: true
  }
})

export default mongoose.models.plants || mongoose.model("plants", PlantsSchema)
