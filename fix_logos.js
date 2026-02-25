const fs = require('fs');
const path = require('path');
const https = require('https');

const dirPath = "c:/Users/Harshit Bhardwaj/Desktop/Bhiw/V2";
const imagePath = path.join(dirPath, "assets", "img", "hero.jpg");
const imageUrl = "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200";

// Download the image
const file = fs.createWriteStream(imagePath);
https.get(imageUrl, function (response) {
    response.pipe(file);
    file.on('finish', function () {
        file.close();
        console.log("Downloaded hero image locally.");
        updateHtmlFiles();
    });
}).on('error', function (err) {
    fs.unlink(imagePath, () => { });
    console.error("Error downloading image: " + err.message);
    updateHtmlFiles();
});

function updateHtmlFiles() {
    const htmlFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

    const headerRegex = /<a href="\.\/index\.html" class="flex items-center gap-3">\s*<div class="h-10 w-10[^>]*>\s*<span[^>]*>B<\/span>\s*<\/div>\s*<div[^>]*>\s*Brahmas\s*<span[^>]*>Express<\/span>\s*<\/div>\s*<\/a>/g;
    const newHeader = `<a href="./index.html" class="flex items-center">
                <img src="assets/img/logo.png" alt="Brahmas Express Logo" class="h-12 w-auto object-contain">
            </a>`;

    const footerRegex = /<div class="flex items-center gap-3 mb-6">\s*<div class="h-10 w-10[^>]*>\s*<span[^>]*>B<\/span>\s*<\/div>\s*<div[^>]*>\s*Brahmas\s*<span[^>]*>Express<\/span>\s*<\/div>\s*<\/div>/g;
    const newFooter = `<div class="mb-6">
                        <img src="assets/img/logo.png" alt="Brahmas Express Logo" class="h-14 w-auto object-contain bg-white rounded-lg p-2">
                    </div>`;

    const imageRegexIndex = /<img src="https:\/\/images\.unsplash\.com\/photo-1586528116311-ad8ed7c82633[^"]*"/g;
    const imageRegexGurgaon = /<img src="https:\/\/images\.unsplash\.com\/photo-1519003722824-194d4455a60c[^"]*"/g;
    const newImage = `<img src="assets/img/hero.jpg"`;

    for (let file of htmlFiles) {
        let filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        content = content.replace(headerRegex, newHeader);
        content = content.replace(footerRegex, newFooter);

        content = content.replace(imageRegexIndex, newImage);
        content = content.replace(imageRegexGurgaon, newImage);

        fs.writeFileSync(filePath, content, 'utf-8');
    }
    console.log("Updated HTML files with logos and local hero image.");
}
