// Models for the City Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Failed to connect to the database. Please check the .env file configuration' });
    } else  {
        console.log('Success: Connected to the MongoDB database.');
    }
});

// SCHEMA: Define the collection's schema.
const citySchema = mongoose.Schema({
	name:    { type: String, required: true },
	dateAdded:     { type: Date, required: true },
	priorityLevel: { type: Number, required: true, min: 1, max: 5 }
});

// Compile the model from the schema 
// by defining the collection name "cities".
const cities = mongoose.model('Cities', citySchema);


// CREATE model *****************************************
const createCities = async (name, dateAdded, priorityLevel) => {
    const city = new cities({ 
        name: name, 
        dateAdded: dateAdded, 
        priorityLevel: priorityLevel 
    });
    return city.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveCities = async () => {
    const query = cities.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveCitiesByID = async (_id) => {
    const query = cities.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteCityById = async (_id) => {
    const result = await cities.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateCity = async (_id, name, dateAdded, priorityLevel) => {
    const result = await cities.replaceOne({_id: _id }, {
        name: name,
        dateAdded: dateAdded,
        priorityLevel: priorityLevel
    });
    return { 
        _id: _id, 
        name: name,
        dateAdded: dateAdded,
        priorityLevel: priorityLevel 
    }
}

// EXPORT the variables for use in the controller file.
export { createCities, retrieveCities, retrieveCitiesByID, updateCity, deleteCityById }