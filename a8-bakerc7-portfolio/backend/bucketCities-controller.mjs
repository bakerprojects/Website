// Controllers for the City Collection

import 'dotenv/config';
import express from 'express';
import * as cities from './bucketCities-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/cities', (req,res) => { 
    cities.createCities(
        req.body.name, 
        req.body.dateAdded, 
        req.body.priorityLevel
        )
        .then(city => {
            console.log(`"${city.name}" was added to the bucket list of cities to visit.`);
            res.status(201).json(city);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to add city to the list, please check that the name, date added, and priority level are all correct' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/cities', (req, res) => {
    cities.retrieveCities()
        .then(cities => { 
            if (cities !== null) {
                console.log(`All cities were retrieved from the list.`);
                res.json(cities);
            } else {
                res.status(404).json({ Error: 'Unable to retrieve cities from the list, please check to make sure cities have been added correctly' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to retrieve all cities from the list, please check to make sure cities have been added correctly' });
        });
});


// RETRIEVE by ID controller
app.get('/cities/:_id', (req, res) => {
    cities.retrieveCitiesByID(req.params._id)
    .then(city => { 
        if (city !== null) {
            console.log(`"${city.name}" was retrieved, based on its ID.`);
            res.json(city);
        } else {
            res.status(404).json({ Error: 'Unable to retrieve city, please check to make sure the ID is correct.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to retrieve city, invalid ID' });
    });

});


// UPDATE controller ************************************
app.put('/cities/:_id', (req, res) => {
    cities.updateCity(
        req.params._id, 
        req.body.name, 
        req.body.dateAdded, 
        req.body.priorityLevel
    )
    .then(city => {
        console.log(`"${city.name}" was updated.`);
        res.json(city);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to update city, please verify the data being updated is correct.' });
    });
});


// DELETE Controller ******************************
app.delete('/cities/:_id', (req, res) => {
    cities.deleteCityById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} city was deleted.`);
                res.status(200).send({ Success: 'City has been removed from the list' });
            } else {
                res.status(404).json({ Error: 'Unable to delete city, please verify that the city is on the list and that the ID is correct.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Unable to delete city, please verify that the city is on the list and that the ID is correct.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});