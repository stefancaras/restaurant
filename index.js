let filteredItems;

const createTable = () => {
	const table = document.querySelector('.table');
	table.innerHTML = "";
	filteredItems.forEach(item => {
		let row = table.insertRow(0);
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		cell1.innerHTML = `<img class="tableImg" src='${item.imgURL}' />`;
		cell2.innerHTML = `<p class="niconne">${item.name}</p>
		<p class="">${item.ingredients}</p>`;
		cell3.innerHTML = `<p class="niconne">$${item.price}</p>`;
		cell4.innerHTML = `<a class="greenBtn marginLeft" href="details.html?id=${item.id}">
		<i class="fa fa-info-circle marginRight"></i>Details</a>`
	});
};

const showBooks = async (categorySelected) => {
	const result = await fetch(`./index.json`);
	let items = await result.json();
	filteredItems = items.filter((item) => item.category === categorySelected);
	createTable();
};

window.addEventListener('DOMContentLoaded', showBooks("appetizers"));

document.querySelector("#category").addEventListener('click', (event) => {
	const categorySelected = document.querySelector('input[name=category]:checked').value;
	if (event.target.classList.contains("radio")) {
		showBooks(categorySelected);
	}
})