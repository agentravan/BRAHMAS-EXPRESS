const fs = require('fs');
const path = require('path');

const dirPath = "c:/Users/Harshit Bhardwaj/Desktop/Bhiw/V2";
const htmlFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

const headerRegex = /<a href="\.\/index\.html" class="flex items-center">\s*<img src="assets\/img\/logo\.png" alt="Brahmas Express Logo" class="h-12 w-auto object-contain">\s*<\/a>/g;
const newHeader = `<a href="./index.html" class="flex items-center gap-3">
                <img src="assets/img/logo.png" alt="Brahmas Express Logo" class="h-10 md:h-12 w-auto object-contain">
                <div class="text-gray-900 tracking-wider text-sm md:text-base font-bold uppercase font-heading">
                    Brahmas <span class="text-[#D4AF37]">Express</span>
                </div>
            </a>`;

const footerRegex = /<div class="mb-6">\s*<img src="assets\/img\/logo\.png" alt="Brahmas Express Logo" class="h-14 w-auto object-[^>]+>\s*<\/div>/g;
const newFooter = `<div class="flex items-center gap-3 mb-6">
                        <img src="assets/img/logo.png" alt="Brahmas Express Logo" class="h-12 w-auto object-contain bg-white rounded-lg p-2">
                        <div class="text-white tracking-widest text-sm uppercase font-bold font-heading">
                            Brahmas <span class="text-[#D4AF37]">Express</span>
                        </div>
                    </div>`;

for (let file of htmlFiles) {
    let filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    content = content.replace(headerRegex, newHeader);
    content = content.replace(footerRegex, newFooter);

    fs.writeFileSync(filePath, content, 'utf-8');
}
console.log("Updated HTML files to include brand name next to logo.");
