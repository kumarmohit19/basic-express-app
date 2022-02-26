const jwt = require('jsonwebtoken');
const config = require('../configs/authConfig');

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if no token
    if(!token){
        return res.status(403).json({ msg: 'No token, authorization denied'});
    }

    // Verify token 
    try {
        const decoded = jwt.verify(token, config.secret);

        req.user = decoded.id;
        next();
    } catch(err) {
        res.status(401).json({ msg : 'Token is not valid' });
    }
}