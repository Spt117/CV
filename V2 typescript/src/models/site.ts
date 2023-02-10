import { Site } from "@/library/interfaces"
import { ObjectId } from "mongodb"
import { Schema, model, models, Model } from "mongoose"
// import uniqueValidator from "mongoose-unique-validator"

const siteSchema: Schema<Site> = new Schema<Site>({
    _id: { type: ObjectId, required: false, unique: true },
    titre: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    techno: { type: String, required: true },
})

// userSchema.plugin(uniqueValidator)

const site: Model<Site> = models.sites || model("sites", siteSchema)

export default site
