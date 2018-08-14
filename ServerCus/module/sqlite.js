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
                prodotto.quantita = row.Quantità;
                prodotto.immagine = row.Immagine;
                console.log("prodotto", prodotto);
                Prodotti.push(prodotto);
                
                
            });
            //call the callback
            callback(Prodotti)

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
                prodotto.codice=row.CodiceProd;
                prodotto.nome = row.NomeProd;
                prodotto.prezzo = row.Prezzo;
                prodotto.quantita = row.Quantità;
                prodotto.immagine = row.Immagine;
                console.log("prodotto", prodotto);
                Prodotti.push(prodotto);
                
            });
            //call the callback
            callback(Prodotti)

        });


        db.close();

    },

}
