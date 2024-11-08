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
                customFileName = 'Form F3 PDF';
            } else if (req.body.other_file === 'Form F3.docx') {
                customFileName = 'Form F3 DOCX';
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
        const { id_project } = req.params;
        const { pekerjaan, other_file } = req.body;  // Ambil pekerjaan dan other_file dari req.body
        
        // Cari entri berdasarkan id_project dan pekerjaan
        const detailProjectUtama = await DetailProjectUtama.findOne({
            where: {
                id_project: id_project,
                pekerjaan: pekerjaan,
            },
        });

        if (!detailProjectUtama) {
            return res.status(404).json({ error: 'DetailProjectUtama not found' });
        }

        // Jika pekerjaan adalah F1 atau F2, set other_file menjadi null
        if (pekerjaan === 'F1' || pekerjaan === 'F2') {
            req.body.other_file = null;  // Mengatur other_file menjadi null untuk F1 dan F2
        }

        // Untuk pekerjaan F1 dan F2, izinkan file untuk diupdate, asalkan file baru dikirim
        if ((pekerjaan === 'F1' || pekerjaan === 'F2') && req.file) {
            // Jika ada file baru, perbarui file
            const filePath = formatFilePath(req.file);
            const updatedDetailProjectUtama = await detailProjectUtama.update({
                file: filePath, // Perbarui file dengan file baru
            });
            return res.status(200).json({
                id_project_utama: updatedDetailProjectUtama.id_project_utama,
                id_project: updatedDetailProjectUtama.id_project,
                file: updatedDetailProjectUtama.file,
                other_file: req.body.other_file || updatedDetailProjectUtama.other_file, // Jika other_file dikirimkan, pakai yang baru, jika tidak gunakan null
                pekerjaan: updatedDetailProjectUtama.pekerjaan,
                createdAt: updatedDetailProjectUtama.createdAt,
                updatedAt: updatedDetailProjectUtama.updatedAt,
                deletedAt: updatedDetailProjectUtama.deletedAt,
            });
        }

        // Jika pekerjaan adalah F2 dan tidak ada file yang dikirimkan, kita tidak perlu update file
        if (pekerjaan === 'F2' && !req.file && !other_file) {
            return res.status(400).json({ error: 'No valid file uploaded for F2' });
        }

        // Validasi untuk pekerjaan F3 dan F4
        if (pekerjaan === 'F3') {
            // Untuk pekerjaan F3, pastikan other_file tidak null dan hanya bisa memilih Form F3.pdf atau Form F3.docx
            const validF3Files = ['Form F3.pdf', 'Form F3.docx'];
            if (!other_file || !validF3Files.includes(other_file)) {
                return res.status(400).json({ error: 'Invalid or missing other_file for pekerjaan F3. Only "Form F3.pdf" or "Form F3.docx" allowed.' });
            }
        } else if (pekerjaan === 'F4') {
            // Untuk pekerjaan F4, pastikan other_file tidak null dan hanya bisa memilih file-file tertentu
            const validF4Files = [
                'Gambar.pdf', 'Analisa Struktur.pdf', 'Spek Teknis.pdf',
                'Perhitungan Air Hujan.pdf', 'Perhitungan Air Bersih.pdf',
                'Perhitungan Air Kotor.pdf', 'Kajian dan Simak (SLF).pdf'
            ];
            if (!other_file || !validF4Files.includes(other_file)) {
                return res.status(400).json({ error: 'Invalid or missing other_file for pekerjaan F4. Please provide one of the allowed files.' });
            }
        }

        // Tentukan nama file yang disesuaikan untuk F3 dan F4
        let customFileName = null;

        if (pekerjaan === 'F3') {
            customFileName = other_file;
        } else if (pekerjaan === 'F4') {
            customFileName = other_file;
        }

        // Jika tidak ada file atau file baru, biarkan file lama tetap ada
        const filePath = req.file ? formatFilePath(req.file) : detailProjectUtama.file;

        // Perbarui data detail project utama
        const updatedDetailProjectUtama = await detailProjectUtama.update({
            file: customFileName || filePath, // Gunakan nama file kustom jika ada
        });

        res.status(200).json({
            id_project_utama: updatedDetailProjectUtama.id_project_utama,
            id_project: updatedDetailProjectUtama.id_project,
            file: updatedDetailProjectUtama.file,
            other_file: req.body.other_file || updatedDetailProjectUtama.other_file, // Gunakan other_file jika ada
            pekerjaan: updatedDetailProjectUtama.pekerjaan,
            createdAt: updatedDetailProjectUtama.createdAt,
            updatedAt: updatedDetailProjectUtama.updatedAt,
            deletedAt: updatedDetailProjectUtama.deletedAt,
        });
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
