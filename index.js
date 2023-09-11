const express = require('express');
const server = express();
const yup = require('yup');


const yupObject = yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    price: yup.number().required().min(100000).max(10000000),
    fuel_type: yup.string(),
    transmission: yup.string().required(),
    color: yup.string().required(),
    image: yup.string()
});

const cars = require('./products.js');

server.use(express.json());


server.get('/cars', async (req, res) => {
    const dbCars = await cars.find()
    res.send(dbCars);
});


server.get('/cars/:id', async (req, res) => {
    try {
        const car = await cars.findOne({id: req.params.id});

        if (! car) {
            return res.status(404).send('Car not found');
        }

        res.status(200).send(car);
    } catch (error) { 
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

server.post('/cars', (req, res) => { 
    // id: cars.length + 1,
    const car = req.body

    yupObject.validate(car).then(() => {
        console.log("Validated");
        cars.create(car);
        res.status(201).send("New car added");
    }).catch((err) => {
        console.log(err);
        res.status(400).send("Bad Request");
    });

});


server.patch('/cars/:id', async (req, res) => {
    const car = await cars.findOne({id: req.params.id});

    const data = req.body;
    if (car) {
        car.price = data.price;
        res.send("Car updated").status(200);
    } else {
        res.status(404).send("Car not found");
    }
});

server.delete('/cars/:id', async (req, res) => {
    const car = await cars.findOne({id: req.params.id});
    if (car) {
        await cars.deleteOne({id: req.params.id});
        res.send("Car deleted").status(200);
    } else {
        res.status(404).send("Car not found");
    }
});

server.listen(3000, () => console.log('Listening on port 3000...'));
