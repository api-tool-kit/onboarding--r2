/*****************************************
// bigco, inc 
// action elements
// onboarding
// 2020-02-01 : mamund
 *****************************************/

var component = require('./darrt/component');
var data = require('./data');

/***************************************** 
// actions for the onboarding service
// home, create, list, filter, 
// read, addCompany, addAccount, addActivity
// approve, reject
 *****************************************/

module.exports.home = function(req,res) {
  return new Promise(function(resolve,reject) {
    var body = []; 
    
    // hack to handle empty root for non-link types
    ctype = req.get("Accept")||"";
    if("application/json text-csv".indexOf(ctype)!==-1) {
      body = {
        id:"list",
        name:"onboarding",
        rel:"collection onboarding",
        href: "{fullhost}/list/"
      };
    }
    
    if(body) {
      resolve(body);
    }
    else {
      reject({error:"invalid body"});
    }
  });
}

module.exports.create = function(req,res) {
  return new Promise(function(resolve,reject) {
    if(req.body) {
     var body = req.body;
     resolve(
      component(
        { 
          name:'onboarding',
          action:'add',
          item:body,
          props:data.props,
          reqd:data.reqd, 
          enums:data.enums
        }
       )
     );
    }
    else {
      reject({error:"invalid body"});
    }
  });
};

module.exports.list = function(req,res) {
  return new Promise(function(resolve,reject) {
    resolve(component({name:'onboarding',action:'list'}));
  });
}

module.exports.filter = function(req,res) {
  return new Promise(function(resolve,reject){
    if(req.query && req.query.length!==0) {
      resolve(component({name:'onboarding',action:'filter',filter:req.query}));
    }
    else {
      reject({error:"invalid query string"});
    }
  })
}

module.exports.read = function(req,res) {
  return new Promise(function(resolve,reject){
    if(req.params.id && req.params.id!==null) {
      var id = req.params.id;
      resolve(component({name:'onboarding',action:'item',id:id}));
    } 
    else {
      reject({error:"missing id"});
    }
  });
}

module.exports.addCompany = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.id||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'onboarding',
          action:'update',
          id:id,
          item:body,
          props:data.props,
          reqd:data.reqd,
          enums:data.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}

module.exports.addAccount = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.id||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'onboarding',
          action:'update',
          id:id,
          item:body,
          props:data.props,
          reqd:data.reqd,
          enums:data.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}

module.exports.addActivity = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.id||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'onboarding',
          action:'update',
          id:id,
          item:body,
          props:data.props,
          reqd:data.reqd,
          enums:data.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}

module.exports.approve = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.id||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'onboarding',
          action:'update',
          id:id,
          item:body,
          props:data.props,
          reqd:data.data,
          enums:data.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}

module.exports.reject = function(req,res) {
  var id,body;
  return new Promise(function(resolve,reject){
    id = req.params.id||null;
    body = req.body||null;
    if(id!==null && body!==null) {
       resolve(component(
         {name:'onboarding',
          action:'update',
          id:id,
          item:body,
          props:data.props,
          reqd:data.data,
          enums:data.enums}));
     }
     else {
       reject({error:"missing id and/or body"});
     }
  });
}

/*
module.exports.remove = function(req,res) {
  return new Promise(function(resolve,reject){
    if(req.params.id && req.params.id!==null) {
      var id = req.params.id;
      resolve(component(
        {name:'company',action:'delete', id:id}));
    }
    else {
      reject({error:"invalid id"});
    }
  });
}
*/
