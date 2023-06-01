
let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if(!productsInCart){
	productsInCart = [];
}
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
const countProduct = document.querySelector('#sum-products'); /*ეს დამატებულია პროდუქტის ჯამისთვის*/
const countProduct1 = document.querySelector('#sum-products1'); /*ეს დამატებულია პროდუქტის ჯამისთვის Scincare/Exclusives*/
const products = document.querySelectorAll('.product-under');


const countTheSumPrice = function () { // 4
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}

const countTheProduct = function () { // 4
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.count;
	});
	return sum;
} /*ეს დამატებულია პროდუქტის ჯამისთვის*/

const updateShoppingCartHTML = function () {  // 3
	localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
	if (productsInCart.length > 0) {
		let result = productsInCart.map(product => {
			return `
				<li class="buyItem">
					<img src="${product.image}">
					<div>
						<h4>${product.name}</h4>
						<h6>${product.name1}</h6>
						<h6>$${product.price}</h6>
						<div>
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
						</div>
					</div>
				</li>`
		});
		// <h6>${product.name1}</h6> დამატებულია პროდუქტის ქვე სახელისთვის
		
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		cartSumPrice.innerHTML = '<bdi>Total</bdi> ' + '$' + countTheSumPrice(); /* როცა არ მინდა cart-ში გამოჩნდეს total (ჯამური თანხა) მაშინ cartSumPrice.innerHTML = 'Total ' + countTheSumPrice() + ' $;'; ვაკომენტარებ */
		countProduct.innerHTML = countTheProduct(); /*ეს დამატებულია პროდუქტის ჯამისთვის*/
		countProduct1.innerHTML = countTheProduct(); /*ეს დამატებულია პროდუქტის ჯამისთვის Scincare/Exclusives*/
	}
	else {
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty mt-4">Your bag is empty.</h4>';
		cartSumPrice.innerHTML = '';
		countProduct.innerHTML = ''; /*ეს დამატებულია პროდუქტის ჯამისთვის*/
		countProduct1.innerHTML = ''; /*ეს დამატებულია პროდუქტის ჯამისთვის Scincare/Exclusives*/
	}
}

function updateProductsInCart(product) { // 2
	for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
		}
	}
	productsInCart.push(product);
}

products.forEach(item => {   // 1
	item.addEventListener('click', (e) => {
		if (e.target.classList.contains('addToCart')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.productName').innerHTML;
			const productSubName = item.querySelector('.productSubName').innerHTML; /*ეს დამატებულია პროდუქტის ქვე სახელისთვის*/
			const productPrice = item.querySelector('.priceValue').innerHTML;
			const productImage = item.querySelector('img').src;
			let product = {
				name: productName,
				name1: productSubName, /*ეს დამატებულია პროდუქტის ქვე სახელისთვის*/
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
			}
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});

parentElement.addEventListener('click', (e) => { // Last
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');
	if (isPlusButton || isMinusButton) {
		for (let i = 0; i < productsInCart.length; i++) {
			if (productsInCart[i].id == e.target.dataset.id) {
				if (isPlusButton) {
					productsInCart[i].count += 1
				}
				else if (isMinusButton) {
					productsInCart[i].count -= 1
				}
				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

			}
			if (productsInCart[i].count <= 0) {
				productsInCart.splice(i, 1);
			}
		}
		updateShoppingCartHTML();
	}
});

updateShoppingCartHTML();




// იშვიათ შემთხვევაში, როდესაც ირევა სკრიპტი და პროდუქტის განულების მიუხედავად კალათაში არ ქრება პროდუქტი (ბრაუზერში (ქრომში) მინუსის ან პლიუსის ღილაკზე გიწერს <button class="button-minus" data-id="undefined" ან <button class="button-plus" data-id="undefined"), აჩვენებს გარკვეულ ოდენობას და ვერც ამატებ და ვერც აკლებ, ხოლო სხვა პროდუქტის დამატებისას ცალკე გიჩვენებს პროდუქტს, რომლის დამატება-მოკლება, ან გაუქმება შესაძლებელია. ამის გამოსასწორებლად ვმოქმედებ შემდეგნაირად: იმ პროდუქტს, რომლის დამატება-მოკლება ან გაუქმება ვერ ხერხდება, html-ში, სადაც არის კალათაში დამატების ღილაკი - add to cart/bag, კლასით - class="addToCart" და data-product-id="4", "4" პირობითად, data-product-id="4"-ის ვცვლი data-id="4"-ით, რათა დამატება შევძლო იმ გაშეშებულ პროდუქტშივე. შემდეგ ჯავაში productsInCart[i].count += 1; ვცვლი productsInCart[i].count -= 1; მინუსით, რათა ყოველ დამატებაზე მოხდეს მოკლება და ამგვარად გაუქმებამდე დაყვანა (ბოლოს ვაბრუნებ საწყის მდგომარებაზე html-საც და js-საც).
