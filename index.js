let items;

const createTable = () => {
	const table = document.querySelector('.table');
	items.forEach(item => {
		let row = table.insertRow(0);
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		cell1.innerHTML = `<img class="cartImg" src='${item.imgURL}' />`;
		cell2.innerHTML = `<p class="niconne">${item.name}</p>
		<p class="">${item.ingredients}</p>`;
		cell3.innerHTML = `<p class="niconne">$${item.price}</p>`;
		cell4.innerHTML = `<a class="greenBtn marginLeft" href="details.html?id=${item.id}">
		<i class="fa fa-info-circle marginRight"></i>Details</a>`
	});
};

const showBooks = async () => {
	scroll(0,0);
	// Show loader
	document.querySelector('.table').style.display = 'none';
	document.querySelector('.loader').style.display = 'block';
	// Show items
	const result = await fetch(`./index.json`);
	items = await result.json();
	createTable();
	// Hide loader
	document.querySelector('.loader').style.display = 'none';
	document.querySelector('.table').style.display = 'block';
};

window.addEventListener('DOMContentLoaded', showBooks);