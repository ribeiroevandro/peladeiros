var Usuario = require('../models/Usuario');

exports.save = function(nome, senha, callback) {
    Usuario.findOne({'nome' : nome}, function(error, usuario) {
        if (error) {
            callback('Ocorreu um problema, pedimos desculpa pelo transtorno.');
        } else if (usuario) {
            callback('Usuário já existe');
        } else {
            var novoUsuario = new Usuario();
            novoUsuario.nome = nome;
            novoUsuario.senha = novoUsuario.gerarSenha(senha);
            novoUsuario.token = novoUsuario.gerarToken(nome, senha);
            novoUsuario.save(function(error, usuario) {
                if (error) {
                    callback('Ocorreu um problema, pedimos desculpa pelo transtorno.');
                } else {
                    callback(usuario);
                }
            });
        }
    });
}

exports.login = function(nome, senha, callback) {
    Usuario.findOne({'nome' : nome}, function(error, usuario) {
        if (error) {
            callback('Ocorreu um problema, pedimos desculpa pelo transtorno.');
        } else if (usuario) {
            if (usuario.validarSenha(senha)) {
                callback(usuario.token);
            } else {
                callback('Senha incorreta.');
            }
        } else {
            callback('Usuário não encontrado.');
        }
    });
}

exports.list = function(token, callback) {
    Usuario.findOne({'token' : token}, function(error, usuario) {
        if (error) {
            callback('Ocorreu um problema, pedimos desculpa pelo transtorno.');
        } else if (usuario) {
            callback({'nome' : usuario.nome});
        } else {
            callback('Nenhum usuário encontrado.');
        }
    });
}

exports.authorize = function(token, callback) {
    Usuario.findOne({'token' : token}, function(error, usuario) {
        if (error) {
            callback('Ocorreu um problema, pedimos desculpa pelo transtorno.');
        } else if (usuario) {
            callback(true);
        } else {
            callback(false);
        }
    });
}
