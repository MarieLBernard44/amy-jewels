const express = require('express');
const app = express();
const bodyparser = require('body-parser');


const jwt = require('jsonwebtoken');
const fakeUser = {email: 'marie@gmail.com', mdp: '123'};

const auth = express.Router();

const PORT = 4201;

app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/auth', auth);

auth.post('/login', (req, res) => {
    console.log('req.body: ', req.body);
    if(req.body) {
        const email = req.body.email.toLocaleLowerCase();
        const password = req.body.password.toLocaleLowerCase();
        if (email === fakeUser.email && password === fakeUser.password) {
            delete req.body.password;
            res.json({ success: true, date: req.body});
        } else {
            res.json({success: false, message: 'Identifiants incorrects'});
        }
    } else {
        res.json({success: false, message: 'Données manquantes'});
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})