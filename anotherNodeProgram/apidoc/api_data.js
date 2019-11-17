define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/data/view/:empId/delete",
    "title": "Delete employee by empId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "empId",
            "description": "<p>empId of the employee passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n         \"error\": false,\n         \"message\": \"Employee Deleted Successfully\",\n         \"status\": 200,\n         \"data\": []\n             }\n         }\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n          \"error\": true,\n          \"message\": \"Error Occured.,\n          \"status\": 500,\n          \"data\": null\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "delete",
    "name": "PostApiV1DataViewEmpidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/data/view/:empId/edit",
    "title": "Editing Employee",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "empId",
            "description": "<p>The empId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Employee edited Successfully\",\n    \"status\": 200,\n    \"data\": [\n                 {\n                     _id: \"string\",\n                     __v: number,\n                     empId: \"string\",\n                     firstName: \"string\",\n                     lastName: \"string\",\n                     designation: \"string\",\n                     sallary: number,\n                     presentAddress: \"string\",\n                     parmanentAddress: \"string\"\n                     contactNumber: number,\n                     views: number,\n                     about: boolean,\n                     fathersName: \"string\",\n                     mothersName: \"string\",\n                     hobbies: object(type = array),\n                     joiningDate: \"date\",\n                     lastModified: \"date\"\n                 }\n             ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error occured\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "edit",
    "name": "PutApiV1DataViewEmpidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/data/view/create",
    "title": "Create Employee",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the employee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the employee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fathersName",
            "description": "<p>fathersName of the employee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "MothersName",
            "description": "<p>mothersName of the employee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>about of the employee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parmanentAddress",
            "description": "<p>parmanentAddress of the employee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "presentAddress",
            "description": "<p>presentAddress of the employee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "contactNumber",
            "description": "<p>contactNumber of the employee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sallary",
            "description": "<p>sallary of the employee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "designation",
            "description": "<p>designation of the employee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hobbies",
            "description": "<p>hobbies of the employee passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Employee created Successfully\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    _id: \"string\",\n                    __v: number,\n                    empId: \"string\",\n                    firstName: \"string\",\n                    lastName: \"string\",\n                    designation: \"string\",\n                    sallary: number,\n                    presentAddress: \"string\",\n                    parmanentAddress: \"string\"\n                    contactNumber: number,\n                    views: number,\n                    about: boolean,\n                    fathersName: \"string\",\n                    mothersName: \"string\",\n                    hobbies: object(type = array),\n                    joiningDate: \"date\",\n                    lastModified: \"date\"\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n     \"error\": true,\n     \"message\": \"Error occured\",\n     \"status\": 500,\n     \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "post",
    "name": "GetApiV1DataViewCreate"
  },
  {
    "type": "get",
    "url": "/api/v1/data/view/all",
    "title": "Get all employess",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All employees Details Found\",\n    \"status\": 200,\n    \"data\": [\n                 {\n                     empId: \"string\",\n                     firstName: \"string\",\n                     lastName: \"string\",\n                     designation: \"string\",\n                     sallary: number,\n                     presentAddress: \"string\",\n                     parmanentAddress: \"string\"\n                     contactNumber: number,\n                     views: number,\n                     about: boolean,\n                     fathersName: \"string\",\n                     mothersName: \"string\",\n                     hobbies: object(type = array),\n                     joiningDate: \"date\",\n                     lastModified: \"date\"\n                 }\n             ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Find Employees Details\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1DataViewAll"
  },
  {
    "type": "get",
    "url": "/api/v1/data/view/designation/:designation",
    "title": "View by designation",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "designation",
            "description": "<p>The designation should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Employee Found Successfully\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    _id: \"string\",\n                    __v: number,\n                    empId: \"string\",\n                    firstName: \"string\",\n                    lastName: \"string\",\n                    designation: \"string\",\n                    sallary: number,\n                    presentAddress: \"string\",\n                    parmanentAddress: \"string\"\n                    contactNumber: number,\n                    views: number,\n                    about: boolean,\n                    fathersName: \"string\",\n                    mothersName: \"string\",\n                    hobbies: object(type = array),\n                    joiningDate: \"date\",\n                    lastModified: \"date\"\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n     \"error\": true,\n     \"message\": \"Error occured\",\n     \"status\": 500,\n     \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1DataViewDesignationDesignation"
  },
  {
    "type": "get",
    "url": "/api/v1/data/view/empFather/:fathersName",
    "title": "View by fathersName",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fathersName",
            "description": "<p>The father's-name should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Employee Found Successfully\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    _id: \"string\",\n                    __v: number,\n                    empId: \"string\",\n                    firstName: \"string\",\n                    lastName: \"string\",\n                    designation: \"string\",\n                    sallary: number,\n                    presentAddress: \"string\",\n                    parmanentAddress: \"string\"\n                    contactNumber: number,\n                    views: number,\n                    about: boolean,\n                    fathersName: \"string\",\n                    mothersName: \"string\",\n                    hobbies: object(type = array),\n                    joiningDate: \"date\",\n                    lastModified: \"date\"\n                }\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n     \"error\": true,\n     \"message\": \"Error occured\",\n     \"status\": 500,\n     \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1DataViewEmpfatherFathersname"
  },
  {
    "type": "get",
    "url": "/api/v1/data/view/:empId",
    "title": "Get Single Employee",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "empId",
            "description": "<p>The empId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Employee Found Successfully\",\n    \"status\": 200,\n   \"data\": [\n                 {\n                     _id: \"string\",\n                     __v: number,\n                     empId: \"string\",\n                     firstName: \"string\",\n                     lastName: \"string\",\n                     designation: \"string\",\n                     sallary: number,\n                     presentAddress: \"string\",\n                     parmanentAddress: \"string\"\n                     contactNumber: number,\n                     views: number,\n                     about: boolean,\n                     fathersName: \"string\",\n                     mothersName: \"string\",\n                     hobbies: object(type = array),\n                     joiningDate: \"date\",\n                     lastModified: \"date\"\n                 }\n             ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error occured\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "read",
    "name": "GetApiV1DataViewEmpid"
  },
  {
    "type": "get",
    "url": "/api/v1/data/view/:empId/count",
    "title": "Capture views of the employee",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "empId",
            "description": "<p>The empId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Employee updated Successfully\",\n    \"status\": 200,\n   \"data\": [\n                 {\n                     _id: \"string\",\n                     __v: number,\n                     empId: \"string\",\n                     firstName: \"string\",\n                     lastName: \"string\",\n                     designation: \"string\",\n                     sallary: number,\n                     presentAddress: \"string\",\n                     parmanentAddress: \"string\"\n                     contactNumber: number,\n                     views: number,\n                     about: boolean,\n                     fathersName: \"string\",\n                     mothersName: \"string\",\n                     hobbies: object(type = array),\n                     joiningDate: \"date\",\n                     lastModified: \"date\"\n                 }\n             ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error occured\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "route/route.js",
    "groupTitle": "update",
    "name": "GetApiV1DataViewEmpidCount"
  }
] });
