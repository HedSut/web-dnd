const sphp = require('sphp');
sphp.setOptions({ cgiEngine: "C:\\Program Files\\phpphp-cgi.exe" });
const path = require('path');
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const router = express.Router();
const port = 5000;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
router.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile(path.join(__dirname+'/pages/index.html'));      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname+'/pages/register.php'));
});


app.use(sphp.express('pages'));
app.use(express.static("public"));
app.use(express.static("pages"));
app.use('/', router);
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});