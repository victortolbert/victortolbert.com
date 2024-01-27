https://help.salesforce.com/s/
https://help.salesforce.com/s/articleView?id=sf.fs_overview.htm&type=5

Salesforce Standard Objects
https://help.salesforce.com/s/articleView?id=sf.fs_overview.htm&type=5

https://forcewinds.wordpress.com/2020/07/09/absolute-basics-of-salesforce-field-service-lightning-data-model/
https://www.google.com/search?q=salesforce+standard+objects&sca_esv=572560862&tbm=isch&sxsrf=AM9HkKkXpm38zjUakx5-9JkT4lZLG3AiWg:1697036278785&source=lnms&sa=X&ved=2ahUKEwjojcXkoO6BAxVeFFkFHQveC7kQ_AUoAXoECAEQAw&biw=1920&bih=963&dpr=1#imgrc=8rwHIGdViPobMM

https://www.webassessor.com/wa.do?page=defaultLogin

https://trailhead.salesforce.com/content/learn/trails/administrator-certification-prep

- Correct State

Customers, Partners and Employees

Customers typically access an Experience Cloud site to seek help for solving issues, manage Account information, or access other data such as knowledge articles , cases, orders , invoices etc.

https://d.la1-c1cs-ia7.salesforceliveagent.com/chat/rest/Visitor/Settings.jsonp?Settings.prefix=Visitor&Settings.buttonIds=[573DR0000008fyP]&Settings.updateBreadcrumb=1&callback=embedded_svc.liveAgentAPI.connection.handlePing&deployment_id=572DR0000008f7s&org_id=00DDR000000qERv&version=48

```apex
@AuraEnabled(cacheable=true)
public static List<Property__c> getTopSeller() {
  return [
    SELECT
      Name,
      Broker__r.Name,
      Price_Sold__c
    FROM Property__c
    WHERE Price_Sold__c > 0
    ORDER BY Price_Sold__c DESC
    LIMIT 1
  ];
}
```
