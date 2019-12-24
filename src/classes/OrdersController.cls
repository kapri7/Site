public with sharing class OrdersController {

	@AuraEnabled
	public static List<Order__c> getOrders() {
		return [SELECT
			Id
			,Name
			,Status__c
			,Order_price__c
		FROM Order__c
		ORDER BY Name];
	}

	@AuraEnabled
	public static List<Order__c> getOrderById(String orderId) {
		return [SELECT
			Id
			,Name
			,Status__c
			,Order_price__c
		FROM Order__c
		WHERE Id = :orderId];
	}

	@AuraEnabled
	public static List<Order_Line_Item__c> getOrderLineItemsByOrderId(String orderId) {
		return [SELECT
			Id
			,Name
			,Product__c
			,Order__c
			,Total_Price__c
			,Total_Quantity__c
		FROM Order_Line_Item__c
		WHERE Order__c = :orderId];
	}
}