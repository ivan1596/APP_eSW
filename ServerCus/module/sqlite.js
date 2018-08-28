const sqlite3 = require('sqlite3').verbose();
const database = './ecommerce.db';

module.exports = {
    getProdotti: function (callback) {
        let db = new sqlite3.Database(database);

        var Prodotti = [];


        let sql = `SELECT * FROM CATALOGO`;

        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                
                var prodotto = {};
                prodotto.codice=row.CodiceProd;
                prodotto.nome = row.NomeProd;
                prodotto.prezzo = row.Prezzo;
                prodotto.pDisponibili = row.Quantità;
                prodotto.immagine = row.Immagine;
                //prodotto.quantita = 1; 
                console.log("prodotto", prodotto);
                Prodotti.push(prodotto);
                
                
            });
            //call the callback
            callback(Prodotti)

        });

        db.close();

    },

    cancellaProdotti: function(utente,codice){
        let db = new sqlite3.Database(database);
        let sql = 'DELETE FROM CARRELLO WHERE UTENTE = ? AND CODICE = ?'
        db.run(sql,utente,codice,function(err){
            if(err){
                console.error(err.message);
            }
            console.log('Hai eliminato i prodotti correttamente');
        });
        db.close();
    },

    aggiungiOrdine: function (utente,codice,data,quantita,nome,prezzo,img) {
        let db = new sqlite3.Database(database);
        let sql = `INSERT INTO ORDINI (Utente,Codice,Data,Nome,Quantita,Prezzo,Immagine)  
        VALUES (?,?,?,?,?,?,?)`;
        db.run(sql,utente,codice,data,nome,quantita,prezzo,img, function(err){
            if (err) {
                console.error(err.message);
                }
            console.log('Hai immesso correttamente il prodotto negli ordini!');
    
            });
        db.close();
      
    },

    aggiungiAlCarrello: function (utente,codice,numProd,nomeProd,prezzo,img) {
        let db = new sqlite3.Database(database);
        let sql = `INSERT INTO CARRELLO (Utente,Codice,numProdotti,nomeProdotto,Prezzo,Immagine)  
        VALUES (?,?,?,?,?,?)`;
        db.run(sql,utente,codice,numProd,nomeProd,prezzo,img, function(err){
            if (err) {
                console.error(err.message);
                }
            console.log('Hai immesso correttamente il prodotto nel db!');
    
            });
        db.close();
      
    },

    getCarrello: function (callback,utente) {
        let db = new sqlite3.Database(database);

        var Prodotti = []


        let sql = `SELECT * FROM CARRELLO WHERE UTENTE = ?`;

        db.all(sql,utente, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                
                var prodotto = {}; 
                prodotto.codice=row.Codice;
                prodotto.utente = row.Utente;
                prodotto.nome = row.nomeProdotto;
                prodotto.prezzo = row.Prezzo;
                prodotto.quantita = row.numProdotti;
                prodotto.immagine = row.Immagine;
                console.log("prodotto", prodotto);
                Prodotti.push(prodotto);
                
            });
            //call the callback
            callback(Prodotti)

        });


        db.close();

    },

    getOrdini: function (callback,utente) {
        let db = new sqlite3.Database(database);

        var Prodotti = []


        let sql = `SELECT * FROM ORDINI WHERE UTENTE = ?`;

        db.all(sql,utente, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                
                var prodotto = {}; 
                prodotto.codice=row.Codice;
                prodotto.utente = row.Utente;
                prodotto.nome = row.nomeProdotto;
                prodotto.prezzo = row.Prezzo;
                prodotto.quantita = row.Quantita;
                prodotto.immagine = row.Immagine;
                prodotto.data = row.Data;
                console.log("prodotto", prodotto);
                Prodotti.push(prodotto);
                
            });
            //call the callback
            callback(Prodotti)

        });


        db.close();

    },

    aggiornaQuantità: function(nProdOrd,codice){
        let db = new sqlite3.Database(database);
        let sql = 'UPDATE Catalogo SET Quantità = Quantità - ? WHERE CodiceProd = ?'
        db.run(sql,nProdOrd,codice,function(err){
            if(err){
                console.error(err.message);
            }
            console.log('Hai aggiornato le quantita');
        });
        db.close();
    },

    aggiungiAiPreferiti: function (utente,codice,prezzo,nome,img) {
        let db = new sqlite3.Database(database);
        let sql = `INSERT INTO PREFERITI (Utente,Codice,Prezzo,Nome,Immagine)  
        VALUES (?,?,?,?,?)`;
        db.run(sql,utente,codice,prezzo,nome,img, function(err){
            if (err) {
                console.error(err.message);
                }
            console.log('Hai immesso correttamente il prodotto nei preferiti');
    
            });
        db.close();
      
    },

    getPreferiti: function (callback,utente) {
        let db = new sqlite3.Database(database);

        var Prodotti = []


        let sql = `SELECT * FROM PREFERITI WHERE UTENTE = ?`;

        db.all(sql,utente, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                
                var prodotto = {}; 
                prodotto.codice=row.Codice;
                prodotto.utente = row.Utente;
                prodotto.nome = row.Nome;
                prodotto.prezzo = row.Prezzo;
                prodotto.immagine = row.Immagine;
                
                console.log("preferito", prodotto);
                Prodotti.push(prodotto);
                
            });
            //call the callback
            callback(Prodotti)

        });


        db.close();

    },





}
