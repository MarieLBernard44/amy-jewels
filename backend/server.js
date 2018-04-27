const express = require('express');
const app = express();
const bodyparser = require('body-parser');

users = [{
    id: 1,
    email: 'marie@gmail.com',
    mdp: '123',
    civilite: 'mrs',
    nom: 'Bernard',
    prenom: 'Marie',
    address: '35 rue de Sautron',
    complementAddress: 'La Ménardais',
    zipCode: '44119',
    ville: 'Treillières',
    telFixe: '0250800818',
    telPortable: '0619755798',
    dateNaiss: '1984-07-18' 
}];
const jwt = require('jsonwebtoken');
const secret = "fdfHszkSA65d48zSAOsc56ds65SJANdkec5s355SIODe554";

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
        const mdp = req.body.password.toLocaleLowerCase();
        const index = users.findIndex(user => user.email === email);
        if (index > -1 && users[index].mdp === mdp) {
            let user = users[index];
            delete req.body.password;
            const token = jwt.sign({iss:'http://amy-jewels.com', role: 'admin', 
                email: req.body.email, 
                civilite: user.civilite, 
                nom: user.nom, 
                prenom: user.prenom,
                address: user.address,
                complementAddress: user.complementAddress,
                zipCode: user.zipCode,
                ville: user.ville,
                telFixe: user.telFixe,
                telPortable: user.telPortable,
                dateNaiss: user.dateNaiss
            }, secret);
            res.json({success: true, token: token});
        } else {
            res.status(401).json({success: false, message: 'Identifiants incorrects'});
        }
    } else {
        res.status(500).json({success: false, message: 'Données manquantes'});
    }
});

auth.post('/register', (req, res) => {
    console.log('req.body: ', req.body);
    if(req.body) {
        const email = req.body.email.toLocaleLowerCase().trim();
        const mdp = req.body.mdp.toLocaleLowerCase().trim();
        const civilite = req.body.civilite.toLocaleLowerCase().trim();
        const nom = req.body.nom.toLocaleLowerCase().trim();
        const prenom = req.body.prenom.toLocaleLowerCase().trim();
        const address = req.body.address.toLocaleLowerCase().trim();
        const complementAddress = req.body.complementAddress.toLocaleLowerCase().trim();
        const zipCode = req.body.zipCode.toLocaleLowerCase().trim();
        const ville = req.body.ville.toLocaleLowerCase().trim();
        const telFixe = req.body.telFixe.toLocaleLowerCase().trim();
        const telPortable = req.body.telPortable.toLocaleLowerCase().trim();
        const dateNaiss = req.body.dateNaiss.toLocaleLowerCase().trim();

        users = [{
            id: Date.now,
            email: email,
            mdp: mdp,
            civilite: civilite,
            nom: nom,
            prenom: prenom,
            address: address,
            complementAddress: complementAddress,
            zipCode: zipCode,
            ville: ville,
            telFixe: telFixe,
            telPortable: telPortable,
            dateNaiss: dateNaiss        
        }, ... users];
        res.json({success: true, users: users});
    } else {
        res.json({success: false, message: 'La création a échoué'});
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})