const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware');
const addAdminServicesController = require('../controllers/adminServicesController')

router.get('/adminServices', authMiddleware, addAdminServicesController.getAdminServices);
router.post('/adminServices', authMiddleware, addAdminServicesController.addAdminServices);
router.put('/adminServices/:id', authMiddleware, addAdminServicesController.updateAdminServices);
router.delete('/adminServices/:id', authMiddleware, addAdminServicesController.cancelAdminServices);

module.exports = router;
