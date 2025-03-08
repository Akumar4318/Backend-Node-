const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware for file upload
app.use(fileUpload());

// ====================== FILE UPLOAD ROUTE ======================
app.post('/api/files/upload', async (req, res) => {
    try {
        // Check if file exists
        if (!req.files || !req.files.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        const file = req.files.file;
        console.log('File milya jee ->', file);

        // Ensure the 'uploads' folder exists
        const uploadDir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        // Define file path
        const filePath = path.join(uploadDir, `${Date.now()}_${file.name}`);
        console.log("Path -->", filePath);

        // Move the file to the desired path
        file.mv(filePath, (err) => {
            if (err) {
                console.error('File upload error:', err);
                return res.status(500).json({
                    success: false,
                    message: "File upload failed",
                });
            }

            res.json({
                success: true,
                message: "File uploaded successfully!",
                filePath
            });
        });

    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});

// ====================== SERVER LISTENING ======================
const PORT = process.env.PORT || 3000;
app.listen(4000, () => console.log(`Server running on PORT ${PORT}`));
