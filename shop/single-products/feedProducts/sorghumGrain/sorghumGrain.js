const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} sorghum grain has been added to your cart`);
       localStorage.setItem("sorghumGrain", "Sorghum Grain");
       localStorage.setItem("sorghumGrainNum", input.value)
       localStorage.setItem("sorghumGrainPrice", input.value*500);
    }else{
        alert("fill in the fields")
    }
})
