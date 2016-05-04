var countries = require ('./test');

countries.readJason('./countries.json', function(data) {
    console.log(data)
})