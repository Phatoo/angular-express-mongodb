
function images() {
    this.getImages = function (req,res) {
        console.log('[debug] getImages ->\n')

        mongo.content.find({
            type: "image"
        }, "title type url"
         , function(err,content){
            if(!err){
                res.send(content)
            } else {
                console.log("[ERROR] #{err}")
                res.send(400, err)
            }
        });
    }
}

module.exports = (function(){
    return new images();
})();