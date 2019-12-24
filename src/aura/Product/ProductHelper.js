({
    addNewOrder: function(component, product) {
        let theOrder = component.get("v.orders");
 

        let newOrder = JSON.parse(JSON.stringify(product));
 
        theOrder.push(newOrder);
        component.set("v.orders", theOrder);
        theOrder.forEach(function(item,i,orders) {
                 console.log(JSON.stringify(item));
               });
    }
})