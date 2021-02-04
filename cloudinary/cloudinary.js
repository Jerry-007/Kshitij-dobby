const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.cloudinary_Name,
  api_key: process.env.cloudinary_ApiKey,
  api_secret: process.env.cloudinary_Secret,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Images",
    allowedFormats: ["jpeg", "jpg", "png"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
