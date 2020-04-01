const products = require("./product.json");
const { client } = require("./connection");

let bulk = [];

products.forEach(product =>{
   bulk.push({index:{ 
                 _index:"product-library", 
                 _type:"product",
             }          
         });
  bulk.push(product);
});


client.bulk({body: bulk}, function(err, response){ 
         if(err){ 
            console.error("Failed Bulk operation", err) 
         } else { 
            console.log("Successfully imported %s", products.length); 
         } 
}); 
