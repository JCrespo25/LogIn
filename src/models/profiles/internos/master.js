const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const SchemaProfileInternos = new Schema({
    nombre: { type: String, required: true },
    apPaterno: { type: String, required: true },
    apMaterno: { type: String },
    typeUser: { type: String, required: true },
    correo: { type: String, required: true },
    userMaster: { type: String, required: true },
    password: { type: String, required: true },
    fechaCreacion: { type: Date, default: Date.now }
});

SchemaProfileInternos.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

SchemaProfileInternos.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('perfilesinternos', SchemaProfileInternos);