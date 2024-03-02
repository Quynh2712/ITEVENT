var createError = require('http-errors');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const database = require('./config/database');

const MainRouter = require('./routers/MainRouter')
const EventRouter = require('./routers/EventRouter')

const port = 8080;
// database.connect();

app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main',
}));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    cookie: { maxAge: 300000000 },
    saveUninitialized: true,
    secret: 'abc123a',
    resave: true,
}));

app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.use('/', MainRouter)
// app.use('/event', EventRouter)

app.get('/', (req, res) => {
    return res.render('home');
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error', { layout: 'submain' });
});

// localhost
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`)
})
