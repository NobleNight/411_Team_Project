const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');//auth/login
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('application', { user: req.user });
});

module.exports = router;
