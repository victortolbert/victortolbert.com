---
title: Dreamhouse
description: Getting Started With Salesforce Development Playground
---

```js [housingMap.js]
import { LightningElement, wire } from 'lwc'
import getHouses from '@salesforce/apex/HouseService.getRecords'

export default class HousingMap extends LightningElement {
  mapMarkers
  error

  @wire(getHouses)
  wiredHouses({ error, data }) {
    if (data) {
      // We are using Javascript Map function to transform the
      this.mapMarkers = data.map((element) => {
        return {
          location: {
            Street: element.Address__c,
            City: element.City__c,
            State: element.State__c
          },
          title: element.Name
        }
      })
      this.error = undefined
    } else if (error) {
      this.error = error
      this.mapMarkers = undefined
    }
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
  <apiVersion>59.0</apiVersion>
  <isExposed>true</isExposed>
  <targets>
    <target>lightning__HomePage</target>
  </targets>
</LightningComponentBundle>
```

```html [housingMap.html]
<template>
  <lightning-card title="Housing Map">
      <lightning-map map-markers={mapMarkers}> </lightning-map>
  </lightning-card>
</template>
```

```apex
public with sharing class HouseService {
    @AuraEnabled(cacheable=true)
    public static List<House__c> getRecords() {
        try {
            // Create a list of House records from a SOQL query
            List<House__c> lstHouses = [
                SELECT
                   Id,
                   Name,
                   Address__c,
                   State__c,
                   City__c,
                   Zip__c
                   FROM House__c
                   WITH USER_MODE
                   ORDER BY CreatedDate
                   LIMIT 10
                ];
                  return lstHouses;
        }
        // Code to handle exception
        catch (Exception e) {
           throw new AuraHandledException(e.getMessage());
        }
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApexClass xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>59.0</apiVersion>
    <status>Active</status>
</ApexClass>
```
