# Users, User Types, Roles, and Permissions

## `User`

| Column                  | FK                             |
| ----------------------- | ------------------------------ |
| Id                      |                                |
| AddressLatitude         |                                |
| AddressLongitude        |                                |
| Comment                 |                                |
| CreatedBy               |                                |
| CreatedOn               |                                |
| DeactivationDate        |                                |
| FirstName               |                                |
| HaagCertificationNumber |                                |
| Initials                |                                |
| IsActive                |                                |
| IsApproved              |                                |
| IsHaagCertified         |                                |
| IsInCollections         |                                |
| LastLogin               |                                |
| LastName                |                                |
| MailingCity             |                                |
| MailingPostalCode       |                                |
| MailingStateId          | FK_User_State_MailingStateId   |
| MailingStreetAddress1   |                                |
| MailingStreetAddress2   |                                |
| MiddleName              |                                |
| PrimaryEmail            |                                |
| PrimaryPhone            |                                |
| PrimaryPhoneExt         |                                |
| RoleId                  | FK_User_Role_RoleId            |
| SecondaryEmail          |                                |
| SecondaryPhone          |                                |
| ServiceCity             |                                |
| ServicePostalCode       |                                |
| ServiceStateId          | (FK_User_State_ServiceStateId) |
| ServiceStreetAddress1   |                                |
| ServiceStreetAddress2   |                                |
| SmsEmail                |                                |
| UserTypeId              | (FK_User_UserType_UserTypeId)  |
| RowVersion              |                                |


## `UserType`

| Column | FK  |
| ------ | --- |
| Id     |     |
| Name   |     |


## `Permission`

| Column    | FK  |
| --------- | --- |
| Id        |     |
| GroupName |     |
| IsPage    |     |
| Name      |     |
| Order     |     |

## `Role`

| Column     | FK                          |
| ---------- | --------------------------- |
| Id         |                             |
| Name       |                             |
| UserTypeId | FK_Role_UserType_UserTypeId |

## `RolePermission`

| Column       | FK                                        |
| ------------ | ----------------------------------------- |
| PermissionId | FK_RolePermission_Permission_PermissionId |
| RoleId       | FK_RolePermission_Role_RoleId             |
