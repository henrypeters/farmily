// const firstName = document.getElementById("name1");
// const secondName = document.getElementById("name2");
// const thriddName = document.getElementById("name3");
// const fourthName = document.getElementById("name4");
// const fifthName = document.getElementById("name5");
// const sixthName = document.getElementById("name6");
// const seventhName = document.getElementById("name7");
// const eighthName = document.getElementById("name8");

// const item1 = document.getElementById("firstItem")
// const item2 = document.getElementById("secondItem");
// const item3 = document.getElementById("thirdItem")
// const item4 = document.getElementById("fourthItem")
// const item5 = document.getElementById("fifthItem")
// const item6 = document.getElementById("sixthItem")
// const item7 = document.getElementById("sevenItem")
// const item8 = document.getElementById("eightItem")

// const itemContainer = document.getElementById("itemHold")
// const price1 = document.getElementById("firstPrice")
// const price2 = document.getElementById("secondPrice")
// const price3 = document.getElementById("thirdPrice")
// const price4 = document.getElementById("fourthPrice")
// const price5 = document.getElementById("fivePrice")
// const price6 = document.getElementById("sixPrice")
// const price7 = document.getElementById("sevenPrice")
// const price8 = document.getElementById("eightPrice")


// firstName.innerHTML = localStorage.getItem("pro1");
// secondName.innerHTML = localStorage.getItem("pro2");
// const numItem1 = document.getElementById("noItem");

// const rm1 = document.getElementById("rmBtn1");
// const rm2 = document.getElementById("rmBtn2");
// const rm3 = document.getElementById("rmBtn3");
// const rm4 = document.getElementById("rmBtn4");
// const rm5 = document.getElementById("rmBtn5");
// const rm6 = document.getElementById("rmBtn6");
// const rm7 = document.getElementById("rmBtn7");
// const rm8 = document.getElementById("rmBtn8");

// rm1.addEventListener("click", function(){
//     localStorage.removeItem("pro1");
//     item1.style.display = "none"
// })

// price1.innerHTML = `₦` + localStorage.getItem("price1");
// numItem1.innerHTML = localStorage.getItem("price1No") + ` item`

// if (firstName.innerHTML === ""){
//     item1.style.display = "none";
// }  

// if (secondName.innerHTML === ""){
//     item2.style.display = "none";
// }

// if (firstName.innerHTML ==- "" && secondName.innerHTML === ""){
//     itemContainer.innerHTML = `<div class="notification"><p>Your Cart Is Empty</p></div>`
// }

const itemContainer = document.getElementById("itemHold")


const firstName = document.getElementById("name1");
const secondName = document.getElementById("name2");
const thriddName = document.getElementById("name3");
const fourthName = document.getElementById("name4");
const fifthName = document.getElementById("name5");
const sixthName = document.getElementById("name6");
const seventhName = document.getElementById("name7");
const eighthName = document.getElementById("name8");

const numItem1 = document.getElementById("numOfitem1");
const numItem2 = document.getElementById("numOfitem2");
const numItem3 = document.getElementById("numOfitem3");
const numItem4 = document.getElementById("numOfitem4");
const numItem5 = document.getElementById("numOfitem5");
const numItem6 = document.getElementById("numOfitem6");
const numItem7 = document.getElementById("numOfitem7");
const numItem8 = document.getElementById("numOfitem8");

const price1 = document.getElementById("firstPrice")
const price2 = document.getElementById("secondPrice")
const price3 = document.getElementById("thirdPrice")
const price4 = document.getElementById("fourthPrice")
const price5 = document.getElementById("fivePrice")
const price6 = document.getElementById("sixPrice")
const price7 = document.getElementById("sevenPrice")
const price8 = document.getElementById("eightPrice")

const rm1 = document.getElementById("rmBtn1");
const rm2 = document.getElementById("rmBtn2");
const rm3 = document.getElementById("rmBtn3");
const rm4 = document.getElementById("rmBtn4");
const rm5 = document.getElementById("rmBtn5");
const rm6 = document.getElementById("rmBtn6");
const rm7 = document.getElementById("rmBtn7");
const rm8 = document.getElementById("rmBtn8");

const item1 = document.getElementById("firstItem");
const item2 = document.getElementById("secondItem");
const item3 = document.getElementById("thirdItem");
const item4 = document.getElementById("fourthItem");
const item5 = document.getElementById("fifthItem");
const item6 = document.getElementById("sixthItem");
const item7 = document.getElementById("sevenItem");
const item8 = document.getElementById("eightItem");



firstName.value = localStorage.getItem("cheese");
secondName.value = localStorage.getItem("yogurt");
thriddName.value = localStorage.getItem("panner");
fourthName.value = localStorage.getItem("creamButter");
fifthName.value = localStorage.getItem("ghee");
sixthName.value = localStorage.getItem("probioticDrink");
seventhName.value = localStorage.getItem("infantFormula");
eighthName.value = localStorage.getItem("milk");

if (firstName.value === ""){
    item1.style.display = "none";
}

if (secondName.value === ""){
    item2.style.display = "none";
}

if (thriddName.value === ""){
    item3.style.display = "none";
}

if (fourthName.value === ""){
    item4.style.display = "none";
}

if (fifthName.value === ""){
    item5.style.display = "none";
}

if (sixthName.value === ""){
    item6.style.display = "none";
}

if (seventhName.value === ""){
    item7.style.display = "none";
}

if (eighthName.value === ""){
    item8.style.display = "none";
}

if (firstName.value ==- "" && secondName.value === "" && thriddName.value === "" 
&& fourthName.value === ""  && fifthName.value === ""  && sixthName.value === ""
&& seventhName.value === "" && eighthName.value === ""){
    itemContainer.innerHTML = `<div class="notification">
                                <img src="../../images/icons/big-emptyIcon.png" alt="">
                                <p>Your Cart Is Empty</p>
                                </div>`;
}

rm1.addEventListener("click", function(){
    item1.style.display = "none";
    localStorage.removeItem("cheese");
})

rm2.addEventListener("click", function(){
    item2.style.display = "none";
    localStorage.removeItem("yogurt");
})

rm3.addEventListener("click", function(){
    item3.style.display = "none";
    localStorage.removeItem("panner");
})

rm4.addEventListener("click", function(){
    item4.style.display = "none";
    localStorage.removeItem("creamButter");
})

rm5.addEventListener("click", function(){
    item5.style.display = "none";
    localStorage.removeItem("ghee");
})

rm6.addEventListener("click", function(){
    item6.style.display = "none";
    localStorage.removeItem("probioticDrink");
})

rm7.addEventListener("click", function(){
    item7.style.display = "none";
    localStorage.removeItem("infantFormula");
})

rm8.addEventListener("click", function(){
    item8.style.display = "none";
    localStorage.removeItem("milk");
})

numItem1.innerHTML = localStorage.getItem("cheeseNum") + ` item`;
numItem2.innerHTML = localStorage.getItem("yogurtNum") + ` item`;
numItem3.innerHTML = localStorage.getItem("pannerNum") + ` item`;
numItem4.innerHTML = localStorage.getItem("creamButterNum") + ` item`;
numItem5.innerHTML = localStorage.getItem("gheeNum") + ` item`;
numItem6.innerHTML = localStorage.getItem("probioticNum")  + ` item`;
numItem7.innerHTML = localStorage.getItem("InfantNum")  + ` item`;
numItem8.innerHTML = localStorage.getItem("milkNum")  + ` item`;

price1.innerHTML = `₦` + localStorage.getItem("cheesePrice");
price2.innerHTML = `₦` + localStorage.getItem("yogurtPrice");
price3.innerHTML = `₦` + localStorage.getItem("pannerPrice");
price4.innerHTML = `₦` + localStorage.getItem("creamButterPrice");
price5.innerHTML = `₦` + localStorage.getItem("gheePrice");
price6.innerHTML = `₦` +  localStorage.getItem("probioticPrice");
price7.innerHTML = `₦` + localStorage.getItem("InfantPrice");
price8.innerHTML = `₦` + localStorage.getItem("milkPrice");
