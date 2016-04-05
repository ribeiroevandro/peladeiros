var app 				= require('./config/app_config'),
	db 					= require('./config/db_config'),
	Jogador 			= require('./models/Jogador'),
	jogadorController 	= require('./controllers/jogadorController'),
	jogadores 			= require('./routes/jogadorRouter')
    usuarios            = require('./routes/usuarioRouter');

app.get('/', function(req, res) {
	res.end('Bem vindo a API Paldeiros')
});

// Rota de jogadores
app.use('/jogadores', jogadores);

// Rota de usuários
app.use('/usuarios', usuarios);
