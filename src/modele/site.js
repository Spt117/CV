const mongoose = require("mongoose");

const siteShema = mongoose.Schema({
    titre: { type: String, required: true },
    image: { type: String },
    url: { type: String, required: true },
    description: { type: String, required: true },
    techno: { type: String, required: true },
});

module.exports = mongoose.model("site", siteShema);
