const express = require('express')

require('./db/mongoose')
const cancionRouter = require('./routers/cancion')

const port = process.env.PORT

// express app
const app = express();

// listen for requests
app.listen(port, () => {
  console.log(`Server listening to port ${port}`)
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  const canciones = [
    { titulo: 'Redneck', artista: 'Lamb of god', fecha: 2006 },
    { titulo: 'Seven hills', artista: 'While she sleeps', fecha: 2012 },
    { titulo: 'Can you feel my heart', artista: 'Bring me the horizon', fecha: 2013 }
  ];
  res.render('index', { canciones: canciones, titulo: 'Índice' });
});

app.get('/contacto', (req, res) => {
  res.render('contacto', { titulo: 'Contacto' });
});


app.use(express.json())
app.use('/api', cancionRouter)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { titulo: '404' });
});