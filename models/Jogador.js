var mongoose 	= require('mongoose'),
	Schema		= mongoose.Schema;

/**
 * Criando banco de dados
 */
var JogadorSchema = new Schema({
	nome: String,
	telefone: String
});
module.exports	= mongoose.model('Jogador', JogadorSchema);
