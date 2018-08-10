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

    }
}
