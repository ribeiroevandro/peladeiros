var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs'),
    jwt         = require('jsonwebtoken'),
    Schema      = mongoose.Schema;

/**
 * Criando banco de dados
 */
var UsuarioSchema = new Schema({
    nome: String,
    senha: String,
    token: String
});

UsuarioSchema.methods.gerarToken = function(nome, senha) {
    return jwt.sign({'nome' : nome, 'senha' : senha}, 'some-string');
}

UsuarioSchema.methods.gerarSenha = function(senha) {
    return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));
}

UsuarioSchema.methods.validarSenha = function(senha) {
    return bcrypt.compareSync(senha, this.senha);
}

module.exports  = mongoose.model('Usuario', UsuarioSchema);
