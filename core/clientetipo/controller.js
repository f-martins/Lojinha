const model = require('./model');

module.exports = {
    buscarTodos
};

async function buscarTodos(req, res){
    
    try{
        let result = await model.findAll({
            raw: true,
            attributes: ['id', 'nome']
        });
        res.status(200).json({
            content: result
        });

    }
    catch (error){
        res.status(500).json({
            rro: 'Deu erro',
            error: error
        })
    }

}