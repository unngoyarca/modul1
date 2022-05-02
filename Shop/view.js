//hjelpevariabel
let appDiv = document.getElementById('app');

show();
function show() {
    let html = '';
    html += `<div id="main">
        <div class="storeName"> Arcana </div>
         <div>Welcome to my store!</div>
         </div>
        `

    html += `<div id="dataInfo">`
    html += ``

    for (let i = 0; i < model.potion.length; i++) {
        html += ` 
        <container class="potionItems">
        <div>${model.potion[i].name}</div>
        <div>${model.potion[i].price}</div>
        <button onclick="butButton('potion' , ${i})">Buy</button>
        </container>
      `

    }

    for (let i = 0; i < model.armor.length; i++) {
        html += ` 
        <container class="armorItems">
        <div>${model.armor[i].name}</div>
        <div>${model.armor[i].price}</div>
        <button onclick="butButton()">Buy</button>
        </container>
      `
    }




    for (let i = 0; i < model.weapons.length; i++) {
        html += ` 
            <container class="weaponItems">
            <div>${model.weapons[i].name}</div>
            <div>${model.weapons[i].price}</div>
            <button onclick="butButton()">Buy</button>
            </container>
      `
        html += `</div>`
    }

    html += "<div class='shopping-cart'>";
    for (let i = 0; i < model.shoppingCart.length; i++) {
        const item = model.shoppingCart[i];
        html += `<div>${item.name} - ${item.price}</div>`;
    }
    html += '</div>';
    appDiv.innerHTML = html;
}