const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const TransactionsRoutes = require('../routes/transactions.routes');

const app = express();

// Middleware
app.use(cors()); // Izinkan permintaan dari frontend
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rute API
app.use(TransactionsRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hello World from Express on Vercel!');
});

// Hapus app.listen() dan ekspor aplikasi Express sebagai fungsi
module.exports = (req, res) => {
  app(req, res); // Menangani request dan response dengan Express
};
