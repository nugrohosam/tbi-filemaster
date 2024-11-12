const multer = require('multer');
const path = require('path');

// Configure file storage for multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // File storage location
  },
  filename: (req, file, cb) => {
    let customFileName = `${Date.now()}-${file.originalname}`; // Default filename

    // Set custom filenames based on pekerjaan and other_file values
    if (req.body.pekerjaan === 'F1') {
      customFileName = `${req.body.id_project}_Form Pendaftaran.pdf`;
    } else if (req.body.pekerjaan === 'F2') {
      customFileName = `${req.body.id_project}_Informasi Pekerjaan.pdf`;
    } else if (req.body.pekerjaan === 'F3') {
      if (req.body.other_file === 'Form F3.pdf') {
        customFileName = `${req.body.id_project}_Form F3.pdf`;
      } else if (req.body.other_file === 'Form F3.docx') {
        customFileName = `${req.body.id_project}_Form F3.docx`;
      }
    } else if (req.body.pekerjaan === 'F4') {
      switch (req.body.other_file) {
        case 'Gambar.pdf':
          customFileName = `${req.body.id_project}_Gambar.pdf`;
          break;
        case 'Analisa Struktur.pdf':
          customFileName = `${req.body.id_project}_Analisa Struktur.pdf`;
          break;
        case 'Spek Teknis.pdf':
          customFileName = `${req.body.id_project}_Spek Teknis.pdf`;
          break;
        case 'Perhitungan Air Hujan.pdf':
          customFileName = `${req.body.id_project}_Perhitungan Air Hujan.pdf`;
          break;
        case 'Perhitungan Air Bersih.pdf':
          customFileName = `${req.body.id_project}_Perhitungan Air Bersih.pdf`;
          break;
        case 'Perhitungan Air Kotor.pdf':
          customFileName = `${req.body.id_project}_Perhitungan Air Kotor.pdf`;
          break;
        case 'Kajian dan Simak (SLF).pdf':
          customFileName = `${req.body.id_project}_Kajian dan Simak (SLF).pdf`;
          break;
        default:
          break;
      }
    }


    // Attach the custom file name to req.body for further access
    req.body.customFileName = customFileName;

    // Use the custom filename in the callback
    cb(null, customFileName);
}
});


// Set file filter to accept only PDF, DOC, and DOCX
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'application/pdf' ||
    file.mimetype === 'application/msword' ||
    file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    cb(null, true); // Accept the file
  } else {
    cb(null, false); // Reject the file
  }
};

// Set up multer middleware
const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // Max file size: 10MB
}).single('file'); // Expecting a single file upload with field name 'file'

module.exports = upload;
