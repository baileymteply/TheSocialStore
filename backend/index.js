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

app.get("/api/get", (req, res) => {
    const sqlSelect=
        "SELECT * FROM products_table";
    database.query(sqlSelect, (err, result) => {
            console.log(result);
        }
    );
})

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

app.listen(3001, () => {
    console.log("hello from port 3001");
});

/* app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO products_table (productName, productPrice, productDescription) VALUES ('Lukes Saber', '100', 'Dont let the price fool you its real');"
    database.query(sqlInsert, (err, result) => {
        res.send('Yeah that worked');
    })
}) */
