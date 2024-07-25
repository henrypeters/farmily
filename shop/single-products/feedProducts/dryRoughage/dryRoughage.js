const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} dry roughage has been added to your cart`);
       localStorage.setItem("dryRoughage", "Dry Roughage");
       localStorage.setItem("dryRoughageNum", input.value)
       localStorage.setItem("dryRoughagePrice", input.value*400);
    }else{
        alert("fill in the fields")
    }
})
