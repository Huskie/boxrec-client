const cheerio = require('cheerio');
const request = require('request');

const getValue = (element, removeWhitespace) => {
  if (removeWhitespace) {
    return element.parent().next().text().trim()
      .replace(/ /g, '');
  }
  return element.parent().next().text().trim();
};

// The module returns a client object

const boxrecClient = {

  getBoxerById: (id) => {
    // Define the boxer fetch function, returning a promise
    const getBoxer = fighterID => new Promise((resolve, reject) => {
      // If the ID is not a string, reject the promise
      if (typeof fighterID !== 'string') {
        reject(new Error('Invalid id parameter. It must be a string'));
      }

      request(`http://boxrec.com/en/boxer/${fighterID}`, (error, response, body) => {
        // If the request failed, reject the promise
        if (error) {
          reject(error);
        }

        // Load the page HTML into Cheerio
        const $ = cheerio.load(body);

        const boxer = {
          alias: '',
          bouts: '',
        };

        $('.profileTable .rowTable .rowLabel b').filter(function () {
          if ($(this).text().indexOf('alias') > -1) {
            boxer.alias = getValue($(this));
          }
          if ($(this).text().indexOf('bouts') > -1) {
            boxer.bouts = parseInt(getValue($(this)), 10);
          }
          if ($(this).text().indexOf('debut') > -1) {
            boxer.debut = getValue($(this));
          }
          if ($(this).text().indexOf('nationality') > -1) {
            boxer.nationality = getValue($(this));
          }
          if ($(this).text().indexOf('KOs') > -1) {
            boxer.knockoutPercentage = parseInt(getValue($(this)), 10);
          }
          if ($(this).text().indexOf('rounds') > -1) {
            boxer.rounds = parseInt(getValue($(this)), 10);
          }
          if ($(this).text().indexOf('stance') > -1) {
            boxer.stance = getValue($(this));
          }
          if ($(this).text().indexOf('division') > -1) {
            boxer.weightDivision = getValue($(this));
          }
          if ($(this).text().indexOf('height') > -1) {
            boxer.height = getValue($(this), true);
          }
          if ($(this).text().indexOf('reach') > -1) {
            boxer.reach = getValue($(this), true);
          }
          if ($(this).text().indexOf('residence') > -1) {
            boxer.residence = getValue($(this));
          }
          if ($(this).text().indexOf('birth place') > -1) {
            boxer.birthPlace = getValue($(this));
          }
        });

        // Extract the data we need
        boxer.dob = $('span[itemprop="birthDate"]').text();
        boxer.name = $('h1').text();
        boxer.wins = parseInt($('.profileWLD .bgW').text(), 10);
        boxer.winsKO = parseInt($('.profileWLD .textWon').text(), 10);
        boxer.draws = parseInt($('.profileWLD .bgD').text(), 10);
        boxer.losses = parseInt($('.profileWLD .bgL').text(), 10);
        boxer.lossesKO = parseInt($('.profileWLD .textLost').text(), 10);

        resolve(boxer);
      });
    });

    // Call our get boxer function, which returns a promise
    return getBoxer(id);
  },
};

// Uncomment this to test the function
// boxrecClient.getBoxerById('348759').then((boxer) => {
//   console.log(boxer);
// });

module.exports = boxrecClient;
