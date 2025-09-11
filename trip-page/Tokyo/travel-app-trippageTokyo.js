// Tokyo packages data
const packages = [
	{
		title: "Tokyo Cherry Blossom Tour",
		duration: "6N/7D",
		locations: "Tokyo, Ueno Park, Shinjuku",
		cost: 195000,
		label: "Seasonal",
		image: "https://plus.unsplash.com/premium_photo-1694475696780-75771ade62bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpbmp1a3V8ZW58MHx8MHx8fDA%3D"
	},
	{
		title: "Tokyo City Explorer",
		duration: "5N/6D",
		locations: "Tokyo, Asakusa, Akihabara",
		cost: 145000,
		label: "Guided Tour",
		image: "https://images.unsplash.com/photo-1547251808-66d1db460ce0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNha3VzYXxlbnwwfHwwfHx8MA%3D%3D"
	},
	{
		title: "Budget Tokyo Experience",
		duration: "4N/5D",
		locations: "Tokyo",
		cost: 89000,
		label: "Budget",
		image: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D"
	},
	{
		title: "Tokyo & Mt. Fuji Adventure",
		duration: "7N/8D",
		locations: "Tokyo, Mt. Fuji, Hakone",
		cost: 255000,
		label: "Adventure",
		image: "https://plus.unsplash.com/premium_photo-1661962643046-198516c2bec0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXQuZnVqaXxlbnwwfHwwfHx8MA%3D%3D"
	},
	{
		title: "Tokyo Family Fun",
		duration: "6N/7D",
		locations: "Tokyo, Disneyland Tokyo",
		cost: 175000,
		label: "Family",
		image: "https://images.unsplash.com/photo-1547782126-87bb2bead14e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzbmV5bGFuZCUyMHRva3lvfGVufDB8fDB8fHww"
	},
	{
		title: "Tokyo Food & Culture Tour",
		duration: "5N/6D",
		locations: "Tokyo, Tsukiji Market",
		cost: 165000,
		label: "Culture",
		image: "https://plus.unsplash.com/premium_photo-1686538381765-da778cf88d9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHN1a2lqaSUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D"
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
