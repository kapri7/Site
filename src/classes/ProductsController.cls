public with sharing class ProductsController {

	@AuraEnabled
	public static List<Product__c> getProducts(String categoryId) {
		return [SELECT
				Id
				,Name
				,Category__c
				,Description__c
				,Price__c
				,Quantity__c
				,Picture__c
			FROM Product__c
			WHERE Category__c = :categoryId];
	}
}