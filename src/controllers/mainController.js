const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const visited = products.filter(function(product) {
	return product.category == 'visited'
})

const inSale = products.filter(function(product) {
	return product.category == 'in-sale'
})

const controller = {
	index: (req, res) => {
		res.render('index',{
		visited,
		inSale,
		toThousand
		})
	},
	search: (req, res) => {
		let search = req.query.keywords;
		let produtctsToSearch = products.filter(product => product.name.toLowerCase().includes(search));
		res.render('results',{
		products: produtctsToSearch,
		search,
		toThousand
		});
	},
};

module.exports = controller;
