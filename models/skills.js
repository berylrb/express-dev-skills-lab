import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  student: String,
  skill: String,
  level: String,
})

const Skill = mongoose.model('Skill', skillSchema)


export {
  Skill
}
