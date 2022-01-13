exports.success = function (req, res, message, status, json){
    let statusCode = status || 200;
    let statusMessage = message || '';

    if(json == true){
        res.status(statusCode).json({
            error: false,
            status: status,
            body: statusMessage,
        });

    } else{
        res.status(statusCode).send({
            error: false,
            status: status,
            body: statusMessage,
        });
    }

}

exports.error = function (req, res, message, status){
    let statusCode = status || 500;
    let statusMessage = message || 'Internal Server error';

    res.status(statusCode).send({
        error: false,
        status: status,
        body: statusMessage,
    });
}