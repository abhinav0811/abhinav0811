const AddPrdct = document.querySelector("#addproduct");
const AddForm = document.getElementById("form");
AddPrdct.addEventListener('click',()=>
{
    AddForm.style.display="block";
})
const CutForm = document.getElementById("cross");
CutForm.addEventListener('click',()=>
{
    AddForm.style.display="none";
})
const DeletePrdct = document.getElementById("addproduct1");
const DeleteForm = document.getElementById("form1");
DeletePrdct.addEventListener('click',()=>
{
    DeleteForm.style.display="block";
})
const CutForm1 = document.getElementById("cross1");
CutForm1.addEventListener('click',()=>
{
    DeleteForm.style.display="none";
})


function handleFormSubmission(event) {
  event.preventDefault();

  const imageUrl = document.getElementById("imageUrl").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const items = parseInt(document.getElementById("items").value);


  let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

  const existingProductIndex = products.findIndex((product) => product.name === name);

  if (existingProductIndex !== -1) {

    products[existingProductIndex].items += items;
  } else {

    products.push({ imageUrl, name, price, items });
  }


  localStorage.setItem("products", JSON.stringify(products));


  document.getElementById("imageUrl").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("items").value = "";

}

document.getElementById("form").addEventListener("submit", handleFormSubmission);


function showProductsFromLocalStorage() {
    var productList = document.getElementById("productList");
    

    if (typeof(Storage) !== "undefined") {
        var products = JSON.parse(localStorage.getItem("products")) || [];
        
        if (products.length > 0) {
 
            productList.innerHTML = "";
            
   
            var ul = document.createElement("ul");
            ul.style.display="flex";
            ul.style.flexDirection='row';
            ul.style.marginRight="5rem";
            products.forEach(function(product) {
                var details = document.createElement("div");
                details.style.position="absolute";
                details.style.marginLeft="0rem";
                details.style.marginTop="6rem";
                details.style.fontSize="1.2rem";
                details.style.fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ";
                var li = document.createElement("li");
                li.style.zIndex="-1";
                li.style.fontSize="1.5rem";
                li.style.marginLeft="0rem";
                li.style.marginRight="2rem";
                li.style.marginTop="2rem";
                li.style.marginBottom="5rem";
                li.style.paddingRight="0rem";
                li.style.paddingLeft="10rem";
                li.style.paddingTop="2rem";
                li.style.paddingBottom="20rem";
                li.style.borderRadius="1.1rem";
                li.style.backgroundColor="#fff";
                li.style.color="black";
                var img =document.createElement("img"); 
                img.style.height="10rem"
                img.style.marginRight="10rem"
                img.src=product.imageUrl;
                var p = document.createElement("p");
                p.textContent=product.name;
                var p1 = document.createElement("p");
                p1.textContent="₹"+product.price;
                var p2 = document.createElement("span");
                p2.textContent="No of items: ";
                p2.style.paddingRight="1rem";
                var items = document.createElement("span");
                items.textContent=product.items;
                li.appendChild(img);
                details.appendChild(p);
                details.appendChild(p1);
                details.appendChild(p2);
                details.appendChild(items);
                li.appendChild(details);  
                ul.appendChild(li);
            });
            

            productList.appendChild(ul);
        } else {
            productList.textContent = "No products found.";
        }
    } else {
        productList.textContent = "Local storage is not available in your browser.";
    }
}


var productsButton = document.querySelector(".prdct");
productsButton.addEventListener("click", showProductsFromLocalStorage);

function deleteProduct() {
    var nameToDelete = document.getElementById("name1").value;
    var itemsToDelete = parseInt(document.getElementById("items1").value);
  
    if (typeof(Storage) !== "undefined") {
      var products = JSON.parse(localStorage.getItem("products")) || [];
      var productIndexToDelete = -1;
  
      for (var i = 0; i < products.length; i++) {
        if (products[i].name === nameToDelete) {
          productIndexToDelete = i;
          break;
        }
      }
  
      if (productIndexToDelete !== -1) {
    
        products[productIndexToDelete].items -= itemsToDelete;
  
    
        if (products[productIndexToDelete].items <= 0) {
          products.splice(productIndexToDelete, 1);
        }
  
        localStorage.setItem("products", JSON.stringify(products));
  
        document.getElementById("name1").value = "";
        document.getElementById("items1").value = "";
  
        alert("Product deleted from local storage.");
      } else {
        alert("Product not found in local storage.");
      }
    } else {
      alert("Local storage is not available in your browser.");
    }
  }
  
  document.getElementById("submit1").addEventListener("click", deleteProduct);
  

  function updateProduct() {
    var imageUrl = document.getElementById("imageUrl").value;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;


    var product = {
        imageUrl: imageUrl,
        name: name,
        price: price,
        items: items
    };

    if (typeof(Storage) !== "undefined") {
        var products = JSON.parse(localStorage.getItem("products")) || [];

        // Find the index of the product with the same name
        var existingProductIndex = products.findIndex(function(existingProduct) {
            return existingProduct.name === name;
        });

        if (existingProductIndex !== -1) {
            // Update the existing product's properties
            products[existingProductIndex].imageUrl = imageUrl;
            products[existingProductIndex].price = price;

        } else {
            // Add the new product
            products.push(product);
        }

        localStorage.setItem("products", JSON.stringify(products));

        document.getElementById("imageUrl").value = "";
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";


        alert("Product updated in local storage.");
    } else {
        alert("Local storage is not available in your browser.");
    }
}

document.getElementById("submit").addEventListener("click", updateProduct);
document.getElementById("submit").addEventListener("click", ()=>
{
    AddForm.style.display="none";
});
document.getElementById("submit1").addEventListener("click", ()=>
{
    DeleteForm.style.display="none";
});

function updateProduct() {
  var imageUrl = document.getElementById("imageUrl").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var items = parseInt(document.getElementById("items").value); // Get the number of items

  if (isNaN(items) || items <= 0) {
      alert("Please enter a valid number of items.");
      return;
  }

  var product = {
      imageUrl: imageUrl,
      name: name,
      price: price,
      items: items // Use the items provided in the form
  };

  if (typeof(Storage) !== "undefined") {
      var products = JSON.parse(localStorage.getItem("products")) || [];

      // Find the index of the product with the same name
      var existingProductIndex = products.findIndex(function(existingProduct) {
          return existingProduct.name === name;
      });

      if (existingProductIndex !== -1) {
          // If the product already exists, increment the items
          products[existingProductIndex].items += items; // Increment the items
      } else {
          // Add the new product
          products.push(product);
      }

      localStorage.setItem("products", JSON.stringify(products));

      document.getElementById("imageUrl").value = "";
      document.getElementById("name").value = "";
      document.getElementById("price").value = "";
      document.getElementById("items").value = "";

      alert("Product updated in local storage.");
  } else {
      alert("Local storage is not available in your browser.");
  }
}
