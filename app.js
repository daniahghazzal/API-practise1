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

    container.innerHTML += `<div class="col-sm-4 custom">

<div  class="card  ">
<img class= "img" src = "${
      product.image
    }" width = "100px" 
height = "100px"  />


 <div class="card-body d-flex flex-column  ">
<p card-text text-success  fs-6 >${product.price}$</p>

<button class="btn btn-outline-dark mt-auto">Buy Now</button>
 
 </div>

</div>



</div>`;
  }
}, 1000);
