---
title: Claims
---

## Tables

### `Claim`

| Column      | FK                      |
| ----------- | ----------------------- |
| Id          |                         |
| ClaimNumber |                         |
| CreatedBy   | FK_Claim_User_CreatedBy |
| CreatedOn   |                         |

### `PendingClaim`

| Column                  | FK                          |
| ----------------------- | --------------------------- |
| Id                      |                             |
| AdjusterName            |                             |
| AdjusterReceivesBilling |                             |
| AppointmentDate         |                             |
| CatastrophicEvent       |                             |
| City                    |                             |
| ClaimNumber             |                             |
| CompanyName             |                             |
| EndTime                 |                             |
| FileName                |                             |
| InsuredLastName         |                             |
| PostalCode              |                             |
| RequiresHAAG            |                             |
| RequiresMultipleTechs   |                             |
| ServiceTypes            |                             |
| StartTime               |                             |
| State                   |                             |
| StreetAddress           |                             |
| UploadDateTime          |                             |
| UserId                  | FK_PendingClaim_User_UserId |
| WasDeleted              |                             |

### `ExternalClaim`


| Column                  | FK                                                 |
| ----------------------- | -------------------------------------------------- |
| Id                      |                                                    |
| AdjusterEmail           |                                                    |
| AdjusterName            |                                                    |
| AdjusterPhone           |                                                    |
| AppointmentDate         |                                                    |
| BillingContact          |                                                    |
| BillingEmail            |                                                    |
| BillingPhone            |                                                    |
| CatastrophicEvent       |                                                    |
| City                    |                                                    |
| ClaimNumber             |                                                    |
| CompanyName             |                                                    |
| CreatedBy               | FK_ExternalClaim_User_CreatedBy                    |
| EndTime                 |                                                    |
| InsuredLastName         |                                                    |
| IsIndependentAdjuster   |                                                    |
| IsReinspect             |                                                    |
| Notes                   |                                                    |
| Phone                   |                                                    |
| PostalCode              |                                                    |
| ProjectId               | FK_ExternalClaim_Project_ProjectId                 |
| RequiresHaag            |                                                    |
| StartTime               |                                                    |
| StateId                 | FK_ExternalClaim_State_StateId                     |
| StreetAddress           |                                                    |
| Suite                   |                                                    |
| TransactionId           |                                                    |
| UploadDateTime          |                                                    |
| XactimateStatusId       | FK_ExternalClaim_XactimateStatus_XactimateStatusId |
| VendorTypeId            | FK_ExternalClaim_MasterVendorType_VendorTypeId     |
| SymbilityAssignmentId   |                                                    |
| ValidationError         |                                                    |
| AdjusterId              |                                                    |
| AdjusterReceivesBill    |                                                    |
| BillingContactId        |                                                    |
| ClaimId                 |                                                    |
| CompanyBillingContactId |                                                    |
| CompanyId               |                                                    |
| IsCompanyOnExternalForm |                                                    |

### `ExternalClaimAsset`

| Column          | FK                                                  |
| --------------- | --------------------------------------------------- |
| AssetId         | FK_ExternalClaimAsset_Asset_AssetId                 |
| ExternalClaimId | FK_ExternalClaimAsset_ExternalClaim_ExternalClaimId |

### `ExternalClaimDamageType`

| Column          | FK                                                       |
| --------------- | -------------------------------------------------------- |
| ExternalClaimId | FK_ExternalClaimDamageType_ExternalClaim_ExternalClaimId |
| DamageTypeId    |                                                          |
| OtherInspection |                                                          |

### `ExternalClaimServiceType`

| Column                                                                    | FK                                                                      |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| AvailableServiceTypeId                                                    | FK_ExternalClaimServiceType_AvailableServiceType_AvailableServiceTypeId |
| ExternalClaimId FK_ExternalClaimServiceType_ExternalClaim_ExternalClaimId |
