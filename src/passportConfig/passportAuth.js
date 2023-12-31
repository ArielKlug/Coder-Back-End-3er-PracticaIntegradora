const passport = require("passport");

const passportAuth = (strategy) => {
  return async (req, res, next) => {
    passport.authenticate(strategy, function (err, user, info) {
        if(err) return next(err)
        if(!user.user) return res.status(401).send({status: 'error', Error: info.messages ? info.messages : info.toString()})
        
        req.user = user.user
    next()
    })(req, res, next);
    
  };
};

module.exports = {
  passportAuth,
};
