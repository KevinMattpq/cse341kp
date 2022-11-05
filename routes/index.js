const routes = require('express').Router();


routes.get('/', require("../controllers"));

module.exports = routes;
