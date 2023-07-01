const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let lower = str.toLowerCase();
	const newArr = fruit.map(item => item.toLowerCase());
	results = newArr.filter(value => value.includes(lower))
	let resultArr = results.slice(0,5);
	return resultArr.map(fruit => fruit.charAt(0).toUpperCase() + fruit.slice(1));
}

function searchHandler(e1) {
	if(e1.target.value !== ''){
		showSuggestions(search(e1.target.value));
	}else{
		suggestions.innerHTML = '';
	}
}

function showSuggestions(results) {
	suggestions.innerHTML = '';
	results.forEach(item => {
		let newLi = document.createElement('li');
		newLi.className = 'suggestions';
		newLi.innerText = item;
		suggestions.appendChild(newLi);
	});
}

function useSuggestion(e2) {
	input.value = e2.target.innerText;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);