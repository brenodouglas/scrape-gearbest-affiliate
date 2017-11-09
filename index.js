const express = require('express');
const fs = require('fs');
const request = require('request').defaults({jar: true});
const cheerio = require('cheerio');
const app = express();

request({
    method: 'GET',
    uri: 'https://affiliate.gearbest.com/user/signin',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36 OPR/48.0.2685.52'
    }
}, function(error, response, body) {
    request.post({
        method: "POST",
        uri: "https://affiliate.gearbest.com/user/do-signin",
        form: {
            email: "email@gmail.com",
            password: "teste"
        },
        headers: {
            "Origin": "https://affiliate.gearbest.com",
            "Referer": "https://affiliate.gearbest.com/user/signin",
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36 OPR/48.0.2685.52',
            "x-requested-with": "XMLHttpRequest"
        }, 
        gzip: true
    }, function(error, response, body) {
        request({
            method: "GET",
            uri: "https://affiliate.gearbest.com/link/coupon-text-link",
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36 OPR/48.0.2685.52'
            }
        }, function(error, response, body) {
            console.log(body);
        });
    });
});

// app.get('/coupons', (req, res) => {
//     request({
//         mehod: 'GET',
//         uri: 'https://affiliate.gearbest.com/user/signin',
//         headers: {
//             'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36 OPR/48.0.2685.52'
//         }
//     }, function(error, response, body) {
//         console.log(error);
//         console.log(body);
//     });
// });

// app.listen('8081');

exports = module.exports = app;