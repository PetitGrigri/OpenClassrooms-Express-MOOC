const express = require('express');

const app = express();



// la fonction utilisée par use est un appelé middleware dans express
app.use((req, res, next) => {
    console.log("j'ai reçu une requête");
    next(); // Nécessaire pour passer au middleware suivant
});

app.use((req, res, next) => {
    res.status(200);
    next();
});

app.use((req, res, next) => {
    res.json({
        message: "Coucou le monde"
    });
    next();
});

app.use((req, res) => {
    console.log("La requête s'est bien passée");
});

module.exports = app;