const path = require('path');
const router = require('express').Router();
const fs = require('fs');

router.post("/gallery", function (req, res) {
    console.log(req.body)
    fs.readdir(path.join(__dirname, '../assets/images'), (err, files) => {
        var imageList = []
        if (req.body.imageRequest == "All") {
            files.forEach(file => {
                imageList.push(file)
            })
        } else {
            var pattern = new RegExp (req.body.imageRequest.toLowerCase(), "g")
            files.forEach(file => {
                if (file.match(pattern)) {
                    imageList.push(file)
                }
            })
        }
        if (imageList.length > req.body.loadAmount) {
            imageList = imageList.splice(0, req.body.loadAmount)
        }
        //console.log(imageList.length, req.body.loadAmount)
        //console.log(imageList)
        res.json(imageList)
    })
})

module.exports= router;