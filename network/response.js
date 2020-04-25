exports.success = function (req, res, message, status) {
    res.status(status || 201).send({
        "error": "",
        "body": message
    });
};

exports.error = function (req, res, message, status) {
    res.status(status || 500).send({
        "error": message,
        "body": "",
    });
};