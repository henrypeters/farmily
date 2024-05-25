const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} panner has been added to your cart`);
       localStorage.setItem("panner", "Panner");
       localStorage.setItem("pannerNum", input.value)
       localStorage.setItem("pannerPrice", input.value*650);
    }else{
        alert("fill in the fields")
    }
})
