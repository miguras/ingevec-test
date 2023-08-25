const functions = require('firebase-functions');
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors')({ origin: true });

const app = express();
app.use(cors);

app.use('/api', (req, res) => {
  const clientIP = req.get('X-Forwarded-For') || req.get('X-Appengine-User-Ip') || req.ip;

  const apiUrl = `http://ip-api.com/json/${clientIP}`; 


  // Realiza la solicitud HTTP a la API externa
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => res.status(500).json({ error: 'Error en la solicitud a la API externa' }));
});

exports.apiProxy = functions.https.onRequest(app);
