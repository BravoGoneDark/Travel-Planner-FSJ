// Zurich packages data
const packages = [
	{
		title: "Swiss Paris Delight Group Departure",
		duration: "8N/7D",
		locations: "Zurich, Paris, Engelberg",
		cost: 289439,
		label: "Group Tour",
		image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80"
	},
	{
		title: "Budget Swiss Paris Group Departure",
		duration: "6N/5D",
		locations: "Zurich, Paris",
		cost: 164415,
		label: "Group Tour",
		image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
	},
	{
		title: "Rhine Falls & Mount Titlis Explorer",
		duration: "7N/6D",
		locations: "Zurich, Rhine Falls, Mount Titlis",
		cost: 210000,
		label: "Guided Tour",
		image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
	},
	{
		title: "Zurich City & Lake Lucerne Experience",
		duration: "5N/4D",
		locations: "Zurich, Lake Lucerne",
		cost: 135000,
		label: "Customized",
		image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
	},
	{
		title: "Swiss Alps Adventure",
		duration: "9N/8D",
		locations: "Zurich, Interlaken, Zermatt",
		cost: 355000,
		label: "Group Tour",
		image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
	},
	{
		title: "Zurich & Geneva Highlights",
		duration: "7N/6D",
		locations: "Zurich, Geneva",
		cost: 245000,
		label: "Guided Tour",
		image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
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
