---
title: Customers
customers:
  - name: AAA / Ace Group
  - name: Allstate - NCT
  - name: American Automobile Association
  - name: American Family
  - name: American Integrity
  - name: American Modern
  - name: American Strategic Insurance
  - name: Amica
  - name: Arbella Mutual Insurance Company
  - name: Assurant
  - name: Auto Owners
  - name: California State Automobile Association
  - name: Capital Property
  - name: Capstone
  - name: Chubb
  - name: Crawford
  - name: Custard Insurance Adjusters
  - name: Encompass
  - name: Encova Insurance
  - name: Erie
  - name: Farmers
  - name: Florida Property
  - name: Foremost
  - name: Hanover
  - name: Home Owners Choice
  - name: Homesite
  - name: Horace Mann
  - name: IMT Insurance
  - name: Kemper
  - name: Liberty - Commercial
  - name: Liberty Mutual
  - name: Metlife
  - name: Midwest Property
  - name: National General
  - name: Nationwide
  - name: New Jersey Manufacturers Insurance
  - name: New York Property
  - name: North Central Property
  - name: Northeast Property
  - name: OTHER CUSTOMER
  - name: Ryze
  - name: Safeco
  - name: Sedgwick
  - name: Southeast Property
  - name: Southwest Property
  - name: State Farm
  - name: Tennessee Farm Bureau
  - name: The Hartford
  - name: Travelers
  - name: United Property & Casualty
  - name: United Services Automobile Association
  - name: Universal
  - name: Utica
  - name: West Central Property
  - name: Western Reserve Group
---

## Queries

### Fetch GetCompanyListQuery

```csharp
​from company in ctx.ObjectContext.vwCustomerLists                  
orderby company.Name
select company
```


## ​Grid Fields

Paginated, filtered, searchable

| Field Name      |
| --------------- |
| Customer (Name) |
| Short Name      |
| Parent          |
| Type            |
| City            |
| State           |
| Zip             |
| Billing Contact |
| Email           |
| Active          |

## View

### Customer List

Role Permission: ViewCustomersMenu = 4

- Customer (Name)
- Short Name
- Parent
- Type
- City
- State
- Zip
- Billing Contact
- Email
- Active

Paginated, filtered, searchable

### Create

Role Permission:​ AddCustomer = 26

| Field                                                     | Validation Rules |
| --------------------------------------------------------- | ---------------- |
| Full Name                                                 | required         |
| Short Name                                                |                  |
| Email Domains (textbox to add and message text to remove) |                  |
| Street                                                    | required         |
| Suite                                                     |                  |
| City                                                      | required         |
| State                                                     | required         |
| Zip                                                       | required         |
| Comments                                                  |                  |
| Adjuster Director                                         |                  |
| Bill Received by                                          |                  |
| Billing Contact                                           |                  |

#### On External Form

##### Service Types (table)

- Service Type (Name)
- Labor Cost
- Billing Price
- Hover Report Type
- Livegenic Service
- EaglView Service
- On External Form
- Active

### Update


## Queries

```csharp
​from company in ctx.ObjectContext.vwCustomerLists
orderby company.Name
select company;
```

## Tables

### `Company`

| Column               | FK                                 |
| -------------------- | ---------------------------------- |
| Id                   |                                    |
| AdjusterDirectorId   | FK_Company_User_AdjusterDirectorId |
| AdjusterManagerId    | FK_Company_User_AdjusterManagerId  |
| AdjusterReceivesBill |                                    |
| BillingContactId     | FK_Company_User_BillingContactId   |
| City                 |                                    |
| Comments             |                                    |
| CreatedBy            | FK_Company_User_CreatedBy          |
| CreatedOn            |                                    |
| FullName             |                                    |
| IsActive             |                                    |
| ParentId             | FK_Company_Company_ParentId        |
| PostalCode           |                                    |
| ProcessingByGeomni   |                                    |
| ShortName            |                                    |
| StateId              | FK_Company_State_StateId           |
| StreetAddress1       |                                    |
| StreetAddress2       |                                    |
| RowVersion           |                                    |
| HoverWalletId        |                                    |
| AssetEmailRecipients |                                    |
| HasCustomAssetEmail  |                                    |
| OnExternalForm       |                                    |
| MaxMailSize          |                                    |

## `CompanyCarrier`

| Column          | FK                                  |
| --------------- | ----------------------------------- |
| Id              |                                     |
| AlacrityCarrier |                                     |
| CompanyId       | FK_CompanyCarrier_Company_CompanyId |
| PhoneNumber     |                                     |
| StateId         | FK_CompanyCarrier_State_StateId     |
| XactwareCarrier |                                     |

## `CompanyEmailDomain`

| Column    | FK                                      |
| --------- | --------------------------------------- |
| Id        |                                         |
| CompanyId | FK_CompanyEmailDomain_Company_CompanyId |
| CreatedBy | FK_CompanyEmailDomain_User_CreatedBy    |
| CreatedOn |                                         |
| Domain    |                                         |

## `CompanyNotification`

| Column             | FK                                                               |
| ------------------ | ---------------------------------------------------------------- |
| CompanyId          | FK_CompanyNotification_Company_CompanyId                         |
| NotificationTypeId | FK_CompanyNotification_MasterNotificationType_NotificationTypeId |
| SendToAdjuster     |                                                                  |

## `CompanyNotificationRecipient`

| Column             | FK                                                                        |
| ------------------ | ------------------------------------------------------------------------- |
| CompanyId          | FK_CompanyNotificationRecipient_Company_CompanyId                         |
| RecipientEmail     |                                                                           |
| NotificationTypeId | FK_CompanyNotificationRecipient_MasterNotificationType_NotificationTypeId |

## `CompanyServiceType`

| Column                 | FK                                                                |
| ---------------------- | ----------------------------------------------------------------- |
| AvailableServiceTypeId | FK_CompanyServiceType_AvailableServiceType_AvailableServiceTypeId |
| CompanyId              |                                                                   |
| BillingPrice           |                                                                   |
| CreatedBy              | FK_CompanyServiceType_User_CreatedBy                              |
| CreatedOn              |                                                                   |
| GeomniServiceType      |                                                                   |
| HasDescription         |                                                                   |
| IsHoverEnabled         |                                                                   |
| IsActive               |                                                                   |
| IsDeleted              |                                                                   |
| LaborCost              |                                                                   |
| RowVersion             |                                                                   |
| IsLivegenicEnabled     |                                                                   |
| HoverReportTypeId      | FK_CompanyServiceType_MasterHoverReportType_HoverReportTypeId     |
| IsEagleViewEnabled     |                                                                   |
| OnExternalForm         |                                                                   |

## `CompanyUser`

| Column    | FK                               |
| --------- | -------------------------------- |
| CompanyId | FK_CompanyUser_Company_CompanyId |
| UserId    | FK_CompanyUser_User_UserId       |
| CreatedBy | FK_CompanyUser_User_CreatedBy    |
| CreatedOn |                                  |

## `CustomerEmailAccount`

| Column      | FK                                        |
| ----------- | ----------------------------------------- |
| Id          |                                           |
| CompanyId   | FK_CustomerEmailAccount_Company_CompanyId |
| CreatedBy   |                                           |
| CreatedOn   |                                           |
| Description |                                           |
| Email       |                                           |
| IsActive    |                                           |
