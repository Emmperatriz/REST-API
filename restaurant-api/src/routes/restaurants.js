const { Router } = require('express');
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//GET  OBTENER DATOS 
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM Restaurants', (err, rows, fields) => { //Obtiene toda la información de la tabla
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }

    });
});
//GET  OBTENER DATOS /id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM Restaurants WHERE id = ?', [id], (err,
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });

});

//POST  INSERTAR
router.post('/', (req, res) => {

    const { id, rating, namer, site, email, phone, street, city, state, lat, lng } = req.body;

    mysqlConnection.query('INSERT INTO Restaurants  (id, rating, namer, site, email, phone, street, city, state, lat, lng) VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)', [id, rating, namer, site, email, phone, street, city, state, lat, lng], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Registro Exitoso' });
        } else {
            console.log(err);
        }

    });
});
//PUT ACTUALIZAR RESGISTROS EN Restaurants
router.put('/:id', (req, res) => {
    const { idP } = req.params;

    const { id, rating, namer, site, email, phone, street, city, state, lat, lng } = req.body;

    mysqlConnection.query('UPDATE Restaurants SET id = ?, rating = ?, namer = ?, site = ?, email = ?, phone = ?, street = ?, city = ?, state = ?, lat = ?, lng = ? WHERE id = ?', [id, rating, namer, site, email, phone, street, city, state, lat, lng, id],
        (err, rows, fields) => {
            if (!err) {
                res.json({ Status: 'Actualización Exitosa' });
            } else {
                console.log(err);
            }
        });

});

//DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params; 


    mysqlConnection.query('DELETE FROM Restaurants WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Registro Eliminado' });
        } else {
            console.log(err);
        }
    });
});




module.exports = router;