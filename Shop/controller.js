function butButton(type, index) {
    // butButton += shoppingCart;
    if (type == "potion") {
        console.log(model.potion[index]);
        model.shoppingCart.push(model.potion[index]);
    }

    show();

}