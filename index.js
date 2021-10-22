const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('WOW!!! I am so excited for learning node and express with nodemon. automatic restart');
})
const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: 01703333 },
    { id: 1, name: 'Shabnur', email: 'shabnur@gmail.com', phone: 017000067 },
    { id: 2, name: 'Shrabonti', email: 'shrabonti@gmail.com', phone: 01777745555 },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: 0173464 },
    { id: 4, name: 'Soniya', email: 'soniya@gmail.com', phone: 017760007 },
    { id: 5, name: 'Susmita', email: 'susmita@gmail.com', phone: 0177777777 }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
    res.send(users)
})

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body)
    // res.send(JSON.stringify(newUser)); or
    res.json(newUser)
})



//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})