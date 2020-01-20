/*****************************************
// bigco, inc onboarding
// transitions
// 2020-02-01 : mamund
 *****************************************/
 
 // page- and item-level forms
 exports.forms = {
   pageForms: [
     {
       id:"self",
       name:"self",
       href:"{fullurl}",
       rel: "self colllection company",
       tags: "collection company self home list item",
       title: "Self",
       method: "GET",
       properties:[]
     },
     {
       id:"home",
       name:"home",
       href:"{fullhost}/",
       rel: "collection company",
       tags: "collection company home list item",
       title: "Home",
       method: "GET",
       properties:[]
     },
     {
       id:"list",
       name:"list",
       href:"{fullhost}/list/",
       rel:"collection company",
       tags:"collection company home list item",
       title:"List",
       method:"GET",
       properties:[]
     },
     {
       id:"filter",
       name:"filter",
       href:"{fullhost}/filter/",
       rel:"collection company filter",
       tags:"collection company filter list item",
       title:"Search",
       method:"GET",
       properties:[
         {name:"status",value:""},
         {name:"companyName",value:""}
         {name:"stateProvince",value:""}
         {name:"country",value:""}
       ]
     },
     {
       id: "createOnboarding",
       name: "createOnboarding",
       href: "{fullhost}/",
       rel: "create-form onboarding",
       tags: "collection onboarding list",
       title: "Create Onboarding",
       method: "POST",
       properties: [
        {name:"id",value:"{makeid}"},
        {name:"status",value:"pending"}
       ]
     }
   ],
   itemForms: [
     {
       id:"read_{id}",
       name: "read",
       href: "{fullhost}/{id}",
       rel: "item onboarding read",
       title: "Read",
       method: "GET",
       properties: []
     },
     {
       id:"addCompany_{id}",
       name:"addCompany",
       href:"{fullhost}/{id}",
       rel: "item edit-form onboarding",
       tags: "onboarding list item",
       title: "Add Company",
       method: "PUT",
       properties: [
         {name:"companyId",value:"{companyId}"},
         {name:"companyName",value:"{companyName}"},
         {name:"email",value:"{email}"},
         {name:"streetAddress",value:"{streetAddress}"},
         {name:"city",value:"{city}"},
         {name:"stateProvince",value:"{stateProvince}"},
         {name:"postalCode",value:"{postalCode}"},
         {name:"country",value:"{country}"},
         {name:"telephone",value:"{telephone}"},
         {name:"email",value:"{email}"}
       ]
     },
     {
       id:"addAccount_{id}",
       name:"addAccount",
       href:"{fullhost}/{id}",
       rel: "item edit-form onboarding",
       tags: "onboarding list item",
       title: "Add Account",
       method: "PUT",
       properties: [
         {name:"accountId",value:"{accountId}"},
         {name:"division",value:"{division}"},
         {name:"spendingLimit",value:"{spendingLimit}"},
         {name:"discountPercentage",value:"{discountPercentage}"}
       ]
     },
     {
       id:"addActivity_{id}",
       name:"addActivity",
       href:"{fullhost}/{id}",
       rel: "item edit-form onboarding",
       tags: "onboarding list item",
       title: "Add Activity",
       method: "PUT",
       properties: [
         {name:"activityId",value:"{activityId}"},
         {name:"activityType",value:"{activityType}"},
         {name:"dateScheduled",value:"{dateScheduled}"},
         {name:"notes",value:"{notes}"}
       ]
     },
     {
       id:"approve_{id}",
       name:"approve",
       href:"{fullhost}/approve/{id}",
       rel: "item onboarding approve",
       tags: "onboarding item list approve",
       title: "Approve",
       method: "PATCH",
       properties: [
         {name:"status",value:"active"}
       ]
     },
     {
       id:"reject_{id}",
       name:"reject",
       href:"{fullhost}/reject/{id}",
       rel: "item onboarding reject",
       tags: "onboarding item list reject",
       title: "Reject",
       method: "PATCH",
       properties: [
         {name:"status",value:"closed"}
       ]
     }
   ]
 }
