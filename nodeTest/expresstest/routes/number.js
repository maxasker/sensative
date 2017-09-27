var express = require('express');
var router = express.Router();

/* GET number listing. */
router.get('/', function(req, res, next) {
  res.send("hej");
    //return res;
});

//EXEMPEL FÖR ATT TA PARAMETRAR, du behöver inte "skick in den i funktionen", använd req.params.<variabel> för att få ut den
router.get('/:id', function(req, res, next) {
  res.send(req.params.id);
});

//funktion som skickar tillbaka dubbelt av de du skickar in, det kommer in som string och måste skickas tillbaka som string, skickar du tillbaka int utan att göra om still string så översätter den inten till serverresponse om det är möjligt (404 tex). Har dock slaktat routen efter testat en massa.
router.get('/doubleit/:id', function(req, res, next) {
  //var result = parseInt(stringi);
  //result = result * 2;
  //console.log(result);
  res.send("hej");
});


//test med att köra post och ta in en body, kör en post i postman och skickar med {"name": "max"} i body
router.post('/sendmestuff', function(req, res, next) {
  console.log(req.body.name)
  res.send(req.body.name);
});

module.exports = router;