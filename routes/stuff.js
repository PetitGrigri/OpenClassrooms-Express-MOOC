const express = require('express');
const router = express.Router();

const stuffController = require('../controllers/stuff');

const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, stuffController.createThing);
router.get('/', authMiddleware, stuffController.getAllThings);
router.get('/:id', authMiddleware, stuffController.getThing);
router.put('/:id', authMiddleware, stuffController.updateThing);
router.delete('/:id', authMiddleware, stuffController.deleteThing);

module.exports = router;