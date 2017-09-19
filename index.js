const cheerio = require('cheerio');
const request = require('request');

// The module returns a client object
const boxrecClient = {

    getBoxerById: id => {

        // Define the boxer fetch function, returning a promise
        const getBoxer = id => {

            // Return a new promise
            return new Promise(function(resolve, reject) {

                // If the ID is not a string, reject the promise
                if (typeof id !== 'string') {
                    reject('Invalid id parameter. It must be a string');
                }

                request('http://boxrec.com/en/boxer/' + id, (error, response, body) => {

                    // If the request failed, reject the promise
                    if (error) {
                        reject(error);
                    }

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
                    boxer.wins = parseInt($('.profileWLD .bgW').text()),
                    boxer.winsKO = parseInt($('.profileWLD .textWon').text()),
                    boxer.draws = parseInt($('.profileWLD .bgD').text()),
                    boxer.losses = parseInt($('.profileWLD .bgL').text()),
                    boxer.lossesKO = parseInt($('.profileWLD .textLost').text()),

                    resolve(boxer);
                });
            });
        };

        // Call our get boxer function, which returns a promise
        return getBoxer(id);
    }
}

// Uncomment this to test the function
//boxrecClient.getBoxerById('474').then(boxer => {
//    console.log(boxer);
//});

module.exports = boxrecClient;
