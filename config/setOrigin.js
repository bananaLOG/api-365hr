exports.setHeader = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-Wit , content-type, Authorization , Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log('success /' + req.method);
    next();
}
