/**
 *
 * @param {Event} event
 */
function updateInvoice(event) {
  let parent = event.target.closest(".item");
  let quantity = parseInt(event.target.value);
  let totnet_totalal = 0;
  let shipping = 0;
  let grandprice = 0;

  let price = parseFloat(
    parent.querySelector(".invoice__price").textContent.replace("$", "")
  );
  let invoice__quantity_el = parent.querySelector(".invoice__quantity");
  let invoice__net_el = parent.querySelector(".invoice__net");
  let invoice__shipping_el = parent.querySelector(".invoice__shipping");
  let invoice__subtotal_el = parent.querySelector(".invoice__subtotal");
  let invoice__tax_el = parent.querySelector(".invoice__tax");
  let invoice__gprice_el = parent.querySelector(".invoice__gprice");

  invoice__quantity_el.textContent = quantity;
  invoice__net_el.textContent = quantity ? `$ ${parseFloat(quantity * price).toFixed(2)}` : "$--";

  let shipping_rates = [
    { cost: 5.0, quantity: 5 },
    { cost: 7.0, quantity: 7 },
    { cost: 10.0, quantity: 10 },
  ];

  let shipping_cost = parseFloat(shipping_rates.find(
    (rate) => quantity <= rate.quantity
  ).cost).toFixed(2);

  invoice__shipping_el.textContent = quantity ? `$ ${shipping_cost}` : "$--";

  
  net_total = quantity  ? `$ ${parseFloat(quantity * price + shipping_cost).toFixed(2)}` : "$--"; 

  invoice__subtotal_el.textContent = net_total

  let net_total_value = parseFloat(net_total.replace('$--','0').replace('$ ',''))
  let tax = parseFloat(net_total_value ? net_total_value * 0.08 : 0).toFixed(2);
  invoice__tax_el.textContent = `$ ${tax}`
  
  grandprice =parseFloat( parseFloat(net_total_value) + parseFloat(tax)).toFixed(2)
  invoice__gprice_el.textContent = `$ ${grandprice}`
    
}
