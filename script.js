
let total = 0;
function addToCart(name, price) {
    const li = document.createElement('li');
    li.textContent = `${name} - ₹${price}`;
    document.getElementById('cart-items').appendChild(li);
    total += price;
    document.getElementById('total').innerText = total;
    document.getElementById('cart-count').innerText =
        document.getElementById('cart-items').children.length;
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

