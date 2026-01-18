
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



 
            function validateFeedback() {
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const note = document.getElementById("note").value.trim();
    const message = document.getElementById("message");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[6-9]\d{9}$/;

    // Empty check
    if (email === "" || mobile === "" || note === "") {
        message.style.color = "red";
        message.innerText = "All fields are required!";
        return;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.innerText = "Please enter a valid email address!";
        return;
    }

    // Mobile number validation
    if (!mobilePattern.test(mobile)) {
        message.style.color = "red";
        message.innerText = "Please enter a valid 10-digit mobile number!";
        return;
    }

    // Success
    message.style.color = "green";
    message.innerText = "Feedback submitted successfully! ✅";

    // Optional: Save review to file
    saveFile();

    // Clear fields
    /*document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("note").value = "";*/
}
function saveFile() {
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const note = document.getElementById("note").value.trim();

    const content =
        "Email: " + email + "\n" +
        "Mobile: " + mobile + "\n\n" +
        "Review Message:\n" +
        note;

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "feedback.txt";
    link.click();
}

