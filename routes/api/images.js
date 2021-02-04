const express = require("express");
const router = express.Router();
const { storage } = require("../../cloudinary/cloudinary");
const multer = require("multer");
const upload = multer({ storage });

const image = require("./models/imageSchema");

router.get("/", (req, res) => {
  if(req.isAuthenticated())
  image.find().then((image) => res.json(image));
  else
  res.send([]);

});

router.route("/").post(upload.single("Image"), (req, res) => {
  if(req.isAuthenticated())
  {
    const newimage = new image({
      Name: req.body.Name,
      UserId: req.body.UserId,
      Image: {
        Url: req.file.path,
        Name: req.file.filename,
      }
    });
    newimage
      .save()
      .then(i => res.json(`${i.Name} added`))
      .catch(err => res.status(400).json(err))
  }
  else{
    res.json({auth:false});
    return ;
  }
  ;
});

module.exports = router;
