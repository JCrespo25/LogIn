const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');


const ProfileClientSchema = new Schema({
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

ProfileClientSchema.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

ProfileClientSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('perfilesexternos', ProfileClientSchema);