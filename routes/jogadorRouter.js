var express 			= require('express'),
	router 				= express.Router(),
	jogadorController 	= require('../controllers/jogadorController');

router.get('/', function(req, res) {
	jogadorController.list(function(resp) {
		res.json(resp);
	})
});

router.post('/cadastrar', function(req, res) {
	var nome = req.body.nome;
	var telefone = req.body.telefone;

	jogadorController.save(nome, telefone, function(resp) {
		res.json(resp);
	});
});

router.delete('deletar/:id', function(req, res) {
	var id = req.params.id;
	jogadorController.delete(id, function(resp) {
		res.json(resp);
	});
});

module.exports = router;
