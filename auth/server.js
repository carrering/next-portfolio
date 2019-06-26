const next = require('next');
const express = require('express');
const axios = require('axios');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });

const AUTH_USER_TYPE = "authenticated";

const handle = app.getRequestHandler();//before implementing auth
// https://jsonplaceholder.typicode.com/users - to generate a user
const authenticate = async (email, password) => {
  const {
    data
  } = await axios.get('https://jsonplaceholder.typicode.com/users')
  return data.find(user => {
    if(user.email === email && user.username === password){
      return user;
    }
  })
}

app.prepare().then(()=> {
  const server = express();

  // express middleware
  server.use(express.json());

  server.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await authenticate(email, password);
    if (!user){
      return res.status(403).send("Invalid email or password")
    }
    const userData = {
      name: user.name,
      email: user.email,
      type: AUTH_USER_TYPE
    }
    res.cookie();
    res.json(userData);
    // res.json({
    //   email, 
    //   password, 
    //   success: true
    // });

  });

  server.get("*",(req, res) => {
    return handle(req,res);
  });

  server.listen(port, err => {
    if(err) throw err;
    console.log(`listening on PORT ${port}`);
  });
});