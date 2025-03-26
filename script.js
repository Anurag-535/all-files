document.addEventListener('DOMContentLoaded'), function() {
    // Initialize mock data
    const mockFoodDonations = [
        {
            id: 1,
            title: "Fresh Pasta Meals",
            description: "10 portions of fresh pasta with tomato sauce. Made today, best consumed within 24 hours.",
            foodType: "meal",
            quantity: "10 portions",
            pickupStart: "18:00",
            pickupEnd: "20:00",
            expiryDate: "2025-03-13",
            address: "123 Main St, Downtown",
            location: { lat: 40.7128, lng: -74.0060 },
            contactInfo: "+1 (555) 123-4567",
            restaurantId: 1,
            restaurantName: "Luigi's Italian",
            posted: "2025-03-12T10:00:00",
            image: "https://source.unsplash.com/random/300x200/?pasta"
        },
        {
            id: 2,
            title: "Assorted Bakery Items",
            description: "Variety of bread, pastries, and cookies from today's baking. All items are fresh and delicious.",
            foodType: "bread",
            quantity: "25 items",
            pickupStart: "19:30",
            pickupEnd: "21:00",
            expiryDate: "2025-03-13",
            address: "456 Baker Avenue, Midtown",
            location: { lat: 40.7282, lng: -73.9942 },
            contactInfo: "+1 (555) 234-5678",
            restaurantId: 2,
            restaurantName: "Morning Bakery",
            posted: "2025-03-12T11:30:00",
            image: "https://source.unsplash.com/random/300x200/?bakery"
        },
        {
            id: 3,
            title: "Fruit Salad Bowls",
            description: "Fresh fruit salad with berries, melon, and citrus. Perfect healthy snack or dessert.",
            foodType: "produce",
            quantity: "15 bowls",
            pickupStart: "15:00",
            pickupEnd: "17:00",
            expiryDate: "2025-03-13",
            address: "789 Green Street, Uptown",
            location: { lat: 40.7352, lng: -74.0120 },
            contactInfo: "+1 (555) 345-6789",
            restaurantId: 3,
            restaurantName: "Fresh & Healthy Café",
            posted: "2025-03-12T09:15:00",
            image: "https://source.unsplash.com/random/300x200/?fruit"
        },
        {
            id: 4,
            title: "Roast Chicken Meals",
            description: "8 portions of roast chicken with vegetables and gravy. Fully cooked and ready to eat.",
            foodType: "protein",
            quantity: "8 meals",
            pickupStart: "17:30",
            pickupEnd: "19:30",
            expiryDate: "2025-03-13",
            address: "321 Roasting Lane, Westside",
            location: { lat: 40.7420, lng: -74.0080 },
            contactInfo: "+1 (555) 456-7890",
            restaurantId: 4,
            restaurantName: "Rotisserie House",
            posted: "2025-03-12T14:00:00",
            image: "https://source.unsplash.com/random/300x200/?roast"
        },
        {
            id: 5,
            title: "Chocolate Brownies",
            description: "Freshly baked chocolate brownies. Rich, fudgy, and delicious. Great for dessert or snack.",
            foodType: "dessert",
            quantity: "20 pieces",
            pickupStart: "16:00",
            pickupEnd: "18:00",
            expiryDate: "2025-03-14",
            address: "555 Sweet Avenue, Eastside",
            location: { lat: 40.7220, lng: -73.9880 },
            contactInfo: "+1 (555) 567-8901",
            restaurantId: 5,
            restaurantName: "Sweet Delights",
            posted: "2025-03-12T13:45:00",
            image: "https://source.unsplash.com/random/300x200/?brownies"
        }
    ];

    const mockRestaurants = [
        {
            id: 1,
            name: "Luigi's Italian",
            email: "info@luigisitalian.com",
            phone: "+1 (555) 123-4567",
            address: "123 Main St, Downtown",
            location: { lat: 40.7128, lng: -74.0060 },
            type: "finedining",
            description: "Authentic Italian cuisine with a focus on traditional pasta dishes and fresh ingredients."
        },
        {
            id: 2,
            name: "Morning Bakery",
            email: "hello@morningbakery.com",
            phone: "+1 (555) 234-5678",
            address: "456 Baker Avenue, Midtown",
            location: { lat: 40.7282, lng: -73.9942 },
            type: "bakery",
            description: "Artisanal bakery offering fresh bread, pastries, and cookies baked daily."
        },
        {
            id: 3,
            name: "Fresh & Healthy Café",
            email: "contact@freshhealthy.com",
            phone: "+1 (555) 345-6789",
            address: "789 Green Street, Uptown",
            location: { lat: 40.7352, lng: -74.0120 },
            type: "cafe",
            description: "Health-focused café serving fresh juices, smoothies, salads, and vegetarian options."
        },
        {
            id: 4,
            name: "Rotisserie House",
            email: "info@rotisseriehouse.com",
            phone: "+1 (555) 456-7890",
            address: "321 Roasting Lane, Westside",
            location: { lat: 40.7420, lng: -74.0080 },
            type: "other",
            description: "Specializing in slow-roasted meats and hearty comfort food."
        },
        {
            id: 5,
            name: "Sweet Delights",
            email: "desserts@sweetdelights.com",
            phone: "+1 (555) 567-8901",
            address: "555 Sweet Avenue, Eastside",
            location: { lat: 40.7220, lng: -73.9880 },
            type: "bakery",
            description: "Dessert shop offering a variety of cakes, cookies, and other sweet treats."
        }
    ];

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const donateBtn = document.getElementById('donate-food-btn');
    const findFoodBtn = document.getElementById('find-food-btn');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');
    const closeButtons = document.querySelectorAll('.close-modal');

    function openModal(id) {
        document.getElementById(id).style.display = 'block';
    }

    function closeAllModals() {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('login-modal');
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('register-modal');
        });
    }

    if (donateBtn) {
        donateBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('add-donation-modal');
        });
    }
}
