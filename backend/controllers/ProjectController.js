const Project = require('../models/Project');

class ProjectController {
    static async createProject(req, res) {
        try {
            const project = await Project.create(req.body);
            res.status(201).json(project);
        } catch (error) {
            console.error("Error creating project:", error);
            res.status(500).json({ message: 'Error creating project', error: error.message });
        }
    }

    static async getAllProjects(req, res) {
        try {
            const projects = await Project.findAll();
            res.status(200).json(projects);
        } catch (error) {
            console.error("Error fetching projects:", error);
            res.status(500).json({ message: 'Error fetching projects', error: error.message });
        }
    }

    static async getProjectById(req, res) {
        try {
            const project = await Project.findByPk(req.params.id);
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: 'Project not found' });
            }
        } catch (error) {
            console.error("Error fetching project:", error);
            res.status(500).json({ message: 'Error fetching project', error: error.message });
        }
    }

    static async updateProject(req, res) {
        try {
            const [updated] = await Project.update(req.body, {
                where: { id_project: req.params.id }
            });
            if (updated) {
                const updatedProject = await Project.findByPk(req.params.id);
                res.status(200).json(updatedProject);
            } else {
                res.status(404).json({ message: 'Project not found' });
            }
        } catch (error) {
            console.error("Error updating project:", error);
            res.status(500).json({ message: 'Error updating project', error: error.message });
        }
    }

    static async deleteProject(req, res) {
        try {
            const deleted = await Project.destroy({
                where: { id_project: req.params.id }
            });
            if (deleted) {
                res.status(200).json({ message: 'Project deleted' });
            } else {
                res.status(404).json({ message: 'Project not found' });
            }
        } catch (error) {
            console.error("Error deleting project:", error);
            res.status(500).json({ message: 'Error deleting project', error: error.message });
        }
    }
}

module.exports = ProjectController;
