const express = require("express");
const app = express();
const cors = require("cors");

const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = "&0y7$noP#5rt99&GB%Pz7j2b1vkzaB0RKs%^N^0zOP89NT04mPuaM!&G8cbNZOtH";

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log('payload received', jwt_payload);

  if (jwt_payload) {
    next(null, {
      _id: jwt_payload._id,
      user: jwt_payload.user,
    });
  } else {
    next(null, false);
  }
});

passport.use(strategy);

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

const HTTP_PORT = process.env.PORT || 8080;

app.get("/api/demo", passport.authenticate('jwt', { session: false }),(req,res)=>{
   res.json({message: "trial user token accepted"}) 
});


app.post("/api/login", (req,res)=>{
    if(req.body.userID == "trial" && req.body.password == "trial"){
        let payload = {
            userID: req.body.userID,
            user: "trialUser",
        };

        let token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({userID: "trialUser",token:token});
    }
    else{
        res.json({message: "cannot verify user"});
    }
});



app.use((req, res) => {
    res.status(404).end();
});

userService.connect().then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log("App listening on: " + HTTP_PORT);
    });
}).catch(err=>{
    console.log(err)
});

