
let total = 0;
let discountApplied = false;

function addToCart(name, price) {
    const li = document.createElement('li');
    li.textContent = `${name} - ₹${price}`;
    document.getElementById('cart-items').appendChild(li);

    total += price;
    document.getElementById('total').innerText = total;

    document.getElementById('cart-count').innerText =
        document.getElementById('cart-items').children.length;

    discountApplied = false; // reset coupon when new item added
    document.getElementById('coupon-msg').innerText = "";
}

function applyCoupon() {
    if (total < 2000) {
        document.getElementById('coupon-msg').innerText = "Coupon not available for orders below ₹2000";
        return;
    }

    if (discountApplied) {
        document.getElementById('coupon-msg').innerText = "Coupon already applied!";
        return;
    }

    const discount = total * 0.10; // 10% discount
    total -= discount;

    document.getElementById('total').innerText = total.toFixed(2);
    document.getElementById('coupon-msg').innerText = "🎉 Coupon applied! 10% discount added.";
    discountApplied = true;
}

 //Review Form Submission 

function submitReview() {
    const name = document.getElementById("name").value.trim();
    const review = document.getElementById("review").value.trim();
    const message = document.getElementById("message");
    const reviewList = document.getElementById("reviewList");

    if (name === "" || review === "") {
        message.style.color = "red";
        message.textContent = "Please enter your name and review.";
        return;
    }

    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `<strong>${name}</strong><p>${review}</p>`;

    reviewList.appendChild(div);

    message.style.color = "green";
    message.textContent = "Review submitted successfully!";

    document.getElementById("name").value = "";
    document.getElementById("review").value = "";

    // Auto-hide message after 3 seconds
    setTimeout(() => {
        message.textContent = "";
    }, 3000);
}

