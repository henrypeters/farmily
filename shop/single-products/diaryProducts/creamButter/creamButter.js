const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} cream butter has been added to your cart`);
       localStorage.setItem("creamButter", "Cream Butter");
       localStorage.setItem("creamButterNum", input.value)
       localStorage.setItem("creamButterPrice", input.value*350);
    }else{
        alert("fill in the fields")
    }
})
