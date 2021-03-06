// importação do módulo model.js
var Model = require('./model');

var msg = "";
var Controller = {
	create: function(req, res) {
		var dados = req.body;

		var model = new Model(dados);

		model.save(function (err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = "Erro: " + err;
			} else {
				console.log("Cerveja inserida.", data);
				msg = data;
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
	list: function(req, res) {
		var query = {};
		Model.find(query, function(err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = err;
			} else {
				console.log("listagem: ", data);
				msg = data;
			}
			res.render('list', { title: 'Listagem de Cervejas', beers: data });
		});
	},
	get: function(req, res) {
		var query = {_id: req.params.id};
		Model.findOne(query, function(err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = err;
			} else {
				console.log("Get: ", data);
				msg = data;
			}
			res.json(msg);
		});
	},
	see: function(req, res) {
		var query = {_id: req.params.id};
		Model.findOne(query, function(err, data) {
			if(err) {
				console.log("Erro: ", err);
				msg = err;
			} else {
				console.log("Get: ", data);
				msg = data;
			}
			res.render('beer', { title: 'Exibindo uma cerveja', beer: data });
		});
	},
	
	update: function(req, res) {
		var query = {_id: req.params.id};
		var mod = req.body;
		
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
		var query = {_id: req.params.id};
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