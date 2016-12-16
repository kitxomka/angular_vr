var express = require('express');
var path    = require("path");
var router = express.Router();


router.get('/db-mok/data.json', function (req, res) {
    res.sendFile(path.join(__dirname+'/db-mok/data.json'));
});

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});


/**
 * router.get(clientRequestUrl, function(){
 *      res.sendFile(path.join(filePathToResponse))
 * });
 *
 * Router listen to 'clientRequestUrl', when it fits the request,
 * it returns to the client the 'filePathToResponse' file.
 * The top router is in higher priority than the bottom one.
 * clientRequestUrl that equals to '*' means listen to all requests, and would be the bottom one. (It's default router if no match other)
 */

module.exports = router;