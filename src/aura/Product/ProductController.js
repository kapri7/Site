/**
 * Created by drive on 21.12.2019.
 */

({
    addOrder: function(component, event, helper) {

        let product = component.get("v.product");
        let selectedNumber = document.getElementById(product.Id);
      
        product.SelectedNumber__c = selectedNumber.value;
        console.log(selectedNumber);
        if(selectedNumber.value <= product.Quantity__c)
        {
        helper.addNewOrder(component, product);
        }
        else alert("Unfortunately we don`t have enough items in the storage.");

    }
});