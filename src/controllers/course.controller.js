import Course from "../schema/Course.js"

// Create a course
export const createCourse = async (req, res) => {
    try {
        const { title, description } = req.body;

        const course = await Course.create({  title , description});

        res.status(201).json(course);
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Error creating courses!"})
    }
    

}

// Get a list of all courses
export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching courses!" });
    }
};

// Get a single course by ID
export const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found!" });
        }
        res.status(200).json(course);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching course!" });
    }
};

// Update a course by ID
export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const course = await Course.findByIdAndUpdate(id, { title, description }, { new: true, runValidators: true });
        if (!course) {
            return res.status(404).json({ message: "Course not found!" });
        }
        res.status(200).json(course);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating course!" });
    }
};

// Delete a course by ID
export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found!" });
        }
        res.status(200).json({ message: "Course deleted successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting course!" });
    }
};