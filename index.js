const cheerio = require('cheerio');
const request = require('request');

// The module returns a client object
const boxrecClient = {

    getBoxerById: id => {

        // Parameter validation
        if (typeof id !== 'string') {
            return false;
        }

        request('http://boxrec.com/en/boxer/' + id, function (error, response, body) {
            //console.log('error:', error);
            //console.log('statusCode:', response && response.statusCode);
            //console.log('body:', body);

            // Load the page HTML into Cheerio
            var $ = cheerio.load(body);

            var boxer = {
                alias: '',
                bouts: '',
            };

            $('.profileTable .rowTable .rowLabel b').filter(function() {
                if($(this).text().indexOf('alias') > -1) {
                    boxer.alias = $(this).parent().next().text().trim();
                }
                if($(this).text().indexOf('bouts') > -1) {
                    boxer.bouts = parseInt($(this).parent().next().text().trim());
                }
                if($(this).text().indexOf('debut') > -1) {
                    boxer.debut = $(this).parent().next().text().trim();
                }
                if($(this).text().indexOf('nationality') > -1) {
                    boxer.nationality = $(this).parent().next().text().trim();
                }
                if($(this).text().indexOf('KOs') > -1) {
                    boxer.knockoutPercentage = parseInt($(this).parent().next().text());
                }
                if($(this).text().indexOf('rounds') > -1) {
                    boxer.rounds = parseInt($(this).parent().next().text());
                }
                if($(this).text().indexOf('stance') > -1) {
                    boxer.stance = $(this).parent().next().text().trim();
                }
                if($(this).text().indexOf('division') > -1) {
                    boxer.weightDivision = $(this).parent().next().text().trim();
                }
            });

            // Extract the data we need
            boxer.dob = $('span[itemprop="birthDate"]').text(),
            boxer.name = $('h1').text();
            boxer.wins = $('.profileWLD .bgW').text(),
            boxer.winsKO = parseInt($('.profileWLD .textWon').text()),
            boxer.draws = $('.profileWLD .bgD').text(),
            boxer.losses = $('.profileWLD .bgL').text(),
            boxer.lossesKO = parseInt($('.profileWLD .textLost').text()),

            console.log(boxer);
            return boxer;
        });
    }
}

boxrecClient.getBoxerById('474');

module.exports = boxrecClient;
