const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchemaprofileInternal = new Schema({
    nombre: { type: String, required: true },
    empresaTradeName: { type: String, required: true },
    representanteName: { type: String, required: true },
    representanteApPaterno: { type: String, required: true },
    representanteApMaterno: { type: String },
    contactoNumberFijo: { type: Number, required: true },
    contactoCelular: { type: Number },
    contactoCorreo: { type: String, required: true },
    FechaSolicitud: { type: Date, default: Date.now }
});

module.exports = mongoose.model('profileInternal', SchemaprofileInternal);