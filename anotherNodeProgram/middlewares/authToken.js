const express = require('express')
const logger = require('../library/loggerLib')
const response = require('../library/responseLib')

let isAuthenticating = (req, res, next) => {
    if (req.params.authToken || req.query.authToken || req.header('authToken')) {
        if (req.params.authToken == 'Nausad' || req.query.authToken == 'Nausad' || req.header('authToken') == 'Nausad') {
            req.uers = { fullName: 'Nausad', userId: 'Nausad' }
            next()
        } else {
            logger.error('Incorrect Authentication Token', 'Authentication Middleware', 5)
            let apiResponse = response.generateRes(true, 'Incorrect authentication token', 403, null)
            res.send(apiResponse)
        }
    } else {
        logger.error('Authentication token missing', 'Authentication middleware', 5)
        let apiResponse = response.generateRes(true, 'Authentication token is missing in request', 403, null)
        res.send(apiResponse)
    }

}

module.exports = {
    isAuthenticated: isAuthenticating
}