<aura:application extends="force:slds" implements="flexipage:availableForAllPageTypes,forceCommunity:availableForAllPageTypes" access="global">
    <aura:attribute name="orders" type="Product__c[]"/>
    <c:Header orders="{!v.orders}"/>
    <c:Body orders="{!v.orders}"/>
    <!--<c:Admin/>-->
</aura:application>