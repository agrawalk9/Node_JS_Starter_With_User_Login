const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kartikay:12345@cluster0-ind2h.azure.mongodb.net/Node_JS_Starter?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
