const mongoose = require('mongoose');
async function connect() {
    try {
        //await mongoose.connect('mongodb://127.0.0.1:27017/superp');
        await mongoose.connect(process.env.DATABASE_PATH);
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failure');
    }
}

module.exports = { connect };
