({
    handleCategorySelection : function (component, event) {
        const categoryId = event.getParam("categoryId");
        const productsCmp = component.find("productsCmp");

        component.set("v.categoryId", categoryId);

        productsCmp.initProducts();
    },
    toAdminPage: function (component, event) {

        const adminCmp = component.find("adminCmp");

        adminCmp.init();
    }
})