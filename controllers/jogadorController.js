var Jogador = require('../models/Jogador');

exports.save = function(nome, telefone, callback) {
	new Jogador({
		'nome' : nome,
		'telefone' : telefone
	}).save(function(error, jogador) {
		if (error) {
			callback({error: 'Não foi possível salvar'});
		} else {
			callback(jogador);
		}
	});
}

exports.list = function(callback) {
	Jogador.find({}, function(error, jogador) {
		if (error) {
			callback({error: 'Não foi possível encontrar os jogadores'});
		} else {
			callback(jogador);
		}
	});
}

exports.delete = function(id, callback) {
	Jogador.findById(id, function(error, jogador) {
		if (error) {
			callback({error: 'Não foi possível excluir'})
		} else {
			jogador.remove(function(error) {
				if (!error) {
					callback({resposta: 'Jogador removido com sucesso.'})
				}
			})
		}
	});
}
