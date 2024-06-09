import {Router} from 'express'
import {createCourse, getCourses, getCourseById, updateCourse, deleteCourse } from '../controllers/course.controller.js'

const courseRouter = Router();

courseRouter.post('/', createCourse);
courseRouter.get('/', getCourses);
courseRouter.get('/:id', getCourseById);
courseRouter.put('/update/:id', updateCourse);
courseRouter.delete('/delete/:id', deleteCourse);



export default courseRouter;