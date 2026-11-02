
let cart = [];
let total = 0;

// Mobile Navigation

function toggleMenu() {

    let nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// Add Items to Cart

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total = total + price;

    displayCart();

}


// Display Cart Items

function displayCart() {

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    cart.forEach(function(item, index) {

        cartItems.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </p>
        `;

    });

    document.getElementById("total").innerText = total;

}


// Remove Items

function removeItem(index) {

    total = total - cart[index].price;

    cart.splice(index, 1);

    displayCart();

}


// WhatsApp Ordering

function placeOrder() {

    if (cart.length === 0) {

        alert("Please add food items to your cart!");

        return;

    }

    let message = "Hello Corner Cafe! I want to order:\n";

    cart.forEach(function(item) {

        message += item.name + " - ₹" + item.price + "\n";

    });

    message += "\nTotal Amount: ₹" + total;

    // Replace with your actual WhatsApp number
    let phone = "91XXXXXXXXXX";

    let url = "https://wa.me/" + phone +
              "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

}
