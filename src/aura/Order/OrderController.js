/**
 * Created by drive on 23.12.2019.
 */

({
    cancelOrder:function(component,event,helper){
        let orders = component.get("v.orders");
        let product = component.get("v.product");

        orders.forEach(function(item,i){

            if(item.Id == product.Id ) {
                console.log('deleted:'+item);
                orders.splice(i,1);
                component.set("v.orders",orders);

            }
        })
    },

    updateSelectedNumber: function(component,event,helper){
        let orders = component.get("v.orders");
        let product = component.get("v.product");
        let selectedNumber = document.getElementById(product.Name);


                orders.forEach(function(item){
                    if(item.Id == product.Id ) {
                        console.log("Before update - "+item.SelectedNumber__c);
                        item.SelectedNumber__c = selectedNumber.value;
                        component.set("v.orders",orders);
                        console.log("After update - "+item.SelectedNumber__c);
                        }

                });
                let total = 0;
                          orders.forEach(function(item){
                            total += item.SelectedNumber__c * item.Price__c;
                          });
                          component.set("v.totalPrice",total);
    },

});