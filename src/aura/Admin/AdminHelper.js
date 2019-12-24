({
    getData: function(component) {
        let action = component.get('c.getOrders');
        action.setCallback(this, $A.getCallback(function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.data', response.getReturnValue());
            } else if (state === "ERROR") {
                let errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    },
    getOrderById: function (component, orderId) {
        let action = component.get('c.getOrderById');
        action.setParams({"orderId": orderId});
        action.setCallback(this, $A.getCallback(function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.order', response.getReturnValue());
            } else if (state === "ERROR") {
                let errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    },
    getOrderedProducts: function (component, orderId) {
        let action = component.get('c.getOrderLineItemsByOrderId');
        action.setParams({"orderId": orderId});
        action.setCallback(this, $A.getCallback(function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.orderLineItems', response.getReturnValue());
            } else if (state === "ERROR") {
                let errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    }
})