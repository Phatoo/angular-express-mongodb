var mongoose = APP.modules.mongoose
var schema = mongoose.Schema

var content = new schema({
    title: { type: "string" },
    type: { type: "string", enum: ["image", "video", "sound"] },
    url: { type: "string" }
})



module.exports = mongoose.model('content', content)
