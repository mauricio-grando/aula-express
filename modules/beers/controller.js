// importação do módulo model.js
var Model = require('./model');

var msg = "";
var Controller = {
	create: function(req, res) {
	var dados = {
			name: 'Skol',
			description: 'Mijo de rato',
			alcohol: 4.5,
			price: 3.0,
			category: 'pilsen'
		};

		var model = new Model(dados);

		model.save(function (err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = "Erro: " + err;
			} else {
				console.log("Cerveja inserida.", data);
				msg = "Cerveja inserida. " + data;
			}
			res.json(msg);
		});
	},
	retrieve: function(req, res) {
		var query = {};
		Model.find(query, function(err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = err;
			} else {
				console.log("listagem: ", data);
				msg = data;
			}
			res.json(msg);
		});
	},
	update: function(req, res) {
		var query = {name: /Skol/i};
		var mod = {
			name: 'Brahma',
			alcohol: 4,
			price: 6,
			category: 'pilsen'
		};
		Model.update(query, mod, function(err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = err;
			} else {
				console.log("Cervejas atualizadas com sucesso: ", data);
				msg = data;
			}
			res.json(msg);
		});
	},
	delete: function(req, res) {
		var query = {name: /brahma/i};
		Model.remove(query, function(err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = err;
			} else {
				console.log("Cerveja deletada com sucesso, quantidade: ", data);
				msg = data;
			}
			res.json(msg);
		});
	}
};

module.exports = Controller;