const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} cheese has been added to your cart`);
       localStorage.setItem("cheese", "Cheese")
       localStorage.setItem("cheeseNum", input.value)
       localStorage.setItem("cheesePrice", input.value*550);
    }else{
        alert("fillin the fields")
    }
})
