({
    doInit : function(component, event, helper) {
        const categoryId = component.get("v.categoryId");

        let action = component.get("c.getProducts");
        action.setParams({"categoryId": categoryId});

        action.setCallback(this, function (response) {
            const state = response.getState();

            if (state === "SUCCESS") {
                component.set("v.products", response.getReturnValue());
            } else {
                //
            }
        });

        $A.enqueueAction(action);
    }
})