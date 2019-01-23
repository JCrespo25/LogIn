const mongoose = require('mongoose');
const { UserSchema } = mongoose;
const bcrypt = require('bcryptjs');



UserSchema.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('Users', UserSchema);