const restify = require('restify');
const mongoose = require('mongoose');
const rjwt = require('restify-jwt-community');
//const cors = require('cors');
const config = require('./config');

const server = restify.createServer();

//middleware
server.use(restify.plugins.bodyParser());

//protect routes
server.use(rjwt({ secret: config.JWT_SECRET }).unless({ path: ['/auth'] }));

//cors
//server.use(cors());

server.listen(config.PORT, () => { //criando a conexão com o dba
    mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.set('useFindAndModify', false);
});

const db = mongoose.connection;

db.on('error', (err) => console.log(err)); //lidando com erros

db.once('open', () => {
    require('./routes/customers')(server);
    require('./routes/users')(server);
    console.log(`Server started on port ${config.PORT}`);
});