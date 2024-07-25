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
const ninthName = document.getElementById("name9");
const tenthName = document.getElementById("name10");
const eleventhName = document.getElementById("name11");
const twelvethName = document.getElementById("name12");
const thirteenName = document.getElementById("name13");
const fourteenName = document.getElementById("name14");
const fifteenName = document.getElementById("name15");
const sixteenName = document.getElementById("name16");
const seventeenName = document.getElementById("name17");

const numItem1 = document.getElementById("numOfitem1");
const numItem2 = document.getElementById("numOfitem2");
const numItem3 = document.getElementById("numOfitem3");
const numItem4 = document.getElementById("numOfitem4");
const numItem5 = document.getElementById("numOfitem5");
const numItem6 = document.getElementById("numOfitem6");
const numItem7 = document.getElementById("numOfitem7");
const numItem8 = document.getElementById("numOfitem8");
const numItem9 = document.getElementById("numOfitem9");
const numItem10 = document.getElementById("numOfitem10");
const numItem11 = document.getElementById("numOfitem11");
const numItem12 = document.getElementById("numOfitem12");
const numItem13 = document.getElementById("numOfitem13");
const numItem14 = document.getElementById("numOfitem14");
const numItem15 = document.getElementById("numOfitem15");
const numItem16 = document.getElementById("numOfitem16");
const numItem17 = document.getElementById("numOfitem17");

const price1 = document.getElementById("firstPrice")
const price2 = document.getElementById("secondPrice")
const price3 = document.getElementById("thirdPrice")
const price4 = document.getElementById("fourthPrice")
const price5 = document.getElementById("fivePrice")
const price6 = document.getElementById("sixPrice")
const price7 = document.getElementById("sevenPrice")
const price8 = document.getElementById("eightPrice")
const price9 = document.getElementById("ninePrice")
const price10 = document.getElementById("tenPrice")
const price11 = document.getElementById("elevenPrice")
const price12 = document.getElementById("twelvePrice")
const price13 = document.getElementById("thirteenPrice")
const price14 = document.getElementById("fourteenPrice")
const price15 = document.getElementById("fifteenPrice")
const price16 = document.getElementById("sixteenPrice")
const price17 = document.getElementById("seventeenPrice")

const rm1 = document.getElementById("rmBtn1");
const rm2 = document.getElementById("rmBtn2");
const rm3 = document.getElementById("rmBtn3");
const rm4 = document.getElementById("rmBtn4");
const rm5 = document.getElementById("rmBtn5");
const rm6 = document.getElementById("rmBtn6");
const rm7 = document.getElementById("rmBtn7");
const rm8 = document.getElementById("rmBtn8");
const rm9 = document.getElementById("rmBtn9");
const rm10 = document.getElementById("rmBtn10");
const rm11 = document.getElementById("rmBtn11");
const rm12 = document.getElementById("rmBtn12");
const rm13 = document.getElementById("rmBtn13");
const rm14 = document.getElementById("rmBtn14");
const rm15 = document.getElementById("rmBtn15");
const rm16 = document.getElementById("rmBtn16");
const rm17 = document.getElementById("rmBtn17");

const item1 = document.getElementById("firstItem");
const item2 = document.getElementById("secondItem");
const item3 = document.getElementById("thirdItem");
const item4 = document.getElementById("fourthItem");
const item5 = document.getElementById("fifthItem");
const item6 = document.getElementById("sixthItem");
const item7 = document.getElementById("sevenItem");
const item8 = document.getElementById("eightItem");
const item9 = document.getElementById("nineItem");
const item10 = document.getElementById("tenItem");
const item11 = document.getElementById("elevenItem");
const item12 = document.getElementById("twelveItem");
const item13 = document.getElementById("thirteenItem");
const item14 = document.getElementById("fourteenItem");
const item15 = document.getElementById("fifteenItem");
const item16 = document.getElementById("sixteenItem");
const item17 = document.getElementById("seventeenItem");



firstName.value = localStorage.getItem("cheese");
secondName.value = localStorage.getItem("yogurt");
thriddName.value = localStorage.getItem("panner");
fourthName.value = localStorage.getItem("creamButter");
fifthName.value = localStorage.getItem("ghee");
sixthName.value = localStorage.getItem("probioticDrink");
seventhName.value = localStorage.getItem("infantFormula");
eighthName.value = localStorage.getItem("milk");
ninthName.value = localStorage.getItem("pasture");
tenthName.value = localStorage.getItem("barley");
eleventhName.value = localStorage.getItem("corn");
twelvethName.value = localStorage.getItem("dryRoughage")
thirteenName.value = localStorage.getItem("oat")
fourteenName.value = localStorage.getItem("straw");
fifteenName.value = localStorage.getItem("mixedFeed");
sixteenName.value = localStorage.getItem("silage");
seventeenName.value = localStorage.getItem("sorghumGrain");

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

if (ninthName.value === ""){
    item9.style.display = "none";
}

if (tenthName.value === ""){
    item10.style.display = "none";
}

if (eleventhName.value === ""){
    item11.style.display = "none";
}


if (twelvethName.value === ""){
    item12.style.display = "none";
}

if(thirteenName.value === ""){
    item13.style.display = "none";
}

if (fourteenName.value === ""){
    item14.style.display = "none";
}

if (fifteenName.value === ""){
    item15.style.display = "none";
}

if (sixteenName.value === ""){
    item16.style.display = "none";
}

if (seventeenName.value === ""){
    item17.style.display = "none";
}

if (firstName.value ==- "" && secondName.value === "" && thriddName.value === "" 
&& fourthName.value === ""  && fifthName.value === ""  && sixthName.value === ""
&& seventhName.value === "" && eighthName.value === "" && ninthName.value === ""
&& tenthName.value === "" && eleventhName.value === "" && twelvethName.value === ""
&& thirteenName.value === "" && fourteenName.value === "" && fifteenName.value === ""
&& sixteenName.value === "" && seventeenName.value === ""){
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

rm9.addEventListener("click", function(){
    item9.style.display = "none";
    localStorage.removeItem("pasture");
})

rm10.addEventListener("click", function(){
    item10.style.display = "none";
    localStorage.removeItem("barley");
})

rm11.addEventListener("click", function(){
    item11.style.display = "none";
    localStorage.removeItem("corn");
})

rm12.addEventListener("click", function(){
    item12.style.display = "none";
    localStorage.removeItem("dryRoughage");
})

rm13.addEventListener("click", function(){
    item13.style.display = "none";
    localStorage.removeItem("oat");
})

rm14.addEventListener("click", function(){
    item14.style.display = "none";
    localStorage.removeItem("straw");
})

rm15.addEventListener("click", function(){
    item15.style.display = "none";
    localStorage.removeItem("mixedFeed");
})

rm16.addEventListener("click", function(){
    item16.style.display = "none";
    localStorage.removeItem("silage");
})

rm17.addEventListener("click", function(){
    item17.style.display = "none";
    localStorage.removeItem("sorghumGrain");
})

numItem1.innerHTML = localStorage.getItem("cheeseNum") + ` item`;
numItem2.innerHTML = localStorage.getItem("yogurtNum") + ` item`;
numItem3.innerHTML = localStorage.getItem("pannerNum") + ` item`;
numItem4.innerHTML = localStorage.getItem("creamButterNum") + ` item`;
numItem5.innerHTML = localStorage.getItem("gheeNum") + ` item`;
numItem6.innerHTML = localStorage.getItem("probioticNum")  + ` item`;
numItem7.innerHTML = localStorage.getItem("InfantNum")  + ` item`;
numItem8.innerHTML = localStorage.getItem("milkNum")  + ` item`;
numItem9.innerHTML = localStorage.getItem("pastureNum")  + ` item`;
numItem10.innerHTML = localStorage.getItem("barleyNum")  + ` item`;
numItem11.innerHTML = localStorage.getItem("cornNum")  + ` item`;
numItem12.innerHTML = localStorage.getItem("dryRoughageNum")  + ` item`;
numItem13.innerHTML = localStorage.getItem("oatNum")  + ` item`;
numItem14.innerHTML = localStorage.getItem("strawNum")  + ` item`;
numItem15.innerHTML = localStorage.getItem("mixedFeedNum")  + ` item`;
numItem16.innerHTML = localStorage.getItem("silageNum")  + ` item`;
numItem17.innerHTML = localStorage.getItem("sorghumGrainNum")  + ` item`;

price1.innerHTML = `₦` + localStorage.getItem("cheesePrice");
price2.innerHTML = `₦` + localStorage.getItem("yogurtPrice");
price3.innerHTML = `₦` + localStorage.getItem("pannerPrice");
price4.innerHTML = `₦` + localStorage.getItem("creamButterPrice");
price5.innerHTML = `₦` + localStorage.getItem("gheePrice");
price6.innerHTML = `₦` +  localStorage.getItem("probioticPrice");
price7.innerHTML = `₦` + localStorage.getItem("InfantPrice");
price8.innerHTML = `₦` + localStorage.getItem("milkPrice");
price9.innerHTML = `₦` + localStorage.getItem("pasturePrice");
price10.innerHTML = `₦` + localStorage.getItem("barleyPrice");
price11.innerHTML = `₦` + localStorage.getItem("cornPrice");
price12.innerHTML = `₦` + localStorage.getItem("dryRoughagePrice");
price13.innerHTML = `₦` + localStorage.getItem("oatPrice");
price14.innerHTML = `₦` + localStorage.getItem("strawPrice");
price15.innerHTML = `₦` + localStorage.getItem("mixedFeedPrice");
price16.innerHTML = `₦` + localStorage.getItem("silagePrice");
price17.innerHTML = `₦` + localStorage.getItem("sorghumGrainPrice"); 
