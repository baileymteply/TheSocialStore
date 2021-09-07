const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "SocialStoreDatabase",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Receiving all entries
app.get("/api/get", (req, res) => {
    const sqlSelect =
        "SELECT * FROM products_table";
    database.query(sqlSelect, (err, result) => {
        res.send(result)
    }
    );
})

//Adding new entry
app.post("/api/insert", (req, res) => {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productDescription = req.body.productDescription;
    const sqlInsert =
        "INSERT INTO products_table (productName, productPrice, productDescription) VALUES (?, ?, ?);";
    database.query(
        sqlInsert,
        [productName, productPrice, productDescription],
        (err, result) => {
            console.log(result);
        }
    );
});

//Delete entry
app.delete('/api/delete/:productName', (req, res) => {
    const productName = req.params.productName;
    const sqlDelete =
        "DELETE FROM products_table WHERE productName = ?";
    database.query(sqlDelete, productName, (err, result) => {
        if (err) console.log(err);
    })
})

//Update entry
app.put('/api/update', (req, res) => {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const sqlUpdate =
        "UPDATE products_table SET productPrice = ? WHERE productName = ?";
    database.query(sqlUpdate, [productName, productPrice], (err, result) => {
        if (err) console.log(err);
    })
})

app.listen(3001, () => {
    console.log("hello from port 3001");
});