"use strict"

// localStorage.setItem("name","cavid");

// localStorage.setItem("surname","Ismayilzade");

// localStorage.removeItem("name");

// console.log(localStorage.getItem("name"));


// let names =["Pervin","Elekber","Aqshin"];


// localStorage.setItem("names",JSON.stringify(names));


// console.log(JSON.parse(localStorage.getItem("names")));


// document.querySelector("button").onclick = function(){
//     // localStorage.removeItem("name");

//     // localStorage.clear();

//     let datas = JSON.parse(localStorage.getItem("names"));


//     for (const item of datas) {
//         console.log(item);
//     }



// }


// sessionStorage.setItem("email","testEmail@gmail.com");

// console.log(sessionStorage.getItem("email"));


let cardBtns = document.querySelectorAll("#shop a");


let products = [];


if (localStorage.getItem("basket") != null) {
    products = JSON.parse(localStorage.getItem("basket"));
}


cardBtns.forEach(btn => {

    btn.addEventListener("click", function (e) {
        e.preventDefault();


        let prductImg = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = this.previousElementSibling.innerText;
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));


        let existProduct = products.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count += 1;
        } else {

            products.push({
                id: productId,
                name: productName,
                img: prductImg,
                descript: productDesc,
                count: 1
            })
        }

        localStorage.setItem("basket", JSON.stringify(products));

        getBasketCount(products);

    })
});


function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count

    }
    document.querySelector("sup").innerText = sum;
}

getBasketCount(products);