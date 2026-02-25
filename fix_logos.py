import os
import re
import urllib.request
import ssl

dir_path = r"c:\Users\Harshit Bhardwaj\Desktop\Bhiw\V2"

# 1. Download a reliable hero image
image_url = "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
image_path = os.path.join(dir_path, "assets", "img", "hero.jpg")
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
try:
    urllib.request.urlretrieve(image_url, image_path)
    print("Downloaded hero image.")
except Exception as e:
    print("Download failed:", e)

# 2. Update HTML files
html_files = [f for f in os.listdir(dir_path) if f.endswith('.html')]

# The original blocks as regex
header_regex = r'<a href="\./index\.html" class="flex items-center gap-3">\s*<div class="h-10 w-10[^>]*>\s*<span[^>]*>B</span>\s*</div>\s*<div[^>]*>\s*Brahmas\s*<span[^>]*>Express</span>\s*</div>\s*</a>'
new_header = r'''<a href="./index.html" class="flex items-center">
                <img src="assets/img/logo.png" alt="Brahmas Express Logo" class="h-16 w-auto object-contain">
            </a>'''

footer_regex = r'<div class="flex items-center gap-3 mb-6">\s*<div class="h-10 w-10[^>]*>\s*<span[^>]*>B</span>\s*</div>\s*<div[^>]*>\s*Brahmas\s*<span[^>]*>Express</span>\s*</div>\s*</div>'
new_footer = r'''<div class="mb-6">
                        <img src="assets/img/logo.png" alt="Brahmas Express Logo" class="h-14 w-auto object-contain bg-white rounded-lg p-2">
                    </div>'''

image_regex_index = r'<img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c82633[^"]*"'
image_regex_gurgaon = r'<img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c[^"]*"'
new_image = r'<img src="assets/img/hero.jpg"'

for file_name in html_files:
    file_path = os.path.join(dir_path, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Logo replace
    content = re.sub(header_regex, new_header, content)
    content = re.sub(footer_regex, new_footer, content)

    # Image replace
    content = re.sub(image_regex_index, new_image, content)
    content = re.sub(image_regex_gurgaon, new_image, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated logos and hero image paths.")
