document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('button');
    const cartSection = document.getElementById('cart');
    const cartList = document.createElement('ul');
    cartSection.appendChild(cartList);

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.parentElement.querySelector('h3').innerText;
            const cartItem = document.createElement('li');
            cartItem.innerText = product ;
            cartList.appendChild(cartItem);
        });
    });
});
