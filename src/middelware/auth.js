const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token) return res.status(403).send("A token is required for authentication");

    try {
        const decode = jwt.verify(token,'35A7DB5ECB36E85225ECD1E6BD7A3C8F6926C53FC4D09BC6AF5F20DEA1016DAB');
        req.user = decode;
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }

    next();
}

module.exports = verifyToken;