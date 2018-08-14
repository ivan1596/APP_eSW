/*console.log("Inizializzo il server!");*/

const express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var sqlite = require("./module/sqlite.js");

const app = express();
app.use(logger('dev'));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());

app.use(methodOverride());
app.use(cors());
// app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/prodotti', function (req, res) {
  sqlite.getProdotti( function (Prodotti) {
    var prodotti ={};
    var productList={};
    prodotti.Prodotti =Prodotti;
    
    var stringProdotti=JSON.stringify(prodotti);// prodotto stringato del db da parsare 
    
    var allProductJsonParsed= JSON.parse(stringProdotti);
    
    var obj = allProductJsonParsed;
    productList=allProductJsonParsed;
    
    var prodottiList=JSON.stringify(obj);
    res.json(productList);
    console.log("prodotti catalogo inviati");

  })
});

app.post('/aggiornaCarrello',function(req,res){
  console.log('req.body= ',req.body);
  var prodottoReq=JSON.parse(req.body);
  //var utente = prodottoReq.Utente; 
  /* req.body.forEach(p => {
    var utente = p.utente;
    console.log(utente);
    
  }); */ 
  //console.log(utente);
  var utente = prodottoReq.utente;
  var codice = prodottoReq.codice;
  var numProd= prodottoReq.quantita;
  var nomeProd = prodottoReq.nome;
  var prezzo = prodottoReq.prezzo; 
  var img = prodottoReq.immagine;

  sqlite.aggiungiAlCarrello(utente,codice,numProd,nomeProd,prezzo,img); 
});


  app.post('/carrello', function (req, res) {
    console.log ('body req !stringify'+req.body);
    
    var ObjUtente = JSON.parse(req.body);
    var utente = ObjUtente.eUtente;
    
    sqlite.getCarrello(function (Prodotti){
    
    var prodotti ={};
    var listaProdotti={};
    prodotti.Prodotti =Prodotti;
    
    var stringProdotti=JSON.stringify(prodotti);
    
    var prodottiObj= JSON.parse(stringProdotti);
    
    listaProdotti = prodottiObj;
    
    res.json(listaProdotti);
    console.log("prodotti carrello inviati");
      
     
     },utente)

  });

//Inizializza il server
app.listen(8080, function() {
    console.log('listening on 8080');
  });