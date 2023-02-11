import { Site } from "@/library/interfaces"
import { ObjectId } from "mongodb"
import { Schema, model, models } from "mongoose"
// import uniqueValidator from "mongoose-unique-validator"

const siteSchema = new Schema<Site>({
    titre: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    techno: { type: String, required: true },
})

// userSchema.plugin(uniqueValidator)

const Sites = models.sites || model("sites", siteSchema)

export default Sites
