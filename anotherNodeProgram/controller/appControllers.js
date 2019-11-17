
const express = require('express')
//this module used for using mongoose functionality for CRUD operation like-find(), findOne(), save(), deleteOne(), update() and etc..
const mongoose = require('mongoose')
//this module for schema definition
require('../schema/employeeSchema')
//this module used for creating short id
const shortid = require('shortid');
const response = require('../library/responseLib')
const logger = require('../library/loggerLib')
var moment = require('moment');
const checkLib = require('../library/checkLib')
const employee = mongoose.model('employees')


let getAllEmployees = (req, res) => {
    employee.find()
        .select('-__v  -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'appController : getAllEmployees', 10)
                let apiResponse = response.generateRes(true, 'some internal error occured', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {
                logger.error('No Records Are Found', 'appController : getAllEmployees', 5)
                let apiResponse = response.generateRes(true, 'No records found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generateRes(false, 'Records Found Successfully', 200, result)
                res.send(apiResponse)
                logger.info('Records Found Successfully', 'appController : getAllEmployees', 200)
            }

        })
}//end of getAllEmployee Function

let getSingleEmp = (req, res) => {
    if (checkLib.isEmpty(req.params.empId)) {
        console.log('empId should be passed')
        let apiResponse = response.generateRes(true, 'empId is missing', 403, null)
        res.send(apiResponse)
    } else {
        employee.findOne({ 'empId': req.params.empId }, (err, result) => {
            if (err) {
                logger.error(err.message, 'appController: getSingleEmp', 10)
                let apiResponse = response.generateRes(true, 'Employee not found', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {
                logger.error('No Records Are Found', 'appController: getSingleEmp', 5)
                let apiResponse = response.generateRes(true, 'No records found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Records Found Successfully', 'appController: getSingleEmp', 200)
                let apiResponse = response.generateRes(false, 'Employee Found Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end of getSingleEmployee function

let viewByDesignation = (req, res) => {
    if (checkLib.isEmpty(req.params.designation)) {
        console.log('designation should be passed')
        let apiResponse = response.generateRes(true, 'designation is missing', 403, null)
        res.send(apiResponse)
    } else {
        employee.find({ 'designation': req.params.designation }, (err, result) => {
            if (err) {
                logger.error(err.message, 'appController : viewByDesignation', 10)
                let apiResponse = response.generateRes(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {
                logger.error('No Records Are Found', 'appController : viewByDesignation', 5)
                let apiResponse = response.generateRes(true, 'No records found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Records Found Successfully', 'appController : viewByDesignation', 200)
                let apiResponse = response.generateRes(false, 'Employee Found Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end of viewByDesignation function

// let editEmployee = (req, res) => {
//     employee.findOne({ 'empId': req.params.empId }, (err, result) => {
//         if (err) {
//             logger.error(err.message, 'appController : viewsOrEditEmployee', 10)
//             let apiResponse = response.generateRes(true, 'Error Occured', 500, null)
//             res.send(apiResponse)
//         } else if (checkLib.isEmpty(result)) {
//             logger.error('No Records Are Found', 'appController : viewsOrEditEmployee', 5)
//             let apiResponse = response.generateRes(true, 'No records found', 404, null)
//             res.send(apiResponse)
//         } else {
//             //we also edit like this and this method is most prefferable for editing
//             result.designation = req.body.designation
//             result.sallary = req.body.sallary
//             result.contactNumber = req.body.contactNumber
//             result.about = req.body.about
//             result.fathersName = req.body.fathersName
//             result.mothersName = req.body.mothersName
//             result.about = req.body.about
//             result.designation = req.body.designation
//             result.firstName = req.body.firstName
//             result.lastName = req.body.lastName
//             result.lastModified = moment().format('LLLL')

//             result.save(function (err, result) {
//                 if (err) {
//                     logger.error(err.message, 'appController : viewsOrEditEmployee', 10)
//                     res.send(err)
//                 } else {
//                     let apiResponse = response.generateRes(false, 'Employee found and Edited Successfully', 200, result)
//                     res.send(apiResponse)
//                     logger.info('Edited Successfully', 'appController : viewsOrEditEmployee', 200)
//                 }
//             })
//         }
//     })
// }//end of viewOrEditEmployee function

let empViews = (req, res) => {
    if (checkLib.isEmpty(req.params.empId)) {
        console.log('empId should be passed')
        let apiResponse = response.generateRes(true, 'empId is missing', 403, null)
        res.send(apiResponse)
    } else {
        employee.findOne({ 'empId': req.params.empId }, (err, result) => {
            if (err) {
                logger.error(err.message, 'appController : viewsOrEditEmployee', 10)
                let apiResponse = response.generateRes(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {
                logger.error('No Records Are Found', 'appController : viewsOrEditEmployee', 5)
                let apiResponse = response.generateRes(true, 'No records found', 404, null)
                res.send(apiResponse)
            } else {
                //we also edit like this and this method is most prefferable for editing
                result.views += 1
                result.save(function (err, result) {
                    if (err) {
                        logger.error(err.message, 'appController : viewsOrEditEmployee', 10)
                        res.send(err)
                    } else {
                        let apiResponse = response.generateRes(false, 'Employee found and Edited Successfully', 200, result)
                        res.send(apiResponse)
                        logger.info('Edited Successfully', 'appController : viewsOrEditEmployee', 200)
                    }
                })
            }
        })
    }
}//end of viewOrEditEmployee function

let viewByFather = (req, res) => {
    if (checkLib.isEmpty(req.params.fathersName)) {
        console.log('fathersName should be passed')
        let apiResponse = response.generateRes(true, 'fathersName is missing', 403, null)
        res.send(apiResponse)
    } else {
        employee.findOne({ 'fathersName': req.params.fathersName }, (err, result) => {
            if (err) {
                logger.error(err.message, 'appController: viewByFather', 10)
                let apiResponse = response.generateRes(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {
                logger.error('No Records Are Found', 'appController: viewByFather', 5)
                let apiResponse = response.generateRes(true, 'No records found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Edited Successfully', 'appController: viewByFather', 200)
                let apiResponse = response.generateRes(false, 'Employee Found Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end og viewByFather function

let editEmployee = (req, res) => {
    if (checkLib.isEmpty(req.params.empId)) {
        console.log('empId should be passed')
        let apiResponse = response.generateRes(true, 'empId is missing', 403, null)
        res.send(apiResponse)
    } else {
        options = req.body
        employee.update({ 'blogId': req.params.blogId }, options, { multi: true }).exec((err, result) => {
            if (err) {
                logger.error(err.message, 'appController: viewByFather', 10)
                let apiResponse = response.generateRes(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {
                logger.error('No Records Are Found', 'appController: editEmployee', 5)
                let apiResponse = response.generateRes(true, 'No records found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Edited Successfully', 'appController: editEmployee', 200)
                let apiResponse = response.generateRes(false, 'Employee Edited Successfully', 200, result)
                res.send(apiResponse)

            }
        })
    }
}//end of editEmployee function

let createEmployee = (req, res) => {
    let empId = shortid.generate()
    let date = Date.now()
    if (checkLib.isEmpty(req.body.firstName) || checkLib.isEmpty(req.body.lastName) || checkLib.isEmpty(req.body.fathersName) || checkLib.isEmpty(req.body.mothersName) || checkLib.isEmpty(req.body.parmanentAddress) ||
        checkLib.isEmpty(req.body.presentAddress) || checkLib.isEmpty(req.body.contactNumber) || checkLib.isEmpty(req.body.about) || checkLib.isEmpty(req.body.sallary) || checkLib.isEmpty(req.body.designation)) {
        let apiResponse = response.generateRes(true, 'Required Parameter Are Missing', 403, null)
        res.send(apiResponse)
        logger.error('forbidden request', 'appController : createEmployee', 10)
    } else {
        let newEmp = new employee({
            empId: empId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            fathersName: req.body.fathersName,
            about: req.body.about,
            designation: req.body.designation,
            contactNumber: req.body.contactNumber,
            mothersName: req.body.mothersName,
            parmanentAddress: req.body.parmanentAddress,
            presentAddress: req.body.presentAddress,
            sallary: req.body.sallary,
            joiningDate: date,
            lastModified: date

        })//end of newBlog model
        let hobbies = (req.body.hobbies != null && req.body.hobbies != undefined && req.body.hobbies != '') ? req.body.hobbies.split(',') : []
        newEmp.hobbies = hobbies;

        newEmp.save((err, result) => {
            if (err) {
                logger.error(err.message, 'appController : createEmployee', 10)
                let apiResponse = response.generateRes(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else {
                logger.info('Employee Created Successfully', 'appController: viewByFather', 200)
                let apiResponse = response.generateRes(false, 'Employee created successfully', 200, result)
                res.send(apiResponse)
            }
        })//end new-blog save
    }
}//end create-blog function

let deleteEmp = (req, res) => {
    if (checkLib.isEmpty(req.params.empId)) {
        console.log('empId should be passed')
        let apiResponse = response.generateRes(true, 'empId is missing', 403, null)
        res.send(apiResponse)
    } else {
        employee.deleteOne({ 'empId': req.params.empId }, (err, result) => {
            if (err) {
                logger.error(err.message, 'appController : deleteEmployee', 10)
                let apiResponse = response.generateRes(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {
                logger.error(err.message, 'appController : deleteEmployee', 10)
                let apiResponse = response.generateRes(true, 'No records found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Deleted Successfully', 'appController : deleteEmployee', 10)
                let apiResponse = response.generateRes(false, 'Employee created successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end of deleteEmployee function


module.exports = {
    getAllEmployees: getAllEmployees,
    getSingleEmp: getSingleEmp,
    viewByDesignation: viewByDesignation,
    viewByFather: viewByFather,
    createEmployee: createEmployee,
    deleteEmp: deleteEmp,
    views: empViews,
    editEmp: editEmployee
}
