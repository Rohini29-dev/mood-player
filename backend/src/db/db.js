const mongoose = require('mongoose');
const dns = require('dns')

dns.setServers(['8.8.8.8','8.8.4.4'])

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.error('Error connecting to MongoDB:', err);
    });
}

module.exports = connectDB;