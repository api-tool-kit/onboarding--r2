/*****************************************
// bigco, inc
// onboarding resources 
// 2020-02-01 : mamund
 *****************************************/

/*******************************************
// initialization and setup for DARRT
********************************************/
var express, router, bodyParser, actions, representation, 
  transitions, utils, templates, forms, metadata;

init();

// shared metadata for this service
metadata = [
  {name: "title", value: "BigCo Activity Records"},
  {name: "author", value: "Mike Amundsen"},
  {name: "release", value: "1.0.0"}
];

// optional tracking middleware
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now() + " : " + req.headers.host + req.url + " : " + req.method + " : " + JSON.stringify(req.body))
  next()
});


/************************************************************************/

// shared metadata for this service
var metadata = [
  {name: "title", value: "BigCo Onboarding Records"},
  {name: "author", value: "Mike Amundsen"},
  {name: "release", value: "1.0.0"} 
];


// ***********************************************************
// public resources for the onboarding service
// ***********************************************************

// home 
router.get('/',function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.home;
  args.type = "home";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"home"
  }
  respond(args);
});

// start the onboarding
router.post('/wip/', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.createWIP;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"list"
  }
  respond(args);
});

// get a list of onboarding records
router.get('/wip/',function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.listWIP;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"list"
  }
  respond(args);
});

// filter the list of onboarding records
router.get('/wip/filter/', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.filterWIP;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"list"
  }
  respond(args);
});

// get a single onboarding record
router.get('/wip/:id', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.readWIP;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  }
  respond(args);
});

// get the company values for a single record
router.get('/wip/:id/company', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.readCompany;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  }
  respond(args);
});

// update the company values for a single record
router.put('/wip/:id/company', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.writeCompany;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  }
  respond(args);
});

// get the account values for a single record
router.get('/wip/:id/account', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.readAccount;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  }
  respond(args);
});

// update the account values for a single record
router.put('/wip/:id/account', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.writeAccount;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  }
  respond(args);
});

// get the activity values for a single record
router.get('/wip/:id/activity', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.readActivity;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  }
  respond(args);
});

// update the activity values for a single record
router.put('/wip/:id/activity', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.writeActivity;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"onboarding"
  }
  respond(args);
});

// get the status of a single record
router.get('/wip/:id/status', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.readStatus;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  }
  respond(args);
});

// write the status of a single record
router.patch('/wip/:id/status', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.writeStatus;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"item"
  }
  respond(args);
});

// remove a single record
router.delete('/wip/:id', function(req,res){
  var args = {};
  args.request = req;
  args.response = res;
  args.action = actions.remove;
  args.type = "onboarding";
  args.config = {
    metadata:metadata,
    templates:templates,
    forms:forms,
    filter:"list"
  }
  respond(args);
});

/***********************************************************************/

// initialize module
function init() {
  express = require('express')
  router = express.Router()
  bodyParser = require('body-parser');

  actions = require('./actions');
  representation = require('./representation');
  transitions = require('./transitions');
  utils = require('./lib/utils');

  // set up request body parsing & response templates
  router.use(bodyParser.json({type:representation.getResponseTypes()}));
  router.use(bodyParser.urlencoded({extended:representation.urlencoded}));

  // load response templates and input forms
  templates = representation.getTemplates();
  forms = transitions.forms;
}

// local resour5ce handler function
function respond(args) {
  var request = args.request||null;
  var response = args.response||null;
  var action = args.action||null;
  var object = args.type||"";
  var config = args.config||{};

  return utils.handler(request,response,action,object,config);	
}

// publish the capability routes
module.exports = router

