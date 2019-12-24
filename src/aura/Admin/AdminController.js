({
    doInit : function(component, event, helper) {
        const actions = [
            { label: 'Show details', name: 'show_details' }
        ];

        component.set('v.columns', [
            { label: 'Order Name', fieldName: 'Name', type: 'text'},
            { label: 'Status', fieldName: 'Status__c', type: 'text'},
            { label: 'Order Price', fieldName: 'Order_price__c', type: 'currency'},
            { type: 'action', typeAttributes: { rowActions: actions}}
        ]);
        console.log('Here');
        helper.getData(component);
    },

    handleRowAction: function (component, event, helper) {
        let action = event.getParam('action');
        let row = event.getParam('row');

        switch (action.name) {
            case 'show_details':
                helper.getOrderById(component, row.Id);
                helper.getOrderedProducts(component, row.Id);
                break;
            case 'edit':
                break;
        }
    }
})