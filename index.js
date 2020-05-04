
const functions = require('firebase-functions');
const app = require('express')();
var cors = require('cors')
app.use(cors())
const {
    simpanPesan,
    getPesan
} = require('./api/pesan')

app.post('/pesan', simpanPesan);
app.get('/pesan', getPesan);
exports.api = functions.https.onRequest(app);