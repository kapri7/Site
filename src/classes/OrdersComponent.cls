public with sharing class OrdersComponent {

	@AuraEnabled
	public static List<Order__c> getOrders() {
		return [SELECT
			Id
			,Name
			,Status__c
			,Order_price__c
			,OwnerId
		FROM Order__c
		ORDER BY Name];
	}
}