[![npm version](https://badge.fury.io/js/boxrec-client.svg)](https://badge.fury.io/js/boxrec-client)

# boxrec-client 🥊
A BoxRec client which fetches data from the BoxRec boxing website via web scraping in Node.js. Fetches return promise objects which will resolve with the fetched data if successful.

## To run

Firstly, install the module

```javascript
npm install boxrec-client --save-dev
```

Require the module using the following command:

```javascript
var boxrecClient = require('boxrec-client');
```

Now use the following command to request a boxer's details. The function returns a promise which will resolve with the boxer details when fetch is complete:

```javascript
boxrecClient.getBoxerById('474').then((boxer) => {
  console.log(boxer);
});
```

The returned boxer data will be an object in the following format

```javascript
{
    alias: '\'AJ\'',
    bouts: 21,
    rounds: 77,
    knockoutPercentage: 95,
    nationality: 'United Kingdom',
    debut: '2013-10-05',
    weightDivision: 'heavyweight',
    stance: 'orthodox',
    height: '6′6″ / 198cm',
    reach: '82″ / 208cm',
    residence: 'Watford, Hertfordshire, United Kingdom',
    birthPlace: 'Watford, Hertfordshire, United Kingdom',
    dob: '1989-10-15',
    name: 'Anthony Joshua',
    wins: 21,
    winsKO: 20,
    draws: 0,
    losses: 0,
    lossesKO: 0,
    fights: [{
            date: '2018-03-31',
            opponent: 'Joseph Parker',
            country: 'uk',
            venue: 'Principality Stadium, Cardiff',
            result: 'W',
            outcome: 'UD',
            outcomeRound: '12/12'
        },
        {
            date: '2017-10-28',
            opponent: 'Carlos Takam',
            country: 'uk',
            venue: 'Principality Stadium, Cardiff',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '10/12'
        },
        {
            date: '2017-04-29',
            opponent: 'Wladimir Klitschko',
            country: 'uk',
            venue: 'Wembley Stadium, Wembley',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '11/12'
        },
        {
            date: '2016-12-10',
            opponent: 'Eric Molina',
            country: 'uk',
            venue: 'Manchester Arena (formerly M.E.N Arena), Manchester',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '3/12'
        },
        {
            date: '2016-06-25',
            opponent: 'Dominic Breazeale',
            country: 'uk',
            venue: 'O2 Arena (Millenium Dome), Greenwich',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '7/12'
        },
        {
            date: '2016-04-09',
            opponent: 'Charles Martin',
            country: 'uk',
            venue: 'O2 Arena (Millenium Dome), Greenwich',
            result: 'W',
            outcome: 'KO',
            outcomeRound: '2/12'
        },
        {
            date: '2015-12-12',
            opponent: 'Dillian Whyte',
            country: 'uk',
            venue: 'O2 Arena (Millenium Dome), Greenwich',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '7/12'
        },
        {
            date: '2015-09-12',
            opponent: 'Gary Cornish',
            country: 'uk',
            venue: 'O2 Arena (Millenium Dome), Greenwich',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '1/12'
        },
        {
            date: '2015-05-30',
            opponent: 'Kevin Johnson',
            country: 'uk',
            venue: 'O2 Arena (Millenium Dome), Greenwich',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '2/10'
        },
        {
            date: '2015-05-09',
            opponent: 'Raphael Zumbano',
            country: 'uk',
            venue: 'Barclaycard Arena (formerly NIA) , Birmingham',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '2/8'
        },
        {
            date: '2015-04-04',
            opponent: 'Jason Gavern',
            country: 'uk',
            venue: 'Metro Radio Arena, Newcastle',
            result: 'W',
            outcome: 'KO',
            outcomeRound: '3/8'
        },
        {
            date: '2014-11-22',
            opponent: 'Michael Sprott',
            country: 'uk',
            venue: 'Echo Arena, Liverpool',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '1/10'
        },
        {
            date: '2014-10-11',
            opponent: 'Denis Bakhtov',
            country: 'uk',
            venue: 'O2 Arena (Millenium Dome), Greenwich',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '2/10'
        },
        {
            date: '2014-09-13',
            opponent: 'Konstantin Airich',
            country: 'uk',
            venue: 'Phones 4u Arena (formerly M.E.N Arena), Manchester',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '3/8'
        },
        {
            date: '2014-07-12',
            opponent: 'Matt Skelton',
            country: 'uk',
            venue: 'Echo Arena, Liverpool',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '2/6'
        },
        {
            date: '2014-05-31',
            opponent: 'Matt Legg',
            country: 'uk',
            venue: 'Wembley Stadium, Wembley',
            result: 'W',
            outcome: 'KO',
            outcomeRound: '1/6'
        },
        {
            date: '2014-03-01',
            opponent: 'Hector Alfredo Avila',
            country: 'uk',
            venue: 'Scottish Exhibition Centre, Glasgow',
            result: 'W',
            outcome: 'KO',
            outcomeRound: '1/6'
        },
        {
            date: '2014-02-01',
            opponent: 'Dorian Darch',
            country: 'uk',
            venue: 'Motorpoint Arena, Cardiff',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '2/6'
        },
        {
            date: '2013-11-14',
            opponent: 'Hrvoje Kisicek',
            country: 'uk',
            venue: 'York Hall, Bethnal Green',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '2/6'
        },
        {
            date: '2013-10-26',
            opponent: 'Paul Butlin',
            country: 'uk',
            venue: 'Sheffield Arena, Sheffield',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '2/6'
        },
        {
            date: '2013-10-05',
            opponent: 'Emanuele Leo',
            country: 'uk',
            venue: 'O2 Arena (Millenium Dome), Greenwich',
            result: 'W',
            outcome: 'TKO',
            outcomeRound: '1/6'
        }
    ]
}
```

### To Do

* Add tests
* Allow boxers to be queried by name in addition to ID
