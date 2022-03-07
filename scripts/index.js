function main(){
    var stack = [];
    let p_name = document.getElementById("Name").value;
    let p_price = document.getElementById("Price").value;
    let p_type = document.getElementById("types").value;
    let p_img = document.getElementById("image").value;

    function data(a,b,c,d){
        this.name = a;
        this.price = b;
        this.type = c;
        this.image = d;
    }

    var shoe = new data(p_name,p_price,p_type,p_img);
    //console.log(shoe);

    stack.push(shoe);
    console.log(stack);

    localStorage.setItem("products",JSON.stringify(stack));
    //window.location.href = "inventory.html";
    
}


function main2(){
    window.location.href = "inventory.html";
}