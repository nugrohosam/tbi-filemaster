const DetailProjectUtama = require('../models/DetailProjectUtama');
const Project = require('../models/Project'); // Pastikan path ini benar

// Helper to format file paths
const formatFilePath = (file) => `${file.filename}`;

// Create a new DetailProjectUtama entry
exports.createDetailProjectUtama = async (req, res) => {
  try {
    const project = await Project.findByPk(req.body.id_project);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Check if a file already exists for this pekerjaan
    const existingFile = await DetailProjectUtama.findOne({
      where: {
        id_project: req.body.id_project,
        pekerjaan: req.body.pekerjaan,
      },
    });

    if (existingFile && existingFile.file) {
      return res.status(400).json({ error: `A file already exists for pekerjaan ${req.body.pekerjaan}. Only one file is allowed.` });
    }

    // Save the file path
    const filePath = req.file ? formatFilePath(req.file) : null;

    const detailProjectUtama = await DetailProjectUtama.create({
      id_project: req.body.id_project,
      file: filePath, // Store single file path
      pekerjaan: req.body.pekerjaan,
    });

    res.status(201).json(detailProjectUtama);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all DetailProjectUtama entries
exports.getAllDetailProjectUtama = async (req, res) => {
  try {
    const detailProjectUtamas = await DetailProjectUtama.findAll();
    res.status(200).json(detailProjectUtamas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get DetailProjectUtama by ID
exports.getDetailProjectUtamaById = async (req, res) => {
  try {
    const detailProjectUtama = await DetailProjectUtama.findByPk(req.params.id, {
      include: [{ model: Project, attributes: ['name'] }],
    });
    if (detailProjectUtama) {
      res.status(200).json(detailProjectUtama);
    } else {
      res.status(404).json({ error: 'DetailProjectUtama not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateDetailProjectUtama = async (req, res) => {
    try {
      const { id_project } = req.params;
      const { pekerjaan } = req.body;
  
      // Find the record by id_project and pekerjaan
      const detailProjectUtama = await DetailProjectUtama.findOne({
        where: {
          id_project: id_project,
          pekerjaan: pekerjaan,
        },
      });
  
      if (!detailProjectUtama) {
        return res.status(404).json({ error: 'DetailProjectUtama not found' });
      }
  
      // Update file path if a new file is uploaded
      const filePath = req.file ? formatFilePath(req.file) : detailProjectUtama.file;
  
      // Update the record with hooks enabled to ensure `updatedAt` updates
      await detailProjectUtama.update(
        {
          file: filePath,
          pekerjaan: pekerjaan || detailProjectUtama.pekerjaan,
        },
        { hooks: true }
      );
  
      res.status(200).json(detailProjectUtama);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  
  

// Delete DetailProjectUtama by ID
exports.deleteDetailProjectUtama = async (req, res) => {
  try {
    const deleted = await DetailProjectUtama.destroy({
      where: { id_project_utama: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'DetailProjectUtama not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
