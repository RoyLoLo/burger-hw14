const xprs = require(`express`);
const bp = require(`body-parser`);
const xhb = require(`express-handlebars`);
const routes = require(`./controllers/burgers_controller.js`);
const app = xprs();
const path = require(`path`);
const PORT = process.env.PORT || 8080;

app.use(xprs.static(`public`));
app.use(bp.urlencoded({extended : true}));
app.use(bp.json());
app.use(routes);

app.engine(`.handlebars`,xhb({defaultLayout:`main`}));
app.set(`view engine`,`.handlebars`);
app.set(`views`,path.join(__dirname, `views`));

app.listen(PORT,()=>{
console.log(`Server is Listening on: http://localhost: ${PORT}`);
});