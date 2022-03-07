let display = document.getElementById("display_data");
var pro = JSON.parse(localStorage.getItem("products"));


var main_div = document.createElement("div");


let product_name = document.createElement("h1");
product_name.innerHTML = (JSON.stringify(pro[0].name));

let product_price = document.createElement("h1");
product_price.innerHTML = (JSON.stringify(pro[0].price));

let product_type = document.createElement("h1");
product_type.innerHTML = (JSON.stringify(pro[0].type));

let product_ima = document.createElement("img");
product_ima.src = (JSON.stringify(pro[0].image));



main_div.append(product_name,product_price,product_type,product_ima);
display.append(main_div);





function my_fun(){
    window.location.href = `index.html`;
}