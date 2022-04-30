import router from "./app/routes/web.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

// import _AuthMiddleWare from "./app/common/_AuthMiddleWare";

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: true 
}));
app.use(bodyParser.json());

/**
 * Allow Origin
 */

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/**
 * Routers
 */
app.use(router);

// require('./app/routes/home.router')(app);
// require('./app/routes/account.router')(app);

// app.use(_AuthMiddleWare.isAuth);
// require('./app/routes/book.router')(app);   // cac router nam phia sau cai middleware deu phai check token hop le
// require('./app/routes/user.router')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
});