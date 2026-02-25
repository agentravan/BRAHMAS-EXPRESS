const fs = require('fs');
const path = require('path');

const dirPath = "c:/Users/Harshit Bhardwaj/Desktop/Bhiw/V2";
const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

const heroNew = `<!-- SECTION 1 — HERO SECTION -->
    <section class="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div class="z-10">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-6 font-heading">
                    <span class="w-2 h-2 rounded-full bg-[#D4AF37]"></span> Trusted Logistics Partner
                </div>
                <h1 class="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-heading text-[#0B1B3D]">
                    End-to-End Relocation & <br> Logistics Management <br>
                    <span class="text-[#D4AF37] block mt-2">Across India</span>
                </h1>
                <p class="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed font-body">
                    From professional packing supervision and asset labeling to insured transit and verified delivery protocols, Brahmas Express ensures secure, transparent, and time-bound movement for households and enterprises.
                </p>

                <div class="flex flex-wrap gap-4 mb-10">
                    <a href="./contact.html" class="btn-primary">
                        Get Free Quote
                    </a>
                    <a href="tel:9667084988" class="btn-secondary text-[#0B1B3D] border-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white">
                        <i class="fa-solid fa-phone mr-2"></i> Call 9667084988
                    </a>
                </div>

                <div class="flex items-center gap-4 text-sm font-semibold text-gray-700 divide-x divide-gray-300 font-body">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-shield-halved text-[#D4AF37]"></i> Insured Shipments
                    </div>
                    <div class="flex items-center gap-2 pl-4">
                        <i class="fa-solid fa-location-crosshairs text-[#D4AF37]"></i> GPS Enabled Transport
                    </div>
                    <div class="flex items-center gap-2 pl-4">
                        <i class="fa-solid fa-user-check text-[#D4AF37]"></i> Verified Professionals
                    </div>
                    <div class="flex items-center gap-2 pl-4">
                        <i class="fa-solid fa-headset text-[#D4AF37]"></i> 24/7 Operational Support
                    </div>
                </div>
            </div>

            <div class="relative z-10 hidden lg:block">
                <div class="absolute inset-0 bg-[#D4AF37] rounded-3xl transform rotate-3 translate-x-4 translate-y-4 opacity-20"></div>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c82633?auto=format&fit=crop&q=80&w=1200"
                    alt="Logistics Fleet"
                    class="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full border border-gray-100">
            </div>
        </div>
    </section>`;

const complianceNew = `<!-- SECTION 4.5 — COMPLIANCE & SAFETY STANDARDS -->
    <section class="py-24 bg-[#F8FAFC]">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-[#D4AF37] font-bold uppercase tracking-widest text-sm font-heading mb-3 block">Enterprise Reliability</span>
                <h2 class="text-4xl font-extrabold text-[#0B1B3D] font-heading mb-6">Operational Compliance & Safety Standards</h2>
                <p class="text-gray-600 text-lg font-body">We adhere to strict operational protocols to ensure absolute safety and compliance across all logistics channels.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-body">
                <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div class="w-12 h-12 bg-[#0B1B3D] text-[#D4AF37] rounded-xl flex items-center justify-center text-xl mb-6">
                        <i class="fa-solid fa-box-shield"></i>
                    </div>
                    <h4 class="text-xl font-bold font-heading text-[#0B1B3D] mb-3">Damage Prevention Protocol</h4>
                    <p class="text-sm text-gray-600">Structured packing, layered cushioning, and fragile tagging system.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div class="w-12 h-12 bg-[#0B1B3D] text-[#D4AF37] rounded-xl flex items-center justify-center text-xl mb-6">
                        <i class="fa-solid fa-file-shield"></i>
                    </div>
                    <h4 class="text-xl font-bold font-heading text-[#0B1B3D] mb-3">Transit Insurance Coverage</h4>
                    <p class="text-sm text-gray-600">Protection against unforeseen transit risks and damages.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div class="w-12 h-12 bg-[#0B1B3D] text-[#D4AF37] rounded-xl flex items-center justify-center text-xl mb-6">
                        <i class="fa-solid fa-id-card-clip"></i>
                    </div>
                    <h4 class="text-xl font-bold font-heading text-[#0B1B3D] mb-3">Background Verified Workforce</h4>
                    <p class="text-sm text-gray-600">Trained professionals with strict accountability standards.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                    <div class="w-12 h-12 bg-[#0B1B3D] text-[#D4AF37] rounded-xl flex items-center justify-center text-xl mb-6">
                        <i class="fa-solid fa-map-location-dot"></i>
                    </div>
                    <h4 class="text-xl font-bold font-heading text-[#0B1B3D] mb-3">Documentation & Tracking Control</h4>
                    <p class="text-sm text-gray-600">Real-time tracking and delivery confirmation processes.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 5 — HOW IT WORKS -->`;

const enterprisePricing = `<!-- SECTION 3 — ENTERPRISE CUSTOM SOLUTION -->
    <section class="py-24 bg-[#0B1B3D] relative overflow-hidden mt-16">
        <div class="absolute inset-0 bg-[#D4AF37] opacity-5 transform rotate-3 scale-110"></div>
        <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div class="w-16 h-16 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full flex items-center justify-center text-2xl mx-auto mb-8">
                <i class="fa-solid fa-briefcase"></i>
            </div>
            <h2 class="text-4xl font-extrabold text-white font-heading mb-6">Require a Multi-Location or Corporate Logistics Plan?</h2>
            <p class="text-gray-300 text-lg mb-10 font-body max-w-3xl mx-auto leading-relaxed">
                For bulk transportation contracts, corporate relocation programs, warehouse partnerships, and long-term fleet requirements, our enterprise logistics team designs customized solutions aligned with your operational scale.
            </p>
            <a href="contact.html" class="inline-flex btn-primary bg-[#D4AF37] text-[#0B1B3D] hover:bg-[#b5952f] hover:text-[#0B1B3D] font-bold border-none shadow-xl px-10 py-5">
                Request Enterprise Consultation
            </a>
        </div>
    </section>
    
    <!-- FOOTER -->`;

const footerNew = `<!-- FOOTER -->
    <footer class="bg-[#0B1B3D] text-white pt-16 pb-8 border-t border-[#D4AF37]/20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div class="lg:col-span-1">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="h-10 w-10 bg-[#D4AF37] rounded flex items-center justify-center">
                            <span class="text-[#0B1B3D] font-black text-lg font-heading">B</span>
                        </div>
                        <div class="text-white tracking-widest text-sm uppercase font-bold font-heading">
                            Brahmas <span class="text-[#D4AF37]">Express</span>
                        </div>
                    </div>
                    <p class="text-gray-300 text-sm mb-6 leading-relaxed font-body">
                        Premium end-to-end logistics and relocation management across India. Secure, compliant, and professional transportation solutions for households and enterprises.
                    </p>
                </div>
                <div>
                    <h4 class="text-white font-bold font-heading mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                    <ul class="space-y-3 text-gray-300 text-sm font-body">
                        <li><a href="index.html" class="hover:text-[#D4AF37] transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Home</a></li>
                        <li><a href="about.html" class="hover:text-[#D4AF37] transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> About Us</a></li>
                        <li><a href="pricing.html" class="hover:text-[#D4AF37] transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Pricing</a></li>
                        <li><a href="contact.html" class="hover:text-[#D4AF37] transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold font-heading mb-6 uppercase tracking-wider text-sm">Core Services</h4>
                    <ul class="space-y-3 text-gray-300 text-sm font-body">
                        <li><a href="services.html" class="hover:text-[#D4AF37] transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Residential Relocation</a></li>
                        <li><a href="services.html" class="hover:text-[#D4AF37] transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Corporate Relocation</a></li>
                        <li><a href="services.html" class="hover:text-[#D4AF37] transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Packing & Storage</a></li>
                        <li><a href="services.html" class="hover:text-[#D4AF37] transition flex items-center gap-2"><i class="fa-solid fa-angle-right text-xs"></i> Fleet Transportation</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold font-heading mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                    <ul class="space-y-4 text-gray-300 text-sm font-body">
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-phone text-[#D4AF37] mt-1"></i>
                            <div>
                                <a href="tel:9667084988" class="hover:text-[#D4AF37] block transition font-bold text-white text-lg tracking-wider">9667084988</a>
                                <span class="text-xs text-gray-400 uppercase">24/7 Operations</span>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-envelope text-[#D4AF37] mt-1"></i>
                            <a href="mailto:info@brahmasexpress.in" class="hover:text-white transition block">info@brahmasexpress.in</a>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fa-solid fa-location-dot text-[#D4AF37] mt-1"></i>
                            <span>Sector 99A, Gurugram, 122505<br>PAN India Operations</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pt-8 border-t border-white/10 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4 font-body">
                <p>&copy; 2026 Brahmas Express. All Rights Reserved.</p>
                <div class="flex gap-4">
                    <a href="javascript:void(0)" class="hover:text-white transition">Privacy Policy</a>
                    <a href="javascript:void(0)" class="hover:text-white transition">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>`;

for (let file of files) {
    let filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Typography
    content = content.replace(/\bsora\b/g, 'font-heading');

    // Explicit Colors mapping
    content = content.replace(/\bbg-gray-900\b/g, 'bg-[#0B1B3D]');
    content = content.replace(/\bbg-brand-soft\b/g, 'bg-[#F8FAFC]');
    content = content.replace(/\bbg-gold\b/g, 'bg-[#D4AF37]');
    content = content.replace(/\btext-gold\b/g, 'text-[#D4AF37]');
    content = content.replace(/\bborder-gold\b/g, 'border-[#D4AF37]');
    content = content.replace(/\bshadow-gold\b/g, 'shadow-[#D4AF37]\\/50');
    content = content.replace(/\bg-subtle-gradient\b/g, 'bg-white');
    content = content.replace(/\btext-gold-dark\b/g, 'text-[#b5952f]');

    // Footer Regex replace (handles all variations of the last footer tag)
    content = content.replace(/<!-- (SECTION 9 — )?FOOTER -->[\s\S]*?<\/footer>/g, footerNew);

    // Specific logic per file
    if (file === 'index.html') {
        content = content.replace(/<!-- SECTION 1 — HERO SECTION -->[\s\S]*?<\/section>/, heroNew);
        content = content.replace(/<!-- SECTION 5 — HOW IT WORKS -->/, complianceNew);
    }

    if (file === 'pricing.html') {
        content = content.replace(/<!-- FOOTER -->/, enterprisePricing);
    }

    // Adding active nav links
    fs.writeFileSync(filePath, content, 'utf-8');
}

console.log("All HTML files updated successfully with Node.js script.");
