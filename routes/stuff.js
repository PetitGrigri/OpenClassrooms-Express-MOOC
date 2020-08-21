const express = require('express');
const router = express.Router();

const stuffController = require('../controllers/stuff');

const authMiddleware = require('../middleware/auth');
const multerMiddleWare = require('../middleware/multer-config');

// multerMiddleware must be apply after authMidleware to prevent file handling with an unauthenticated user
router.post('/', authMiddleware, multerMiddleWare, stuffController.createThing);
router.put('/:id', authMiddleware, multerMiddleWare, stuffController.updateThing);

router.get('/', authMiddleware, stuffController.getAllThings);
router.get('/:id', authMiddleware, stuffController.getThing);
router.delete('/:id', authMiddleware, stuffController.deleteThing);

module.exports = router;