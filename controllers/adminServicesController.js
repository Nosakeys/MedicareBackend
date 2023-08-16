const AdminServices = require('../models/AdminServices')

exports.getAdminServices = async (req, res) => {
    try {
      const adminId = req.adminId;
      const services = await AdminServices.find({ admin: adminId });
  
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching services' });
    }
  };

  exports.addAdminServices = async (req, res) => {
    try {
      const adminId = req.adminId;
      const { service, date } = req.body;
  
      const newAdminServices = new AdminServices({ admin: adminId, service, date });
      await newAdminServices.save();
  
      res.status(201).json({ message: 'Services added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error adding services' });
    }
  };

  exports.updateAdminServices = async (req, res) => {
    try {
      const adminServicesId = req.params.id;
      const { service, date } = req.body;
  
      await AdminServices.findByIdAndUpdate(adminServicesId, { service, date });
  
      res.json({ message: 'Service updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating service' });
    }
  };
  
  exports.cancelAdminServices = async (req, res) => {
    try {
      const adminServicesId = req.params.id;
  
      await AdminServices.findByIdAndDelete(adminServicesId);
  
      res.json({ message: 'Service canceled successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error canceling service' });
    }
  };