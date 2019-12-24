/**
 * Created by drive on 22.12.2019.
 */

public with sharing class OrderLineItemController {
    @AuraEnabled
    public static List<Order_Line_Item__c> getOrderLineItems() {
        // Perform isAccessible() checking first, then
        return [SELECT Id,Name, Order__c, Product__c,Total_Price__c, Total_Quantity__c FROM Order_Line_Item__c];
    }

    @AuraEnabled
    public static List<Order_Line_Item__c> saveOrderLineItems(List<Order_Line_Item__c> orderLineItems, List<Product__c> SelNum) {
        // Perform isUpdateable() checking first, then
        List<Order__c> a = [SELECT Id FROM Order__c];
        Integer i = 0;
        for (Order_Line_Item__c orderLineItem : orderLineItems) {
            orderLineItem.Order__c = a[a.size() - 1].Id;
            upsert  (SObject) orderLineItem;

            Product__c p = [SELECT Id,Quantity__c FROM Product__c WHERE Product__c.Id =: orderLineItem.Product__c][0];

            p.Quantity__c = p.Quantity__c - SelNum[i].SelectedNumber__c;
             if(p.Quantity__c < 3)
                 p.Quantity__c = p.Quantity__c + 5;
             upsert p;
            i ++;
        }


        return orderLineItems;
    }
    @AuraEnabled
    public static Order__c saveOrder() {
        Order__c newOrder = new Order__c();
        upsert  (SObject) newOrder;
        return newOrder;
    }
}