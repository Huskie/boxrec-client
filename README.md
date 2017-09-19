# boxrec-client 🥊
A BoxRec client which fetches data from the BoxRec boxing website via web scraping in Node.js

## To run

Firstly, install project dependencies

```javascript
npm install
```

Require the module using the following command:

```javascript
var boxrecClient = require('boxrec-client');
```

Now use the following command to request a boxer's details:

```javascript
boxrecClient.getBoxerById('474'); // Iron Mike
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

* Allow boxers to be queried by name in addition to ID

