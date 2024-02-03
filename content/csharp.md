---
title: C#
---

# C#

:u-icon{name="i-logos-c-sharp" class="h-11 w-auto float-right pl-8 mb-16"}


C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing,  strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.


```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceRegions
  where sa.Id == id
  select new ServiceRegionDTO {
    Id = sa.Id,
    Name = sa.Name,
    IsActive = sa.IsActive,
    IsCatastropheRegion = sa.IsCatastropheRegion,
    CreatedBy = sa.CreatedBy,
    CreatedOn = sa.CreatedOn,
    ModifiedBy = sa.CreatedBy,
    ModifiedOn = sa.CreatedOn,
    Timestamp = sa.RowVersion,
    RegionLeadId = sa.RegionLead,
    LeadName = sa.UserRegionLead.FirstName + " " + sa.UserRegionLead.LastName,
    IsDeleted = sa.IsDeleted
  }
).FirstOrDefault();
```
