# boxrec-client
A BoxRec client which fetches data from the BoxRec boxing website via web scraping in Node.js

## To run

Firstly, install project dependencies

```javascript
npm install
```

Require the module and then use the following command to request a boxer's details:

```javascript
boxrecClient.getBoxerById(356831); // Gennady Golovkin
```

The returned boxer data will be in the following JSON format

```javascript
{
    alias: 'GGG',
    bouts: 38,
    rounds: 184,
    knockoutPercentage: 87,
    nationality: 'Kazakhstan',
    debut: '2006-05-06',
    weightDivision: 'middleweight',
    stance: 'orthodox',
    dob: '1982-04-08',
    name: 'Gennady Golovkin',
    wins: '37',
    winsKO: 33,
    draws: '1',
    losses: '0',
    lossesKO: 0
}
```

