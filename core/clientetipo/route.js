const controller = require('./controller');
module.exports = (app)=> {
    app.get('/tipos-de-cliente',controller.buscarTodos);
}