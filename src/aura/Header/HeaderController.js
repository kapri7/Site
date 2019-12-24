({
	openModel: function(component, event, helper) {
          // for Display Model,set the "isOpen" attribute to "true"
          component.set("v.isOpen", true);
          let orders = component.get("v.orders");
          let total = 0;
          orders.forEach(function(item){
            total += item.SelectedNumber__c * item.Price__c;
          });
          component.set("v.totalPrice",total);
       },

       closeModel: function(component, event, helper) {
          // for Hide/Close Model,set the "isOpen" attribute to "False"
          component.set("v.isOpen", false);
       },

       likenClose: function(component, event, helper) {
          // Display alert message on the click on the "Purchase" button
          // and set set the "isOpen" attribute to "False for close the model Box.
          alert('Thanks for using our website:)');
          component.set("v.isOpen", false);
       },
       doPurchase: function(component,event,helper){
            let orders = component.get("v.orders");
            if(orders.length == 0)
            alert("Nothing to buy. Choose sth");
            else{
            component.set("v.isOpen", false);

            let action1 = component.get("c.saveOrder");
            action1.setCallback(this, function(response){
                                    let state = response.getState();
                                    if (state === "SUCCESS") {
                                     console.log(action1.getReturnValue());
                                     helper.createOrderItem(component,orders);

                                       //alert("Success order!");
                                    }
                                    else alert(response);
                                });

    $A.enqueueAction(action1);
       }
       component.set("v.orders",[]);
       },

       doClear:function(component, event, helper){

           component.set("v.orders",[]);
       }

})