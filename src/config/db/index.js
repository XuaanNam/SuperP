const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
    try {
        //await mongoose.connect(process.env.DATABASE_PATH);
        await mongoose.connect(
            'DATABASE_PATH=mongodb+srv://XuaanNam:Virusfuck%2a1413m@super-p.zabrj.mongodb.net/superp'
        );
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failure');
    }
}

module.exports = { connect };
