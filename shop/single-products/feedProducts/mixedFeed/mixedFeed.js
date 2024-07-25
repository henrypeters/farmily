const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} mixed feed has been added to your cart`);
       localStorage.setItem("mixedFeed", "Mixed Feed");
       localStorage.setItem("mixedFeedNum", input.value)
       localStorage.setItem("mixedFeedPrice", input.value*500);
    }else{
        alert("fill in the fields")
    }
})
