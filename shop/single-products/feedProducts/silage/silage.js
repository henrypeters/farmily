const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} silage has been added to your cart`);
       localStorage.setItem("silage", "Silage");
       localStorage.setItem("silageNum", input.value)
       localStorage.setItem("silagePrice", input.value*400);
    }else{
        alert("fill in the fields")
    }
})
