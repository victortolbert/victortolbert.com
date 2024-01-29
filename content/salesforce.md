# Salesforce

## Customers, Partners and Employees

Customers typically access an Experience Cloud site to seek help for solving issues, manage Account information, or access other data such as knowledge articles , cases, orders , invoices etc.

```apex
@AuraEnabled(cacheable=true)
public static List<Property__c> getTopSeller() {
  return [
    SELECT Name, Broker__r.Name, Price_Sold__c
    FROM Property__c
    WHERE Price_Sold__c > 0
    ORDER BY Price_Sold__c DESC
    LIMIT 1
  ];
}
```

- [Salesforce Help]

<!--
  https://d.la1-c1cs-ia7.salesforceliveagent.com/chat/rest/Visitor/Settings.jsonp?Settings.prefix=Visitor&Settings.buttonIds=[573DR0000008fyP]&Settings.updateBreadcrumb=1&callback=embedded_svc.liveAgentAPI.connection.handlePing&deployment_id=572DR0000008f7s&org_id=00DDR000000qERv&version=48
-->

[Salesforce Help]: https://help.salesforce.com/s/
[Salesforce Field Service]: https://help.salesforce.com/s/articleView?id=sf.fs_overview.htm&type=5
[Salesforce Standard Objects]: https://help.salesforce.com/s/articleView?id=sf.fs_overview.htm&type=5
[Salesforce Lightning Data Model]: https://forcewinds.wordpress.com/2020/07/09/absolute-basics-of-salesforce-field-service-lightning-data-model/
[Salesforce Administrator Certification Prep]: https://trailhead.salesforce.com/content/learn/trails/administrator-certification-prep
[Salesforce Standard Objects]: https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_list.htm
[Google Search]: https://www.google.com/search?q=salesforce+standard+objects
[webassessor]: https://www.webassessor.com/wa.do?page=defaultLogin
[salesforce-custom-objects]: https://www.bacancytechnology.com/blog/salesforce-custom-objects#:~:text=Standard%20objects%20are%20designed%20to,Campaign
