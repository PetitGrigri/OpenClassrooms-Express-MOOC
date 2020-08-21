const multer = require('multer');
const MIMTES_TYPES = {
  'image/jpg'   : 'jpg',
  'image/jpeg'  : 'jpeg',
  'image/png'   : 'png'
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images'); // the first parameter is error (here null)
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('-');
    const extension = MIMTES_TYPES[file.mimetype];
    callback(null, `${name}-${Date.now()}.${extension}`);
  }
})

module.exports = multer({ storage }).single('image');