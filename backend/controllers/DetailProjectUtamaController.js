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

        // Check if a file already exists for this pekerjaan (for F1 and F2)
        const existingFile = await DetailProjectUtama.findOne({
            where: {
                id_project: req.body.id_project,
                pekerjaan: req.body.pekerjaan,
            },
        });

        // If pekerjaan is F1 or F2, deny if a file already exists
        if ((req.body.pekerjaan === 'F1' || req.body.pekerjaan === 'F2') && existingFile) {
            return res.status(400).json({ error: `${req.body.pekerjaan} file already exists` });
        }

        // Define allowed files and custom names for each pekerjaan
        let allowedOtherFiles = [];
        let customFileName = null;

        // Handle F1 and F2: Set custom names for the uploaded file
        if (req.body.pekerjaan === 'F1') {
            customFileName = 'Form Pendaftaran.pdf';
        } else if (req.body.pekerjaan === 'F2') {
            customFileName = 'Informasi Pekerjaan.pdf';
        }

        // Handle F3: Define allowed other files and set custom name
        if (req.body.pekerjaan === 'F3') {
            allowedOtherFiles = ['Form F3.pdf', 'Form F3.docx'];
            if (req.body.other_file === 'Form F3.pdf') {
                customFileName = 'Form F3.pdf';
            } else if (req.body.other_file === 'Form F3.docx') {
                customFileName = 'Form F3.docx';
            }
        } 
        // Handle F4: Define allowed other files and set custom name
        else if (req.body.pekerjaan === 'F4') {
            allowedOtherFiles = [
                'Gambar.pdf', 'Analisa Struktur.pdf', 'Spek Teknis.pdf',
                'Perhitungan Air Hujan.pdf', 'Perhitungan Air Bersih.pdf',
                'Perhitungan Air Kotor.pdf', 'Kajian dan Simak (SLF).pdf'
            ];
            if (req.body.other_file === 'Gambar.pdf') {
                customFileName = 'Gambar.pdf';
            } else if (req.body.other_file === 'Analisa Struktur.pdf') {
                customFileName = 'Analisa Struktur.pdf';
            } else if (req.body.other_file === 'Spek Teknis.pdf') {
                customFileName = 'Spek Teknis.pdf';
            } else if (req.body.other_file === 'Perhitungan Air Hujan.pdf') {
                customFileName = 'Perhitungan Air Hujan.pdf';
            } else if (req.body.other_file === 'Perhitungan Air Bersih.pdf') {
                customFileName = 'Perhitungan Air Bersih.pdf';
            } else if (req.body.other_file === 'Perhitungan Air Kotor.pdf') {
                customFileName = 'Perhitungan Air Kotor.pdf';
            } else if (req.body.other_file === 'Kajian dan Simak (SLF).pdf') {
                customFileName = 'Kajian dan Simak (SLF).pdf';
            }
        }

        // If pekerjaan is F1 or F2, other_file should be null or undefined
        if (req.body.pekerjaan === 'F1' || req.body.pekerjaan === 'F2') {
            // Set other_file to null, but use the custom file name for F1 and F2
            req.body.other_file = null;
        }

        // If pekerjaan is F3 or F4, validate other_file value
        if (allowedOtherFiles.length > 0 && !allowedOtherFiles.includes(req.body.other_file)) {
            return res.status(400).json({ error: `Invalid other_file for pekerjaan ${req.body.pekerjaan}` });
        }

        // If no custom file name is found, use the original filename if available
        if (!customFileName && req.file) {
            customFileName = req.file.originalname;
        }

        // Save the entry in the database
        const detailProjectUtama = await DetailProjectUtama.create({
            id_project: req.body.id_project,
            file: customFileName, // Use custom name based on pekerjaan (F1/F2) or other_file (F3/F4)
            other_file: req.body.other_file, // Will be null for F1 and F2
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
        const { id } = req.params; // Mengambil id dari parameter URL
        const { pekerjaan } = req.query; // Mengambil pekerjaan dari query
        const other_file = req.query.other_file || req.body.other_file; // Mengecek other_file di query atau body

        // Validasi id_project
        if (!id) {
            return res.status(400).json({ error: 'id is required in the URL' });
        }

        // Cari entri berdasarkan id dan pekerjaan
        const detailProjectUtama = await DetailProjectUtama.findOne({
            where: {
                id_project: id,
                pekerjaan: pekerjaan,
            },
        });

        if (!detailProjectUtama) {
            return res.status(404).json({ error: 'DetailProjectUtama not found' });
        }

        // Definisikan nama file khusus berdasarkan pekerjaan
        let customFileName = null;
        const allowedOtherFiles = [];

        if (pekerjaan === 'F1') {
            customFileName = 'Form Pendaftaran.pdf';
        } else if (pekerjaan === 'F2') {
            customFileName = 'Informasi Pekerjaan.pdf';
        } else if (pekerjaan === 'F3') {
            allowedOtherFiles.push('Form F3.pdf', 'Form F3.docx');
            if (other_file === 'Form F3.pdf') {
                customFileName = 'Form F3.pdf';
            } else if (other_file === 'Form F3.docx') {
                customFileName = 'Form F3.docx';
            }
        } else if (pekerjaan === 'F4') {
            allowedOtherFiles.push(
                'Gambar.pdf', 'Analisa Struktur.pdf', 'Spek Teknis.pdf',
                'Perhitungan Air Hujan.pdf', 'Perhitungan Air Bersih.pdf',
                'Perhitungan Air Kotor.pdf', 'Kajian dan Simak (SLF).pdf'
            );
            if (allowedOtherFiles.includes(other_file)) {
                customFileName = other_file;
            }
        }

        // Validasi other_file jika pekerjaan adalah F3 atau F4
        if (allowedOtherFiles.length > 0 && !allowedOtherFiles.includes(other_file)) {
            return res.status(400).json({ error: `Invalid other_file for pekerjaan ${pekerjaan}` });
        }

        // Jika pekerjaan adalah F1 atau F2, set other_file menjadi null
        if (pekerjaan === 'F1' || pekerjaan === 'F2') {
            req.body.other_file = null;
        }

        // Update file jika ada file yang diunggah
        if (req.file) {
            customFileName = customFileName || req.file.originalname;
            await detailProjectUtama.update({
                file: customFileName,
                other_file: req.body.other_file,
            });
        } else {
            // Jika tidak ada file baru, tetap perbarui other_file
            await detailProjectUtama.update({
                other_file: req.body.other_file,
            });
        }

        res.status(200).json({
            id_project_utama: detailProjectUtama.id_project_utama,
            id_project: detailProjectUtama.id_project,
            file: detailProjectUtama.file,
            other_file: detailProjectUtama.other_file,
            pekerjaan: detailProjectUtama.pekerjaan,
            createdAt: detailProjectUtama.createdAt,
            updatedAt: detailProjectUtama.updatedAt,
            deletedAt: detailProjectUtama.deletedAt,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteDetailProjectUtama = async (req, res) => {
    const { id, pekerjaan } = req.params;
    const { other_file } = req.query;
  
    try {
      // Validasi untuk F1 dan F2, jika memilih 'other_file', maka otomatis null
      if (pekerjaan === 'F1' || pekerjaan === 'F2') {
        if (other_file) {
          return res.status(400).json({ error: 'For F1 and F2, other_file must be null.' });
        }
  
        // Hapus entri berdasarkan id_project dan pekerjaan F1/F2
        const deleted = await DetailProjectUtama.destroy({
          where: { 
            id_project_utama: id,
            pekerjaan: pekerjaan
          }
        });
  
        if (deleted) {
          return res.status(204).send();
        } else {
          return res.status(404).json({ error: 'DetailProjectUtama not found for F1 or F2' });
        }
  
      }
  
      // Validasi untuk F3 dan F4, memastikan 'other_file' tidak null dan sesuai file yang ditentukan
      if (pekerjaan === 'F3' || pekerjaan === 'F4') {
        const validFiles = ['Form F3.pdf', 'Form F3.docx', 'Gambar.pdf', 'Analisa Struktur.pdf', 'Spek Teknis.pdf', 'Perhitungan Air Hujan.pdf', 'Perhitungan Air Bersih.pdf', 'Perhitungan Air Kotor.pdf', 'Kajian dan Simak (SLF).pdf'];
        
        if (!other_file || !validFiles.includes(other_file)) {
          return res.status(400).json({ error: 'For F3 and F4, other_file must be a valid file (e.g., Form F3.pdf, Form F3.docx, etc.).' });
        }
  
        // Hapus entri berdasarkan id_project, pekerjaan, dan other_file
        const deleted = await DetailProjectUtama.destroy({
          where: {
            id_project_utama: id,
            pekerjaan: pekerjaan,
            other_file: other_file
          }
        });
  
        if (deleted) {
          return res.status(204).send();
        } else {
          return res.status(404).json({ error: 'DetailProjectUtama not found for F3 or F4 with the provided other_file' });
        }
      }
  
      // Jika pekerjaan tidak dikenali (selain F1, F2, F3, atau F4)
      return res.status(400).json({ error: 'Invalid pekerjaan type. Must be F1, F2, F3, or F4.' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting the detail project utama.' });
    }
  };