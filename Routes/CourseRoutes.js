//1. Crear a depencia de express
const express = require('express');
const {getAllCourses,getSingleCourse,createCourse,deleteCourse,updateCourse} = require ('../Controllers/CoursesController')

const router = express.Router();

router.route('/').get(getAllCourses).post(createCourse)

router.route('/:id').get(getSingleCourse).put(updateCourse).delete(deleteCourse)

module.exports = router