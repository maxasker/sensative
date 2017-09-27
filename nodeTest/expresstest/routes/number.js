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


router.get('/doubleit/:id', function(req, res, next) {
  //var result = parseInt(stringi);
  //result = result * 2;
  //console.log(result);
  res.send("hej");
});

router.post('/doubleit/:id', function(req, res, next) {
  console.log(req.body);
  //var result = parseInt(stringi);
  //result = result * 2;
  //console.log(result);
  res.send("hej");
});

module.exports = router;