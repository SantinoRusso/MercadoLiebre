const express = require ('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname,  './public');
app.use( express.static(publicPath));

app.listen(5000, () => 
    console.log('servidor corriendo en el puerto 5000'));

app.get('/home.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get("/register.html", (req, res) => {
 res,sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login.html", (req, res) => {
    res,sendFile(path.resolve(__dirname, "./views/login.html"));
   });