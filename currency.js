const rupeeEl = document.getElementById("rupee");
const dollarEl = document.getElementById("dollar");
const rubelEl = document.getElementById("rubel");
const poundEl = document.getElementById("pound");



function computeCurrency(event){
    const result = +event.target.value;
    
    switch(event.target.name){
        case "rupee":
            dollarEl.value = (result * 0.0121).toFixed(2);
            rubelEl.value = (result * 1.01).toFixed(2);
            poundEl.value = (result * 0.0097).toFixed(2);
         break;
         case "dollar":
            rupeeEl.value = (result * 82.46).toFixed(2);
            poundEl.value = (result * 0.80).toFixed(2);
            rubelEl.value = (result *83.12).toFixed(2);
        break;
        case "rubel":
            rupeeEl.value = (result * 0.99).toFixed(2);
            poundEl.value = (result * 0.0096).toFixed(2);
            dollarEl.value = (result * 0.012).toFixed(2);
        break;
        case "pound":
            rupeeEl.value = (result * 103.39).toFixed(2);
            poundEl.value = (result * 104.23).toFixed(2);
            dollarEl.value = (result * 1.25).toFixed(2);
        break;
        default:
            break;
    }
}