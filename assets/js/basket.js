"use strict"






let tableBody = document.querySelector("tbody");

let products = JSON.parse(localStorage.getItem("basket"));


if (products != null) {
    for (const produc of products) {
        tableBody.innerHTML += `<tr>
        <td><img src="${produc.img}" alt=""></td>
        <td>${produc.name}</td>
        <td>${produc.description}</td>
        <td>${produc.count}</td>
        </tr>`
    }

    getBasketCount(products);

} else {
    document.querySelector("table").classList.add("d-none");
    document.querySelector(".alert-warning").classList.remove("d-none");
}

function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count

    }
    document.querySelector("sup").innerText = sum;
}



