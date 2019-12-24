public with sharing class CategoriesController {

	@AuraEnabled
	public static List<Category__c> getCategories() {
		return [SELECT Id, Name, Total_Quantity__c FROM Category__c ORDER BY  Name];
	}
}