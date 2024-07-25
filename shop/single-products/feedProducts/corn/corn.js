const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} corn has been added to your cart`);
       localStorage.setItem("corn", "Corn");
       localStorage.setItem("cornNum", input.value)
       localStorage.setItem("cornPrice", input.value*450);
    }else{
        alert("fill in the fields")
    }
})
