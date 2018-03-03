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

The returned boxer data will be in the following JSON format

```javascript
{
  alias: 'Iron',
  bouts: 58,
  rounds: 215,
  knockoutPercentage: 76,
  nationality: 'USA',
  debut: '1985-03-06',
  weightDivision: 'heavyweight',
  stance: 'orthodox',
  height: '5′10″ / 178cm',
  reach: '71″ / 180cm',
  residence: 'Henderson, Nevada, USA',
  birthPlace: 'Brooklyn, New York, USA',
  dob: '1966-06-30',
  name: 'Mike Tyson',
  wins: 50,
  winsKO: 44,
  draws: 0,
  losses: 6,
  lossesKO: 5
}
```

### To Do

* Add tests
* Allow boxers to be queried by name in addition to ID
