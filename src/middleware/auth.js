
const auth = (req, res, next) => {
const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).send('Access denied');

    const credentials = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const [username, password] = credentials;
    
    if (username !== process.env.BASIC_AUTH_USER || password !== process.env.BASIC_AUTH_PASS) {
        return res.status(403).send('Forbidden');
    }

    next();
};

export default auth;
