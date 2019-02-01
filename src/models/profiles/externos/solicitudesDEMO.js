const mongoose = require('mongoose');
// var autoIncrement = require('mongoose-auto-increment');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const { Schema } = mongoose;


const ProfileClientSchema = new Schema({
    id_autoIncrement: { type: Number },
    empresaName: { type: String, required: true },
    empresaTradeName: { type: String, required: true },
    representanteName: { type: String, required: true },
    representanteApPaterno: { type: String, required: true },
    representanteApMaterno: { type: String },
    contactoNumberFijo: { type: Number, required: true },
    contactoCelular: { type: Number },
    contactoCorreo: { type: String, required: true },
    FechaSolicitud: { type: Date, default: Date.now }
});

ProfileClientSchema.plugin(AutoIncrement, { inc_field: 'id_autoIncrement' });

// autoIncrement.initialize(mongoose.connection);
// ProfileClientSchema.plugin(autoIncrement.plugin, 'perfilesexternos');

// ProfileClientSchema.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { id_autoIncrement: 1 } }, function(error, counter) {
//     if (error)
//         return next(error);
//     doc.testvalue = counter.seq;
//     next();
// });

module.exports = mongoose.model('perfilesexternos', ProfileClientSchema);