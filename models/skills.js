import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  skill: String,
  instructor: String,
  has: Boolean
})

const Skill = mongoose.model('Skill', skillSchema)


export {
  Skill
}
