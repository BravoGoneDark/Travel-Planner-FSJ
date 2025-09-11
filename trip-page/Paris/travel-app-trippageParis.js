// Paris packages data
const packages = [
	{
		title: "Romantic Paris Getaway",
		duration: "5N/6D",
		locations: "Paris, Versailles",
		cost: 185000,
		label: "Couple Special",
		image: "https://plus.unsplash.com/premium_photo-1722201172292-cddb5a776f2e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVyc2FpbGxlc3xlbnwwfHwwfHx8MA%3D%3D"
	},
	{
		title: "Paris & Loire Valley Explorer",
		duration: "7N/8D",
		locations: "Paris, Loire Valley",
		cost: 245000,
		label: "Guided Tour",
		image: "https://plus.unsplash.com/premium_photo-1697729582646-a5d923464b30?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9pcmUlMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D"
	},
	{
		title: "Budget Paris City Break",
		duration: "4N/5D",
		locations: "Paris",
		cost: 99000,
		label: "Budget",
		image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D"
	},
	{
		title: "Paris, Nice & French Riviera",
		duration: "8N/9D",
		locations: "Paris, Nice, Cannes",
		cost: 315000,
		label: "Luxury",
		image: "https://images.unsplash.com/photo-1578240749366-a1d3b6c39cb4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlbmNoJTIwcml2aWVyYXxlbnwwfHwwfHx8MA%3D%3D"
	},
	{
		title: "Paris Family Adventure",
		duration: "6N/7D",
		locations: "Paris, Disneyland Paris",
		cost: 210000,
		label: "Family",
		image: "https://images.unsplash.com/photo-1585488322438-211f7b8766c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzbmV5bGFuZCUyMHBhcmlzfGVufDB8fDB8fHww"
	},
	{
		title: "Paris Art & Culture Tour",
		duration: "5N/6D",
		locations: "Paris, Montmartre",
		cost: 165000,
		label: "Culture",
		image: "https://images.unsplash.com/photo-1623009070764-45002990256e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9udG1hcnRyZXxlbnwwfHwwfHx8MA%3D%3D"
	}
];

function getRandomRating() {
	return (Math.random() * (1) + 4).toFixed(1); // 4.0 to 5.0
}

function renderPackages(list) {
	const container = document.getElementById('packages-container');
	container.innerHTML = '';
	list.forEach(pkg => {
		const rating = getRandomRating();
		const card = document.createElement('div');
		card.className = 'package-card';
		card.innerHTML = `
			<img class="package-image" src="${pkg.image}" alt="${pkg.title}">
			<div class="package-label">${pkg.label}</div>
			<div class="package-content">
				<div class="package-title">${pkg.title}</div>
				<div class="package-details">
					<span class="package-duration"><i class="fa-regular fa-clock"></i> ${pkg.duration}</span>
				</div>
				<div class="package-locations"><i class="fa-solid fa-location-dot"></i> ${pkg.locations}</div>
				<div class="package-rating">
					${renderStars(rating)}
					<span>${rating}</span>
				</div>
				<div class="package-cost">₹${pkg.cost.toLocaleString()}/Person</div>
			</div>
		`;
		container.appendChild(card);
	});
}

function renderStars(rating) {
	const fullStars = Math.floor(rating);
	const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
	let stars = '';
	for (let i = 0; i < fullStars; i++) {
		stars += '<i class="fa-solid fa-star"></i>';
	}
	if (halfStar) stars += '<i class="fa-solid fa-star-half-stroke"></i>';
	for (let i = fullStars + halfStar; i < 5; i++) {
		stars += '<i class="fa-regular fa-star"></i>';
	}
	return stars;
}

function sortPackages(type) {
	let sorted = [...packages];
	if (type === 'cost-asc') {
		sorted.sort((a, b) => a.cost - b.cost);
	} else if (type === 'cost-desc') {
		sorted.sort((a, b) => b.cost - a.cost);
	} else if (type === 'rating-desc') {
		// Sort by random rating (simulate)
		sorted = sorted.map(pkg => ({...pkg, _rating: parseFloat(getRandomRating())}));
		sorted.sort((a, b) => b._rating - a._rating);
	}
	renderPackages(sorted);
}

document.addEventListener('DOMContentLoaded', () => {
	renderPackages(packages);
	document.getElementById('filter-select').addEventListener('change', (e) => {
		const val = e.target.value;
		if (val === 'default') {
			renderPackages(packages);
		} else {
			sortPackages(val);
		}
	});
});
