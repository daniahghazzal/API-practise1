let productData = [];

fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log("api data", data);
    productData = data;
  });

console.log(productData);

let container = document.getElementById("container");

setTimeout(function () {
  for (let i = 0; i < productData.length; i++) {
    console.log(productData[i]);
    let product = productData[i];

    container.innerHTML += `<div class="col-sm-4">

<div  class="card h-100 shadow-sm">
<img class= "img" src = "${
      product.image
    }" width = "100px" 
height = "100px"  />
<div class"size">
 <div class="card-body d-flex flex-column  ">
<p card-text text-success mb-2 >${product.price}$</p>
<p class="card-title fs-6">${product.title}</p>
<button class="btn btn-outline-primary mt-auto">Buy Now</button>

 </div>
</div>
</div>



</div>`;
  }
}, 1000);
