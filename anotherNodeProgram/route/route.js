
const express = require('express');
const empController = require('../controller/appControllers')
const config = require('../config/appconfig')
const auth=require('../middlewares/authToken')

function route(app) {
  let baseUrl = config.apiVersion + '/data'

  app.get(baseUrl + '/view/all', auth.isAuthenticated, empController.getAllEmployees)
  /**
 * @api {get} /api/v1/data/view/all Get all employess
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "All employees Details Found",
    "status": 200,
    "data": [
                 {
                     empId: "string",
                     firstName: "string",
                     lastName: "string",
                     designation: "string",
                     sallary: number,
                     presentAddress: "string",
                     parmanentAddress: "string"
                     contactNumber: number,
                     views: number,
                     about: boolean,
                     fathersName: "string",
                     mothersName: "string",
                     hobbies: object(type = array),
                     joiningDate: "date",
                     lastModified: "date"
                 }
             ]
      }
  }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Failed To Find Employees Details",
    "status": 500,
    "data": null
   }
 */






  app.get(baseUrl + '/view/:empId', auth.isAuthenticated, empController.getSingleEmp)

  /**
 * @api {get} /api/v1/data/view/:empId Get Single Employee
 * @apiVersion 0.0.1
 * @apiGroup read
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} empId The empId should be passed as the URL parameter
   * 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "Employee Found Successfully",
    "status": 200,
   "data": [
                 {
                     _id: "string",
                     __v: number,
                     empId: "string",
                     firstName: "string",
                     lastName: "string",
                     designation: "string",
                     sallary: number,
                     presentAddress: "string",
                     parmanentAddress: "string"
                     contactNumber: number,
                     views: number,
                     about: boolean,
                     fathersName: "string",
                     mothersName: "string",
                     hobbies: object(type = array),
                     joiningDate: "date",
                     lastModified: "date"
                 }
             ]
      }
  }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error occured",
    "status": 500,
    "data": null
   }
 */







  app.get(baseUrl + '/view/designation/:designation', auth.isAuthenticated, empController.viewByDesignation)

  /**
  * @api {get} /api/v1/data/view/designation/:designation View by designation
  * @apiVersion 0.0.1
  * @apiGroup read
  *
  * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
  * @apiParam {String} designation The designation should be passed as the URL parameter
  * 
  *  @apiSuccessExample {json} Success-Response:
  *  {
     "error": false,
     "message": "Employee Found Successfully",
     "status": 200,
     "data": [
                 {
                     _id: "string",
                     __v: number,
                     empId: "string",
                     firstName: "string",
                     lastName: "string",
                     designation: "string",
                     sallary: number,
                     presentAddress: "string",
                     parmanentAddress: "string"
                     contactNumber: number,
                     views: number,
                     about: boolean,
                     fathersName: "string",
                     mothersName: "string",
                     hobbies: object(type = array),
                     joiningDate: "date",
                     lastModified: "date"
                 }
             ]
         }
     }
 }
   @apiErrorExample {json} Error-Response:
  *
  * {
     "error": true,
     "message": "Error occured",
     "status": 500,
     "data": null
    }
  */






  app.get(baseUrl + '/view/empFather/:fathersName', auth.isAuthenticated, empController.viewByFather)

  /**
  * @api {get} /api/v1/data/view/empFather/:fathersName View by fathersName
  * @apiVersion 0.0.1
  * @apiGroup read
  *
  * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
  * @apiParam {String} fathersName The father's-name should be passed as the URL parameter
  * 
  *  @apiSuccessExample {json} Success-Response:
  *  {
     "error": false,
     "message": "Employee Found Successfully",
     "status": 200,
     "data": [
                 {
                     _id: "string",
                     __v: number,
                     empId: "string",
                     firstName: "string",
                     lastName: "string",
                     designation: "string",
                     sallary: number,
                     presentAddress: "string",
                     parmanentAddress: "string"
                     contactNumber: number,
                     views: number,
                     about: boolean,
                     fathersName: "string",
                     mothersName: "string",
                     hobbies: object(type = array),
                     joiningDate: "date",
                     lastModified: "date"
                 }
             ]
         }
     }
 }
   @apiErrorExample {json} Error-Response:
  *
  * {
     "error": true,
     "message": "Error occured",
     "status": 500,
     "data": null
    }
  */






  app.post(baseUrl + '/view/create', auth.isAuthenticated, empController.createEmployee)

  /**
  * @api {get} /api/v1/data/view/create Create Employee
  * @apiVersion 0.0.1
  * @apiGroup post
  *
  * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
  * @apiParam {String} firstName firstName of the employee passed as a body parameter
  * @apiParam {String} lastName lastName of the employee passed as a body parameter
  * @apiParam {String} fathersName fathersName of the employee passed as a body parameter
  * @apiParam {String} MothersName mothersName of the employee passed as a body parameter
  * @apiParam {String} about about of the employee passed as a body parameter
  * @apiParam {String} parmanentAddress parmanentAddress of the employee passed as a body parameter
  * @apiParam {String} presentAddress presentAddress of the employee passed as a body parameter
  * @apiParam {Number} contactNumber contactNumber of the employee passed as a body parameter
  * @apiParam {Number} sallary sallary of the employee passed as a body parameter
  * @apiParam {String} designation designation of the employee passed as a body parameter
  * @apiParam {String} hobbies hobbies of the employee passed as a body parameter
  * 
  *  @apiSuccessExample {json} Success-Response:
  *  {
     "error": false,
     "message": "Employee created Successfully",
     "status": 200,
     "data": [
                 {
                     _id: "string",
                     __v: number,
                     empId: "string",
                     firstName: "string",
                     lastName: "string",
                     designation: "string",
                     sallary: number,
                     presentAddress: "string",
                     parmanentAddress: "string"
                     contactNumber: number,
                     views: number,
                     about: boolean,
                     fathersName: "string",
                     mothersName: "string",
                     hobbies: object(type = array),
                     joiningDate: "date",
                     lastModified: "date"
                 }
             ]
         }
     }
 }
   @apiErrorExample {json} Error-Response:
  *
  * {
     "error": true,
     "message": "Error occured",
     "status": 500,
     "data": null
    }
  */





  app.put(baseUrl + '/view/:empId/edit', auth.isAuthenticated, empController.editEmp)

  /**
 * @api {put} /api/v1/data/view/:empId/edit Editing Employee
 * @apiVersion 0.0.1
 * @apiGroup edit
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} empId The empId should be passed as the URL parameter
   * 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "Employee edited Successfully",
    "status": 200,
    "data": [
                 {
                     _id: "string",
                     __v: number,
                     empId: "string",
                     firstName: "string",
                     lastName: "string",
                     designation: "string",
                     sallary: number,
                     presentAddress: "string",
                     parmanentAddress: "string"
                     contactNumber: number,
                     views: number,
                     about: boolean,
                     fathersName: "string",
                     mothersName: "string",
                     hobbies: object(type = array),
                     joiningDate: "date",
                     lastModified: "date"
                 }
             ]
      }
  }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error occured",
    "status": 500,
    "data": null
   }
 */





  app.post(baseUrl + '/view/:empId/delete', auth.isAuthenticated, empController.deleteEmp)

  /**
       * @api {post} /api/v1/data/view/:empId/delete Delete employee by empId
       * @apiVersion 0.0.1
       * @apiGroup delete
       *
       * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
       * @apiParam {String} empId empId of the employee passed as the URL parameter
       *
       *  @apiSuccessExample {json} Success-Response:
       *  {
          "error": false,
          "message": "Employee Deleted Successfully",
          "status": 200,
          "data": []
              }
          }
      }
        @apiErrorExample {json} Error-Response:
       *
       * {
          "error": true,
          "message": "Error Occured.,
          "status": 500,
          "data": null
         }
       */





  app.get(baseUrl + '/view/:empId/count', auth.isAuthenticated, empController.views)

  /**
 * @api {get} /api/v1/data/view/:empId/count Capture views of the employee
 * @apiVersion 0.0.1
 * @apiGroup update
 *
 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
 * @apiParam {String} empId The empId should be passed as the URL parameter
   * 
 *  @apiSuccessExample {json} Success-Response:
 *  {
    "error": false,
    "message": "Employee updated Successfully",
    "status": 200,
   "data": [
                 {
                     _id: "string",
                     __v: number,
                     empId: "string",
                     firstName: "string",
                     lastName: "string",
                     designation: "string",
                     sallary: number,
                     presentAddress: "string",
                     parmanentAddress: "string"
                     contactNumber: number,
                     views: number,
                     about: boolean,
                     fathersName: "string",
                     mothersName: "string",
                     hobbies: object(type = array),
                     joiningDate: "date",
                     lastModified: "date"
                 }
             ]
      }
  }
}
  @apiErrorExample {json} Error-Response:
 *
 * {
    "error": true,
    "message": "Error occured",
    "status": 500,
    "data": null
   }
 */

}

module.exports = {
  router: route
}