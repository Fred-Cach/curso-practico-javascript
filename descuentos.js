
const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function calculcarPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const priceValue = InputPrice.value;
    const discountValue = coupons.find(coupon => {return coupon.name === InputDiscount.value}).discount

    if (!discountValue) {
        alert("Código inválido")
    }else{
        const precioConDescuento = calculcarPrecioConDescuento(priceValue, discountValue);
        ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }    

};