const mongoose = require('mongoose');
// const cars = [
//     {
//         id: 1,
//         brand: 'Honda',
//         model: 'Civic',
//         price: 1800000,
//         fuel_type: 'Petrol',
//         transmission: 'Manual',
//         color: 'Red',
//         image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200709062205_Honda-Civic-BS-6-Diesel.jpg'
//     },
//     {
//         id: 2,
//         brand: 'BMW',
//         model: 'X5',
//         price: 7500000,
//         fuel_type: 'Diesel',
//         transmission: 'Automatic',
//         color: 'Silver',
//         image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230714060819_BMW_X5_facelift.jpg'
//     },
//     {
//         id: 3,
//         brand: 'Audi',
//         model: 'A8',
//         price: 1200000,
//         fuel_type: 'Petrol',
//         transmission: 'Automatic',
//         color: 'Black',
//         image: 'https://www.carblogindia.com/wp-content/uploads/2019/08/2019-audi-a8l-first-drive-1.jpg'
//     },
//     {
//         id: 4,
//         brand: 'Mercedes',
//         model: 'C-Class',
//         price: 6000000,
//         fuel_type: 'Diesel',
//         transmission: 'Automatic',
//         color: 'White',
//         image: 'https://cdn.cnngreece.gr/media/news/2022/04/28/310330/figure/MERCEDES-AMG-C-43-4MATIC-2.jpg'
//     }, {
//         id: 5,
//         brand: 'Toyota',
//         model: 'Fortuner',
//         price: 3500000,
//         fuel_type: 'Diesel',
//         transmission: 'Manual',
//         color: 'Bronze',
//         image: 'https://blog.gaadikey.com/wp-content/uploads/2018/02/Fortuner-bronze.jpg'
//     }
// ]
const uri = ("mongodb+srv://sudhanshudengra:Dengra8632@cluster0.d5lxdca.mongodb.net/?retryWrites=true&w=majority");

const car_Schema = new mongoose.Schema({
    id: Number,
    brand: String,
    model: String,
    price: Number,
    fuel_type: String,
    transmission: String,
    color: String,
    image: String
});

// const collection = mongoose.model('cars', car_Schema);
async function connect() {
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB")
    } catch(err) {
        console.log(err)
    }
}
// collection.deleteMany({id:1},{id:2},{id:3},{id:4},{id:5});
connect();
//  collection.insertMany(cars);
module.exports = mongoose.model('cars', car_Schema);

