/**
 * Created by drive on 22.12.2019.
 */

({

    createOrderItem: function(component, products) {

        let listOrderItems = component.get("v.lineOrderItems");

        products.forEach(function(product){

        let orderItem = {};//component.get("v.orderItem");

        orderItem.Product__c = product.Id;

         orderItem.Total_Quantity__c = product.SelectedNumber__c;

         orderItem.Total_Price__c = product.SelectedNumber__c * product.Price__c;
         listOrderItems.push(orderItem);

        console.log(listOrderItems[0].Total_Price__c);

                    });


                     let action = component.get("c.saveOrderLineItems");

                                        action.setParams({
                                            "orderLineItems": listOrderItems,
                                            "SelNum": products
                                        });
                                action.setCallback(this, function(response){
                                let state = response.getState();
                                            if (state === "SUCCESS") {
                                               //alert("Success orderItems!");
                                            }
                                            else alert(response);
                                        });

                                        $A.enqueueAction(action);
        },

});