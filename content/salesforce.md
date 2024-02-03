# Salesforce

Salesforce, Inc. is an American cloud-based software company headquartered in San Francisco, California. It provides customer relationship management software and applications focused on sales, customer service, marketing automation, e-commerce, analytics, and application development.

::tabs
  ::div
  ---
  label: Modules
  ---

  ### [Salesforce Functions: Quick Look][24020100]

  #### Get to know Salesforce functions

  - Explain what Salesforce Functions do.
  - Decide when to use a function.
  - Find what you need to create and deploy a function.

  ::

  ::div
  ---
  label: Log
  ---

  |                                                |            |
  | ---------------------------------------------- | ---------- |
  | Get Started with Salesforce Development        | [24013100] |
  | Quick Start: Apex                              | [23120500] |
  | Lightning Design System Basics                 | [23112901] |
  | User Story Creation                            | [23112902] |
  | Salesforce Designer: Quick Look                | [23112900] |
  | Generative AI Basics                           | [23111500] |
  | Command-Line Interface                         | [23111001] |
  | Quick Start: Aura Components                   | [23110700] |
  | Cert Prep: Salesforce User Experience Designer | [23110700] |

  ::
::

::tabs
  ::div
  ---
  label: Code
  icon: i-heroicons-code-bracket-square
  ---

  ```mdc
  ::callout
  Lorem velit voluptate ex reprehenderit ullamco et culpa.
  ::
  ```
  ::

  ::div
  ---
  label: Preview
  icon: i-heroicons-magnifying-glass-circle
  ---

  ::callout
  Lorem velit voluptate ex reprehenderit ullamco et culpa.
  ::
  ::
::



::callout
This is a `callout` with full **markdown** support. It can be used to link to [another page](/pro/prose/card).
::

- https://developer.salesforce.com/
- https://developer.salesforce.com/docs
- https://trailhead.salesforce.com/en/career-path/developer/
- https://app.pluralsight.com/paths/skills/salesforce-development

[Salesforce Developer Getting Started Playground](https://wise-raccoon-opw3r-dev-ed.trailblaze.lightning.force.com)

<!--
  username: victor.tolbert@wise-raccoon-opw3r.com
  email: victor.tolbert@gmail.com
  password: 7qJsQQ@PO
-->

| Salesforce | Database |
| ---------- | -------- |
| Objects    | Tables   |
| Fields     | Columns  |
| Records    | Rows     |



## Salesforce Developer and Admin Managed

### Application and Data Services

- Web Standard UI Platform
- DevOps and Release Management
- Developer Tools
- Elastic Compute
- User Identity & Authentication
- Penetration Testing
- Mobile Access
- APIs
- Workflow Engine

## Salesforce Platform Managed

### Network Services

- HTTPS Encryption
- Penetration Testing
- Advanced Threat Detection
- Secure Firewalls
- IP Login Restrictions

### Infrastructure Services

- Secure Data Centers
- Disaster Recovery
- Real-time replication
- Third Party Certifications
- Customer Audits


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

---

[24020100]: https://trailhead.salesforce.com/content/learn/modules/salesforce-functions-quick-look "Learn how to deploy code to meet elastic demand."
[23071101]: https://trailhead.salesforce.com/content/learn/projects/quickstart-lightning-components "Create your first component that renders a list of Contacts from your org."
[23110700]: https://trailhead.salesforce.com/content/learn/modules/ux-designer-certification-prep "Use scenarios and flashcards to study for the User Experience Designer certification exam."
[23110700]: https://trailhead.salesforce.com/content/learn/projects/quickstart-lightning-components "Quick Start: Aura Components"
[23111001]: https://trailhead.salesforce.com/content/learn/modules/cli-basics "Learn the basics of working with a command-line interface tool."
[23111500]: https://trailhead.salesforce.com/content/learn/modules/generative-ai-basics "Discover the capabilities of generative AI and the technology that powers it."
[23112900]: https://trailhead.salesforce.com/content/learn/modules/salesforce-designer-quick-look "Learn what Salesforce designers do and the skills they need to succeed."
[23112901]: https://trailhead.salesforce.com/content/learn/modules/lightning-design-system-basics "Get started using the Lightning Design System to build Salesforce apps."
[23112902]: https://trailhead.salesforce.com/content/learn/modules/user-story-creation "Discover the importance of user stories and learn how to write them."
[23120500]: https://trailhead.salesforce.com/content/learn/projects/quickstart-apex "Write your first Apex class."
[24013100]: https://trailhead.salesforce.com/content/learn/projects/get-started-with-salesforce-development "Build a simple app and see what it’s like to develop on the Salesforce Platform."

[2]: https://trailhead.salesforce.com/content/learn/modules/salesforce-functions-quick-look/get-to-know-salesforce-functions
