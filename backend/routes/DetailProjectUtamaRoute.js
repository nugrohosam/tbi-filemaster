// routes/detailProjectUtamaRoutes.js
const express = require('express');
const router = express.Router();
const detailProjectUtamaController = require('../controllers/DetailProjectUtamaController');
const upload = require('../middleware/uploadFile'); // Middleware for file upload

/**
 * @swagger
 * tags:
 *   name: DetailProjectUtama
 *   description: API for managing detail project utama entries
 */

/**
 * @swagger
 * /api/detail-project-utama:
 *   post:
 *     summary: Create a new DetailProjectUtama entry
 *     tags: [DetailProjectUtama]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               id_project:
 *                 type: integer
 *                 description: The ID of the project
 *               pekerjaan:
 *                 type: string
 *                 enum: [F1, F2, F3, F4]
 *                 description: Type of pekerjaan
 *               other_file:
 *                 type: string
 *                 description: Additional file type based on pekerjaan
 *                 enum: ['Form F3.pdf', 'Form F3.docx', 'Gambar.pdf', 'Analisa Struktur.pdf', 'Spek Teknis.pdf', 'Perhitungan Air Hujan.pdf', 'Perhitungan Air Bersih.pdf', 'Perhitungan Air Kotor.pdf', 'Kajian dan Simak (SLF).pdf']
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The file for the detail project utama
 *     responses:
 *       201:
 *         description: DetailProjectUtama created successfully
 *       400:
 *         description: Invalid request
 */
router.post('/', upload, detailProjectUtamaController.createDetailProjectUtama);


/**
 * @swagger
 * /api/detail-project-utama:
 *   get:
 *     summary: Get all DetailProjectUtama entries
 *     tags: [DetailProjectUtama]
 *     responses:
 *       200:
 *         description: A list of detail project utama entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_project_utama:
 *                     type: integer
 *                   id_project:
 *                     type: integer
 *                   file:
 *                     type: string
 *                   pekerjaan:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/', detailProjectUtamaController.getAllDetailProjectUtama);

/**
 * @swagger
 * /api/detail-project-utama/{id}:
 *   get:
 *     summary: Get a DetailProjectUtama entry by ID
 *     tags: [DetailProjectUtama]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the detail project utama
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: DetailProjectUtama found
 *       404:
 *         description: DetailProjectUtama not found
 */
router.get('/:id', detailProjectUtamaController.getDetailProjectUtamaById);

/**
 * @swagger
 * /api/detail-project-utama/{id_project}:
 *   put:
 *     summary: Update the file for a specific DetailProjectUtama entry by project ID, other_file, and pekerjaan
 *     tags: [DetailProjectUtama]
 *     parameters:
 *       - in: path
 *         name: id_project
 *         required: true
 *         description: The ID of the project
 *         schema:
 *           type: integer
 *       - in: query
 *         name: other_file
 *         required: true
 *         description: The additional file related to the project
 *         schema:
 *           type: string
 *           enum: ['Form F3.pdf', 'Form F3.docx', 'Gambar.pdf', 'Analisa Struktur.pdf', 'Spek Teknis.pdf', 'Perhitungan Air Hujan.pdf', 'Perhitungan Air Bersih.pdf', 'Perhitungan Air Kotor.pdf', 'Kajian dan Simak (SLF).pdf']
 *       - in: query
 *         name: pekerjaan
 *         required: true
 *         description: The type of pekerjaan (F1, F2, F3, F4)
 *         schema:
 *           type: string
 *           enum: [F1, F2, F3, F4]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: New file to update for the detail project utama
 *     responses:
 *       200:
 *         description: DetailProjectUtama file updated successfully
 *       404:
 *         description: DetailProjectUtama not found
 *       400:
 *         description: Error updating DetailProjectUtama
 */


/**
 * @swagger
 * /api/detail-project-utama/{id}:
 *   delete:
 *     summary: Delete a DetailProjectUtama entry by ID
 *     tags: [DetailProjectUtama]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the detail project utama
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: DetailProjectUtama deleted successfully
 *       404:
 *         description: DetailProjectUtama not found
 */
router.delete('/:id', detailProjectUtamaController.deleteDetailProjectUtama);

module.exports = router;
