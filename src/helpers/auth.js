const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'No tienes autorizacion');
    res.redirect('/');
};

module.exports = helpers;