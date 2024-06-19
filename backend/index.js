const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username:username,secret:username,first_name:username},
        {headers:{"private-key": "7204adae-7b24-4c24-89e3-78b5b9df9d0f"}}
    )
    return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data) 
  }
});

app.listen(3001);

// id a66e731b-d299-4d29-913d-12190421dd8e