const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) {
        console.log('Mongodb connection successful');
    } else {
        console.log('Error in Mongodb connection : ' + JSON.stringify(err, undefined, 2));
    }
});

require('./user.model');