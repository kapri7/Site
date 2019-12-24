({
	doInit : function(component) {
		const action = component.get("c.getCategories");

		action.setCallback(this, function (response) {
			const state = response.getState();

			if (state === "SUCCESS") {
				component.set("v.categories", response.getReturnValue());

				const categoryList = component.get("v.categories");
				component.set("v.selectedId", categoryList[0].Id);

				let defaultSelectEvent = component.getEvent("categorySelected");
				defaultSelectEvent.setParams({"categoryId" : component.get("v.selectedId")});
				defaultSelectEvent.fire();
			} else {
				//
			}
		});

		$A.enqueueAction(action);
	},

	clickOnCategory: function(component, event) {
		const categoryId = event.target.id;

		component.set("v.selectedId", categoryId);

		let clickEvent = component.getEvent("categorySelected");
		clickEvent.setParams({"categoryId" : categoryId});

		clickEvent.fire();
	}
})