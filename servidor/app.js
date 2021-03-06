const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')


const app = express();

// Conexión base de datos
const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/mrempanada';
const uri = 'mongodb+srv://MrEmpanada:Mr123@empanadadb1.fxv2g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options = { useNewUrlParser: true, useUnifiedTopology: true};
// Or using promises
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to
    mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { console.log(err) }
);


// Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//application/x-www-form-urlencoded

// Rutas
app.use('/api', require('./src/routes/usuario'));
app.use('/api', require('./src/routes/empanadas'));
app.use('/api', require('./src/routes/combos'));
app.use('/api', require('./src/routes/bebidas'));
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

// Static files
// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


// Server on listening
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})