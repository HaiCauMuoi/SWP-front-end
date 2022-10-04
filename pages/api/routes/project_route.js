const express = require('express')
const router = express.Router()

const {
    getProject,
    getAllProject,
    createProject,
    updateProject,
    deleteProject
} = require('../controllers/project_controller');

router.get('/getproject', getProject)

router.get('/getAllProject', getAllProject)

router.post('/createProject', createProject)

router.put('/updateUser', updateProject)

router.delete('/deleteProject', deleteProject)

