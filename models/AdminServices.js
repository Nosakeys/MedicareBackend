const mongoose = require('mongoose');

const AdminServicesSchema = new mongoose.Schema({
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
    service: { type: String, required: true },
    date: { type: Date, required: true },
  });

module.exports = mongoose.model('AdminServices', AdminServicesSchema);