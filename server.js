import minimist from "minimist";
import express from "express";
import { coinFlip, countFlips, coinFlips, flipACoin} from "./modules/coin.mjs";
// Require Express.js

const args = minimist(process.argv.slice(2));

const app = express()
const port = args.port || process.env.PORT || 5000;

// Start an app server
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port));
});

//defauly or base endpoint to return everything is normal
app.get('/app/', (req, res) => {
    // Respond with status 200
    res.statusCode = 200;
    // Respond with status message "OK"
    res.statusMessage = 'OK';
    res.writeHead(res.statusCode, { 'Content-Type': 'text/plain' });
    res.end(res.statusCode+ ' ' +res.statusMessage)
 });
 //endpoint for just 1 flip
 app.get('/app/flip/', (req, res) => {
    //call coin flip function
    var flip = coinFlip();
    // Respond with status 200
    res.status(200).json({ "flip" : flip });
 });
 //endpoint for coin flips given a number
 app.get('/app/flips/:number', (req, res) => {
    var flips = coinFlips(req.params.number)
    res.status(200).json({"raw" : flips, "summary" : countFlips(flips)})
});

//endpoint for calling a flip
app.get('/app/flip/call/:guess(heads|tails)', (req, res) => {
    //call the function flip a coin and take in paramater call
    var callOfFlips = flipACoin(req.params.guess);
    // Respond with status 200
    res.status(200).json(callOfFlips);;
 });

//Error handling if Endpoint does not exist
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
    res.type("text/plain")
})
