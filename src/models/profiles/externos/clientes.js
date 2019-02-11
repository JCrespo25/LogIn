const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');


const clientes = new Schema({
    empresaRazonSocial: { type: String, required: true },
    empresaNombreComercial: { type: String, required: true },
    representanteName: { type: String, required: true },
    representanteApellidoPaterno: { type: String, required: true },
    representanteApellidoMaterno: { type: String, required: true },
    contactoNumeroFijo: { type: String, required: true },
    contactoNumeroCelular: { type: String, required: true },
    contactoCorreo: { type: String, required: true },
    fechaSolicitud: { type: String, required: true },
    IDe: { type: String, required: true },
    IDa: { type: String, required: true },
    userName: { type: String, required: true },
    userPassword: { type: String, required: true },
    userCuestion: { type: String, required: true },
    userAnswer: { type: String, required: true },
    datosFiscalesMEXFolioF: { type: String, required: true },
    datosFiscalesMEXFolioCP: { type: String, required: true },
    datosFiscalesMEXNombreEmpresa: { type: String, required: true },
    datosFiscalesMEXColonia: { type: String, required: true },
    datosFiscalesMEXCalle: { type: String, required: true },
    datosFiscalesMEXNoExterior: { type: String, required: true },
    datosFiscalesMEXNoInterior: { type: String, required: true },
    datosFiscalesMEXEntreCalles: { type: String, required: true },
    datosFiscalesMEXDireccionFiscal: { type: String, required: true },
    datosFiscalesMEXRazonSocial: { type: String, required: true },
    datosFiscalesMEXEstadoMexicano: { type: String, required: true },
    datosFiscalesMEXCiudadMexicana: { type: String, required: true },
    datosFiscalesMEXRFC: { type: String, required: true },
    datosFiscalesMEXTelefono: { type: String, required: true },
    datosFiscalesEUAFolioCP: { type: String, required: true },
    datosFiscalesEUANombreEmpresa: { type: String, required: true },
    datosFiscalesEUAColonia: { type: String, required: true },
    datosFiscalesEUACalle: { type: String, required: true },
    datosFiscalesEUANoExterior: { type: String, required: true },
    datosFiscalesEUANoInterior: { type: String, required: true },
    datosFiscalesEUAEntreCalles: { type: String, required: true },
    datosFiscalesEUACodigoPostal: { type: String, required: true },
    datosFiscalesEUATAXID: { type: String, required: true },
    datosFiscalesEUATelefono: { type: String, required: true },
    checkBoxDEMO1: { type: String, required: true },
    checkBoxDEMO2: { type: String, required: true },
    checkBoxDEMO3: { type: String, required: true },
    checkBoxDEMO4: { type: String, required: true },
    checkBoxDEMO5: { type: String, required: true },
    checkBoxOTHERS1: { type: String, required: true },
    checkBoxOTHERS2: { type: String, required: true },
    checkBoxOTHERS3: { type: String, required: true },
    checkBoxOTHERS4: { type: String, required: true },
    checkBoxOTHERS5: { type: String, required: true },
    checkBoxOTHERS6: { type: String, required: true },
    checkBoxOTHERS7: { type: String, required: true },
    checkBoxOTHERS8: { type: String, required: true },
    checkBoxOTHERS9: { type: String, required: true },
    checkBoxOTHERS10: { type: String, required: true },
    checkBoxOTHERS11: { type: String, required: true },
    checkBoxOTHERS12: { type: String, required: true },
    checkBoxOTHERS13: { type: String, required: true },
    checkBoxOTHERS14: { type: String, required: true },
    checkBoxOTHERS15: { type: String, required: true },
    checkBoxOTHERS16: { type: String, required: true }
});

clientes.methods.encryptPassword = async(userPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(userPassword, salt);
    return hash;
};

clientes.methods.matchPassword = async function(userPassword) {
    return await bcrypt.compare(userPassword, this.userPassword);
}

module.exports = mongoose.model('Clientes', clientes);