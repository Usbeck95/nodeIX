const express = require('express');
const router = express.Router();
const modCountry = require("../models/handleCountries");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Fragments of the World',
        subtitle: 'Display and Register World Data'
    });
});

router.get('/country', function(req, res, next) {
    modCountry.getCountries(res);
});
router.get('/country/:country', function(req, res, next) {
    modCountry.getCountry(res, req.params.country);
});
router.post("/country", function(req, res, next) {
    modCountry.getCountry(res, req.body.ctry);
});

router.get('/countryData', function(req, res, next) {
    res.render('countryData', {
        title: 'Fragments of the World',
        subtitle: 'Enter Country Data'
    });
});
router.get('/countryData/:continent', function(req, res, next) {
    modCountry.getContinent(res, req.params.country);
});
router.post("/countryData", function(req, res, next) {
    modCountry.postCountry(req, res, next);
});

module.exports = router;