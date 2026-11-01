/* ==========================================================================
           1A. AMMAR SYAHANSYAH'S 7 SOFTWARE ENGINEERING PROJECTS (+2,050m PLATEAU)
           ========================================================================== */
        const engineeringProjectsData = [
            {
                id: 'proj-01',
                title: 'MyPlate: Multimodal AI Nutrition and Meal Tracker',
                displayTitle: '> MyPlate: Multimodal AI Nutrition and Meal Tracker',
                category: ['ai', 'fullstack'],
                altitude: '+2,280m',
                coords: 'GEMINI AI · CLOUDFLARE EDGE',
                image: 'assets/projects/myplate.jpg',
                imageAlt: 'MyPlate nutrition dashboard with calorie and macro tracking.',
                artStyle: 'swirl',
                palette: ['#FFD8CC', '#FF8E72', '#FF4F00', '#FFF3EE'],
                tags: ['React 18', 'Vite', 'Tailwind CSS', 'Google Gemini API', 'Cloudflare Pages Functions', 'PWA'],
                sentence: 'A privacy-conscious nutrition tracker that estimates calories and macronutrients from meal photos or descriptions, with resilient AI processing on Cloudflare Pages Functions.',
                details: '• Progressive web app built with React 18, Vite, and Tailwind CSS.\n• Multimodal meal analysis estimates ingredients, serving sizes, calorie ranges, and protein, carbohydrate, and fat totals.\n• Cloudflare Pages Functions handle analysis and recipe requests while keeping API secrets server-side.\n• Model fallback, request timeouts, same-origin checks, and rate limiting help keep analysis reliable.',
                liveUrl: 'https://aimeal.pages.dev',
                repoUrl: 'https://github.com/Legarelle/AiMeal',
                seed: 1.15
            },
            {
                id: 'proj-02',
                title: '3D Data Visualization',
                displayTitle: '> 3D Data Visualization',
                category: ['3d'],
                altitude: '+2,190m',
                coords: 'THREE.JS · CSS3D · SHEETS API',
                image: 'assets/projects/datavisual.png',
                imageAlt: '3D globe displaying spreadsheet records as profile cards.',
                artStyle: 'amber-ribbon',
                palette: ['#FFE2A8', '#FF6B2B', '#C81D25', '#FFF5DC'],
                tags: ['Three.js', 'CSS3D', 'JavaScript', 'Google OAuth', 'Google Sheets API', 'Vercel'],
                sentence: 'An interactive 3D data visualization app that transforms spreadsheet records into spatial layouts, including tables, spheres, grids, tetrahedra, and double helices.',
                details: '• Connects to Google Sheets API to ingest spreadsheet rows and map their values into interactive DOM cards.\n• Combines Three.js utilities with CSS3DRenderer to keep text crisp while objects move through 3D space.\n• Smoothly interpolates between table, sphere, double-helix, grid, and tetrahedron layouts.\n• Includes orbit and trackball camera controls for panning, zooming, and changing orientation.',
                liveUrl: 'https://3d-data-visual.vercel.app/',
                seed: 2.35
            },
            {
                id: 'proj-03',
                title: 'DentAI: AI-Powered Dental Assessment System',
                displayTitle: '> DentAI: AI-Powered Dental Assessment System',
                category: ['ai', 'fullstack'],
                altitude: '+2,080m',
                coords: 'YOLOV5 · FLASK · FIREBASE',
                image: 'assets/projects/dentai.jpg',
                imageAlt: 'DentAI promo preview showing its AI-powered dental assessment platform.',
                video: 'assets/projects/dentai-promo.mp4',
                artStyle: 'chrome-liquid',
                palette: ['#E6E8EA', '#9BA4B0', '#2F3640', '#FFFFFF'],
                tags: ['React', 'Flask', 'Firebase', 'YOLO'],
                sentence: 'A team-built dental assessment and clinic management platform that uses a YOLOv5 computer-vision model to detect oral conditions.',
                details: '• A React frontend connects to a Flask backend that serves the YOLOv5 model.\n• Firebase supports authentication, real-time data storage, patient histories, and appointment scheduling.\n• Patient, clinic administrator, and system administrator workflows support assessments, records, bookings, and platform management.\n• The project was developed with a team and documented in a research paper and thesis.',
                documents: [
                    { label: 'DentAI Research Paper (PDF)', url: 'assets/projects/dentai-research-paper.pdf' },
                    { label: 'DentAI Full Thesis (PDF)', url: 'assets/projects/dentai-thesis.pdf' }
                ],
                seed: 3.45
            },
            {
                id: 'proj-04',
                title: 'LearnLoop: Adaptive AI Mastery-Learning Platform',
                displayTitle: '> LearnLoop: Adaptive AI Mastery-Learning Platform',
                category: ['ai', 'fullstack'],
                altitude: '+1,980m',
                coords: 'GROQ + GEMINI FAILOVER · VERCEL',
                image: 'assets/projects/learnloop.jpg',
                imageAlt: 'LearnLoop adaptive learning interface with diagnostic and mastery steps.',
                artStyle: 'canyon-strata',
                palette: ['#DFEEF5', '#68B0C9', '#E6C7A6', '#F8F4EC'],
                tags: ['React 18', 'Vite', 'Tailwind CSS 3', 'Framer Motion', 'Vercel Functions', 'Groq API', 'Google Gemini API', 'Zod'],
                sentence: 'A personalized mastery-learning app that identifies knowledge gaps, delivers focused lessons, and retests learners until they reach 80% mastery.',
                details: '• A learning-flow state machine manages diagnostics, lessons, quizzes, grading, and remediation.\n• The app skips mastered topics, teaches identified weak areas, then repeats focused mini-lessons and tests until learners meet the 80% threshold.\n• Groq handles primary inference, with Google Gemini as a fallback through serverless functions.\n• Shared Zod schemas validate quiz data, and browser storage preserves learning progress across refreshes.',
                liveUrl: 'https://learnloop-eta.vercel.app/',
                seed: 4.55
            },
            {
                id: 'proj-05',
                title: 'Firebase Login Mockup',
                displayTitle: '> Firebase Login Mockup',
                category: ['fullstack'],
                altitude: '+1,890m',
                coords: 'FIREBASE AUTH · OAUTH 2.0',
                image: 'assets/projects/loginmockup.jpg',
                imageAlt: 'Firebase login mockup showing its sign-in and account-creation interface.',
                video: 'assets/projects/loginmockup-demo.mp4',
                artStyle: 'turbine-pleats',
                palette: ['#E8D4B4', '#9E7B56', '#3A2E24', '#FFF6E8'],
                tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Firebase Auth', 'Google OAuth', 'GitHub OAuth', 'Font Awesome'],
                sentence: 'A responsive sign-in and account-creation interface with Firebase social authentication and a browser-storage fallback flow.',
                details: '• Firebase Authentication supports Google and GitHub provider sign-in.\n• A localStorage-based fallback demonstrates client-side account registration and sign-in flows.\n• Sliding sign-in/sign-up panels, password visibility controls, and responsive CSS layouts provide the interface interactions.',
                liveUrl: 'https://signinmockup.web.app/',
                seed: 5.25
            },
            {
                id: 'proj-06',
                title: 'Real-Time Collaborative Canvas (RTCC)',
                displayTitle: '> Real-Time Collaborative Canvas (RTCC)',
                category: ['3d', 'fullstack'],
                altitude: '+1,810m',
                coords: 'YJS CRDT · WEBSOCKETS · KONVA',
                image: 'assets/projects/rtcc.jpg',
                imageAlt: 'RTCC collaborative canvas demo showing shared drawing tools and activity.',
                video: 'assets/projects/rtcc-demo.mp4',
                artStyle: 'iridescent-torus',
                palette: ['#E9D8FD', '#9F7AEA', '#63B3ED', '#FAF5FF'],
                tags: ['React', 'React Konva', 'Yjs CRDT', 'WebSockets', 'Node.js'],
                sentence: 'A collaborative infinite canvas with real-time synchronization, shared drawing tools, cursor awareness, and persistent storage.',
                details: '• React Konva renders a pannable, zoomable canvas with world-to-screen coordinate mapping.\n• Yjs shared maps synchronize canvas state between clients through a custom Node.js WebSocket relay.\n• The Yjs Awareness protocol carries ephemeral cursor positions and user presence outside document history.\n• Throttled network updates and debounced binary snapshots support responsive collaboration and persistence.',
                repoUrl: 'https://github.com/legarelle/RTCC',
                seed: 6.40
            },
            {
                id: 'proj-07',
                title: 'Shopeers Dashboard',
                displayTitle: '> Shopeers Dashboard',
                category: ['fullstack'],
                altitude: '+1,720m',
                coords: 'NEXT.JS · TYPESCRIPT · RECHARTS',
                image: 'assets/projects/shopeers.jpg',
                imageAlt: 'Shopeers commerce dashboard with sales widgets and a customizable widget store.',
                artStyle: 'iridescent-torus',
                palette: ['#E9D8FD', '#9F7AEA', '#63B3ED', '#FAF5FF'],
                tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
                sentence: 'A customizable commerce dashboard prototype for store owners, with widgets for sales, customers, traffic, and finance.',
                details: '• Built with Next.js, React, TypeScript, Tailwind CSS, and Recharts.\n• Lets users resize, reorder, add, and stash dashboard widgets through a Widget Store.\n• Metrics and product records are illustrative local data; the AI assistant uses sample responses, and the Supabase credentials are placeholders.',
                liveUrl: 'https://shopeers-dashboard.ammarcastelo.workers.dev/',
                repoUrl: 'https://github.com/Legarelle/shopeers-dashboard',
                seed: 7.55
            }
        ];

        let currentProjectFilter = 'all';
        let carouselSculptedAlternate = true; // Matches reference image's alternating tall/recessed sculptural rhythm
        let isProjectCarouselPaused = false;
        let isMotionPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let hoveredProjectCardId = null;
        let focusedProjectCardId = null;
        let expandedProjectCardId = null;
        let projectCardEmphasisTimer = null;
        const PROJECT_CARD_EMPHASIS_DURATION_MS = 5000;

        // Continuous 3D rotation angle in degrees (preserves exact angle on pause/resume)
        let carouselAngleDeg = 0;
        let targetCarouselAngleOffset = 0;
        let isDragging3DCarousel = false;
        let dragCarouselStartX = 0;
        let activeCarouselPointerId = null;
        let carouselDragDistance = 0;
        let suppressNextProjectClick = false;
        let spatialFrameId = null;
        let activeModal = null;
        let modalReturnFocus = null;

        // Bespoke 3D Sculptural SVG Artwork Generator inspired by the user's reference image
        function create3DSculpturalArtwork(p) {
            const uid = p.id;
            if (p.artStyle === 'swirl') {
                // Soft sculptural pastel coral/peach 3D whipped peak relief (center card aesthetic from reference)
                return `
                <svg viewBox="0 0 320 200" class="w-full h-full object-cover">
                    <defs>
                        <linearGradient id="bg_${uid}" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#FCE5DC"/>
                            <stop offset="100%" stop-color="#F5C6B5"/>
                        </linearGradient>
                        <radialGradient id="rib_${uid}" cx="38%" cy="30%" r="70%">
                            <stop offset="0%" stop-color="#FFFFFF"/>
                            <stop offset="48%" stop-color="#FFD5C6"/>
                            <stop offset="85%" stop-color="#E89984"/>
                            <stop offset="100%" stop-color="#C96E58"/>
                        </radialGradient>
                        <filter id="sh_${uid}" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#8A3B28" flood-opacity="0.28"/>
                        </filter>
                    </defs>
                    <rect width="320" height="200" fill="url(#bg_${uid})"/>
                    <g filter="url(#sh_${uid})">
                        <path d="M160 18 C142 54, 92 88, 102 138 C110 172, 208 176, 218 134 C228 92, 174 58, 160 18 Z" fill="url(#rib_${uid})"/>
                        <path d="M156 26 C132 68, 114 108, 128 152 C142 176, 194 168, 202 132 C208 96, 170 64, 156 26 Z" fill="url(#rib_${uid})" opacity="0.92"/>
                        <path d="M152 38 C140 76, 136 116, 152 156 C164 172, 188 156, 186 124 C184 92, 162 64, 152 38 Z" fill="#FFF7F4" opacity="0.75"/>
                    </g>
                    <ellipse cx="160" cy="148" rx="92" ry="26" fill="none" stroke="#FFFFFF" stroke-opacity="0.55" stroke-width="1.2" stroke-dasharray="4 4"/>
                </svg>`;
            } else if (p.artStyle === 'amber-ribbon') {
                // Glossy Crimson & Golden Amber 3D ribbon folds (left tall card aesthetic from reference)
                return `
                <svg viewBox="0 0 320 200" class="w-full h-full object-cover">
                    <defs>
                        <linearGradient id="bg_${uid}" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#FCE3B8"/>
                            <stop offset="100%" stop-color="#F4B97A"/>
                        </linearGradient>
                        <linearGradient id="fold1_${uid}" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#FF9E2C"/>
                            <stop offset="45%" stop-color="#E02F2F"/>
                            <stop offset="100%" stop-color="#7A0B1E"/>
                        </linearGradient>
                        <linearGradient id="fold2_${uid}" x1="1" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#FFD464"/>
                            <stop offset="55%" stop-color="#FF5722"/>
                            <stop offset="100%" stop-color="#9E1124"/>
                        </linearGradient>
                    </defs>
                    <rect width="320" height="200" fill="url(#bg_${uid})"/>
                    <path d="M-20 190 C50 60, 140 -10, 240 20 C310 42, 330 140, 270 210 Z" fill="url(#fold1_${uid})"/>
                    <path d="M40 -20 C130 30, 180 160, 290 190 L340 20 L140 -30 Z" fill="url(#fold2_${uid})" opacity="0.88"/>
                    <path d="M20 165 C95 85, 195 55, 295 110" fill="none" stroke="#FFE9A8" stroke-width="2" stroke-opacity="0.7"/>
                </svg>`;
            } else if (p.artStyle === 'chrome-liquid') {
                // Sculpted Liquid Silver / Metallic Chrome waves (inner left card aesthetic from reference)
                return `
                <svg viewBox="0 0 320 200" class="w-full h-full object-cover">
                    <defs>
                        <linearGradient id="bg_${uid}" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#EFECE8"/>
                            <stop offset="50%" stop-color="#BCC2C8"/>
                            <stop offset="100%" stop-color="#7B828A"/>
                        </linearGradient>
                        <linearGradient id="chr_${uid}" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#FFFFFF"/>
                            <stop offset="28%" stop-color="#30343A"/>
                            <stop offset="55%" stop-color="#F7F9FA"/>
                            <stop offset="82%" stop-color="#525860"/>
                            <stop offset="100%" stop-color="#FFFFFF"/>
                        </linearGradient>
                    </defs>
                    <rect width="320" height="200" fill="url(#bg_${uid})"/>
                    <path d="M-10 150 Q 80 30, 175 110 T 330 60 L 330 210 L -10 210 Z" fill="url(#chr_${uid})"/>
                    <path d="M10 190 Q 115 65, 205 135 T 330 100" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-opacity="0.85"/>
                    <path d="M-10 95 Q 95 10, 195 85 T 330 30" fill="none" stroke="#23272D" stroke-width="3" stroke-opacity="0.45"/>
                </svg>`;
            } else if (p.artStyle === 'canyon-strata') {
                // Layered Cerulean & Sandstone Wavy Ribbon Strata (right tall card aesthetic from reference)
                return `
                <svg viewBox="0 0 320 200" class="w-full h-full object-cover">
                    <defs>
                        <linearGradient id="bg_${uid}" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#C9DDE4"/>
                            <stop offset="100%" stop-color="#EAD8C3"/>
                        </linearGradient>
                        <linearGradient id="strBlue_${uid}" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stop-color="#4A98B5"/>
                            <stop offset="50%" stop-color="#98D2E6"/>
                            <stop offset="100%" stop-color="#2D718C"/>
                        </linearGradient>
                        <linearGradient id="strSand_${uid}" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#F5E9DA"/>
                            <stop offset="55%" stop-color="#D7B894"/>
                            <stop offset="100%" stop-color="#9C7A54"/>
                        </linearGradient>
                    </defs>
                    <rect width="320" height="200" fill="url(#bg_${uid})"/>
                    <path d="M-10 70 Q 110 20, 220 85 T 330 65 L 330 170 L -10 170 Z" fill="url(#strBlue_${uid})"/>
                    <path d="M-10 115 Q 95 75, 205 135 T 330 110 L 330 210 L -10 210 Z" fill="url(#strSand_${uid})"/>
                    <path d="M-10 155 Q 120 120, 240 175 T 330 155 L 330 210 L -10 210 Z" fill="#EEDFCD"/>
                </svg>`;
            } else if (p.artStyle === 'turbine-pleats') {
                // Warm Bronze Architectural Radial Pleats (inner right card aesthetic from reference)
                return `
                <svg viewBox="0 0 320 200" class="w-full h-full object-cover">
                    <defs>
                        <linearGradient id="bg_${uid}" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#C7AE8F"/>
                            <stop offset="100%" stop-color="#5B4937"/>
                        </linearGradient>
                    </defs>
                    <rect width="320" height="200" fill="url(#bg_${uid})"/>
                    <g transform="translate(86, 68)">
                        ${Array.from({ length: 14 }, (_, i) => {
                            const a1 = i * 16;
                            const a2 = a1 + 9;
                            return `<path d="M0 0 L ${Math.cos(a1*Math.PI/180)*260} ${Math.sin(a1*Math.PI/180)*260} L ${Math.cos(a2*Math.PI/180)*260} ${Math.sin(a2*Math.PI/180)*260} Z" fill="${i % 2 === 0 ? '#F7E7CE' : '#3E2F21'}" opacity="${i % 2 === 0 ? '0.65' : '0.55'}"/>`;
                        }).join('')}
                        <circle cx="0" cy="0" r="24" fill="#FFF3D6"/>
                    </g>
                </svg>`;
            } else {
                // Iridescent Violet & Cyan 3D Torus Sculpture (outer edge cards aesthetic from reference)
                return `
                <svg viewBox="0 0 320 200" class="w-full h-full object-cover">
                    <defs>
                        <linearGradient id="bg_${uid}" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#DEC6FA"/>
                            <stop offset="50%" stop-color="#B8D8FC"/>
                            <stop offset="100%" stop-color="#F6D0E6"/>
                        </linearGradient>
                        <radialGradient id="orb_${uid}" cx="35%" cy="30%" r="68%">
                            <stop offset="0%" stop-color="#FFFFFF"/>
                            <stop offset="45%" stop-color="#B589F7"/>
                            <stop offset="85%" stop-color="#5B54D6"/>
                            <stop offset="100%" stop-color="#2D2363"/>
                        </radialGradient>
                    </defs>
                    <rect width="320" height="200" fill="url(#bg_${uid})"/>
                    <circle cx="160" cy="102" r="66" fill="url(#orb_${uid})"/>
                    <ellipse cx="160" cy="102" rx="92" ry="30" transform="rotate(-22 160 102)" fill="none" stroke="#FFFFFF" stroke-width="10" stroke-opacity="0.65"/>
                    <ellipse cx="160" cy="102" rx="92" ry="30" transform="rotate(-22 160 102)" fill="none" stroke="#68D5F8" stroke-width="3" stroke-opacity="0.9"/>
                </svg>`;
            }
        }

        function buildProjectCardHTML(p, idx) {
            return `
                <div class="project-3d-slot"
                     data-slot-index="${idx}"
                     data-proj-id="${p.id}"
                     onmouseenter="handleProjectCardEnter('${p.id}', this)"
                     onmouseleave="handleProjectCardLeave('${p.id}', this)"
                     onclick="handleProjectCardClick(event, '${p.id}')">
                    <article role="button" tabindex="0" aria-label="Inspect ${p.title}" onfocus="handleProjectCardFocus('${p.id}')" onblur="handleProjectCardBlur()" onkeydown="handleProjectCardKeydown(event, '${p.id}')" class="project-carousel-card group cursor-pointer border hairline-border card-surface flex flex-col justify-between relative shadow-2xl">
                        <!-- Project Preview -->
                        <div class="relative h-44 sm:h-48 w-full overflow-hidden border-b hairline-border shrink-0">
                            ${createProjectArtwork(p)}
                            <!-- Floating Top Telemetry Pill over Artwork -->
                            <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5 pointer-events-none">
                                <span class="px-2.5 py-0.5 rounded-full bg-black/55 backdrop-blur-md text-white font-mono text-[10px] tracking-wider">
                                    0${idx + 1} · ${p.altitude}
                                </span>
                                <span class="proj-hover-badge px-2.5 py-0.5 rounded-full bg-[var(--accent)] text-[var(--accent-on)] font-mono text-[11px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                    ${p.video ? 'VIDEO PREVIEW' : 'PAUSED · 3D LOCK'}
                                </span>
                            </div>
                            <!-- Bottom Coords Tag over Artwork -->
                            <div class="absolute bottom-2.5 left-3 pointer-events-none">
                                <span class="project-card-coords px-2 py-0.5 rounded-md bg-black/45 backdrop-blur-sm text-white/90 font-mono text-[9px] tracking-widest uppercase">
                                    ${p.coords}
                                </span>
                            </div>
                        </div>

                        <!-- Bottom Editorial Typography & Tech Pills -->
                        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[var(--bg-card)]">
                            <div>
                                <h3 class="font-mono text-xs sm:text-sm font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-text)] transition-colors mb-1.5 leading-snug line-clamp-2">
                                    ${p.displayTitle}
                                </h3>
                                <p class="text-[11px] sm:text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                                    ${p.sentence}
                                </p>
                            </div>

                            <div class="pt-2.5 mt-2 border-t hairline-border">
                                <div class="flex flex-wrap items-center gap-1 mb-2">
                                    ${p.tags.slice(0, 4).map(t => `<span class="px-2 py-0.5 rounded-full border hairline-border font-mono text-[9px] text-[var(--text-primary)] bg-black/[0.02] dark:bg-white/[0.04]">${t}</span>`).join('')}
                                    ${p.tags.length > 4 ? `<span class="px-1.5 py-0.5 font-mono text-[9px] text-[var(--accent-text)]">+${p.tags.length - 4}</span>` : ''}
                                </div>
                                <div class="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                                    <span>Tap or press Enter</span>
                                    <span class="text-[var(--accent-text)] font-medium">Open →</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            `;
        }

        function createProjectArtwork(project) {
            if (!project.image) return create3DSculpturalArtwork(project);

            if (project.video) {
                return `<video class="project-preview-video w-full h-full object-cover" muted loop playsinline preload="metadata" poster="${project.image}" aria-hidden="true"><source src="${project.video}" type="video/mp4"></video>`;
            }

            return `<img src="${project.image}" alt="${project.imageAlt}" class="w-full h-full object-cover" loading="lazy" decoding="async">`;
        }

        function renderProjectsGrid() {
            const ring = document.getElementById('projects-3d-ring');
            if (!ring) return;

            stopProjectCardVideos();

            const filtered = currentProjectFilter === 'all'
                ? engineeringProjectsData
                : engineeringProjectsData.filter(p => p.category.includes(currentProjectFilter));

            ring.innerHTML = filtered.map((p, idx) => buildProjectCardHTML(p, idx)).join('');
            update3DGalleryPositions();
            playProjectCardVideos();
        }

        function playProjectCardVideos() {
            if (isMotionPaused || document.hidden) return;
            document.querySelectorAll('.project-preview-video').forEach(video => {
                if (!video.paused) return;
                const playRequest = video.play();
                if (playRequest) {
                    playRequest.catch(error => {
                        if (error.name !== 'AbortError') {
                            console.error('Unable to autoplay a project preview:', error);
                        }
                    });
                }
            });
        }

        function stopProjectCardVideos(exceptSlot = null) {
            document.querySelectorAll('.project-preview-video').forEach(video => {
                if (video.closest('.project-3d-slot') === exceptSlot) return;
                video.pause();
                video.currentTime = 0;
            });
        }

        function updateCarouselStatusHUD(paused, reason = 'CARD ENLARGED') {
            const dot = document.getElementById('carouselStatusDot');
            const text = document.getElementById('carouselStatusText');
            if (!dot || !text) return;
            if (isMotionPaused) {
                paused = true;
                reason = 'MOTION PAUSED';
            }

            if (paused) {
                dot.className = 'w-1.5 h-1.5 rounded-full bg-[var(--accent)]';
                text.textContent = `3D GALLERY: PAUSED · ${reason}`;
            } else {
                dot.className = 'w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse';
                text.textContent = '3D GALLERY: ROTATING';
            }
        }

        function clearProjectCardEmphasisTimer() {
            if (projectCardEmphasisTimer === null) return;
            window.clearTimeout(projectCardEmphasisTimer);
            projectCardEmphasisTimer = null;
        }

        function setProjectCardEmphasis(projId, reason = 'CARD ENLARGED') {
            clearProjectCardEmphasisTimer();
            expandedProjectCardId = projId;
            isProjectCarouselPaused = true;
            highlightProjectCard(projId);
            updateCarouselStatusHUD(true, reason);
            update3DGalleryPositions();

            if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
            projectCardEmphasisTimer = window.setTimeout(() => {
                if (expandedProjectCardId !== projId) return;
                projectCardEmphasisTimer = null;
                expandedProjectCardId = null;
                isProjectCarouselPaused = false;
                playProjectCardVideos();
                highlightProjectCard(null);
                updateCarouselStatusHUD(false);
                update3DGalleryPositions();
                requestSpatialRender();
            }, PROJECT_CARD_EMPHASIS_DURATION_MS);
        }

        function clearProjectCardEmphasis() {
            clearProjectCardEmphasisTimer();
            hoveredProjectCardId = null;
            focusedProjectCardId = null;
            expandedProjectCardId = null;
            isProjectCarouselPaused = false;
            playProjectCardVideos();
            highlightProjectCard(null);
            updateCarouselStatusHUD(false);
            update3DGalleryPositions();
        }

        function handleProjectCardEnter(projId, slotEl) {
            hoveredProjectCardId = projId;

            const previewVideo = slotEl.querySelector('.project-preview-video');
            if (previewVideo && !isMotionPaused) {
                const playRequest = previewVideo.play();
                if (playRequest) {
                    playRequest.catch(error => {
                        if (error.name !== 'AbortError') {
                            console.error(`Unable to play the ${projId} project preview:`, error);
                        }
                    });
                }
            }

            setProjectCardEmphasis(projId);
        }

        function handleProjectCardFocus(projId) {
            focusedProjectCardId = projId;
            setProjectCardEmphasis(projId, 'CARD FOCUSED');
        }

        function handleProjectCardBlur() {
            window.setTimeout(() => {
                const focusedSlot = document.activeElement?.closest?.('.project-3d-slot');
                if (focusedSlot) {
                    focusedProjectCardId = focusedSlot.getAttribute('data-proj-id');
                    return;
                }
                if (document.activeElement?.closest?.('button[onclick^="nudgeProjectCarousel("]')) return;
                focusedProjectCardId = null;
                if (!hoveredProjectCardId && expandedProjectCardId) clearProjectCardEmphasis();
            }, 0);
        }

        function handleProjectCardClick(event, projId) {
            if (suppressNextProjectClick) {
                suppressNextProjectClick = false;
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            event.currentTarget.querySelector('article')?.focus();
            openEngineeringProjectModal(projId);
        }

        function handleProjectCardKeydown(event, projId) {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            openEngineeringProjectModal(projId);
        }

        function handleProjectCardLeave(projId, slotEl) {
            if (hoveredProjectCardId !== projId) return;

            hoveredProjectCardId = null;
            if (expandedProjectCardId !== projId) return;
            if (focusedProjectCardId) {
                setProjectCardEmphasis(focusedProjectCardId, 'CARD FOCUSED');
            } else {
                clearProjectCardEmphasis();
            }
        }

        function highlightProjectCard(projId) {
            const slots = document.querySelectorAll('#projects-3d-ring .project-3d-slot');
            slots.forEach(slot => {
                const isFocused = slot.getAttribute('data-proj-id') === projId;
                slot.classList.toggle('is-hovered-slot', isFocused);
                slot.querySelector('.project-carousel-card')?.classList.toggle('is-hovered-card', isFocused);
            });

            document.getElementById('projects-3d-ring')?.classList.toggle('carousel-has-hover', Boolean(projId));
        }

        function nudgeProjectCarousel(direction) {
            const slots = document.querySelectorAll('#projects-3d-ring .project-3d-slot');
            const count = slots.length;
            if (count === 0) return;

            const activeProjectId = focusedProjectCardId || hoveredProjectCardId;
            let currentIndex = Array.from(slots).findIndex(slot => slot.getAttribute('data-proj-id') === activeProjectId);
            clearProjectCardEmphasis();
            if (currentIndex === -1) {
                const step = 360 / count;
                currentIndex = Array.from(slots).reduce((closestIndex, slot, index) => {
                    let angle = (index * step + carouselAngleDeg) % 360;
                    if (angle > 180) angle -= 360;
                    if (angle < -180) angle += 360;

                    let closestAngle = (closestIndex * step + carouselAngleDeg) % 360;
                    if (closestAngle > 180) closestAngle -= 360;
                    if (closestAngle < -180) closestAngle += 360;
                    return Math.abs(angle) < Math.abs(closestAngle) ? index : closestIndex;
                }, 0);
            }

            const nextIndex = (currentIndex + direction + count) % count;
            const targetAngle = -nextIndex * (360 / count);
            targetCarouselAngleOffset = ((targetAngle - carouselAngleDeg + 540) % 360) - 180;
            focusedProjectCardId = slots[nextIndex].getAttribute('data-proj-id');
            setProjectCardEmphasis(focusedProjectCardId, 'CARD FOCUSED');
            requestSpatialRender();
        }

        function toggleCarouselViewMode() {
            carouselSculptedAlternate = !carouselSculptedAlternate;
            const modeBtn = document.getElementById('carouselModeBtn');
            if (modeBtn) {
                modeBtn.textContent = carouselSculptedAlternate ? 'ARC: SCULPTED 3D' : 'ARC: UNIFORM 3D';
            }
            update3DGalleryPositions();
        }

        // Core 3D Curved Spatial Gallery Math (matches reference image's wrap-around perspective & alternating scale)
        function update3DGalleryPositions() {
            const slots = document.querySelectorAll('#projects-3d-ring .project-3d-slot');
            const count = slots.length;
            if (count === 0) return;

            const isMobile = window.innerWidth < 640;
            const spreadWidth = isMobile ? Math.min(window.innerWidth * 0.72, 300) : Math.min(window.innerWidth * 0.43, 490);
            const depthRadius = isMobile ? 105 : 230;

            slots.forEach((slot, idx) => {
                const projId = slot.getAttribute('data-proj-id');
                const isHovered = expandedProjectCardId === projId;

                // Normalized angle in [-180, 180] where 0 deg is dead-center front
                const baseStep = 360 / count;
                let relDeg = (idx * baseStep + carouselAngleDeg) % 360;
                if (relDeg > 180) relDeg -= 360;
                if (relDeg < -180) relDeg += 360;

                const rad = (relDeg * Math.PI) / 180;
                const sinA = Math.sin(rad);
                const cosA = Math.cos(rad); // +1 at front center, -1 at back

                // Horizontal curved spread + cylindrical Z-depth
                const x = sinA * spreadWidth;
                let z = cosA * depthRadius - depthRadius * 0.25;

                // Steep panoramic Y-rotation on outer edges, flat facing at 0 deg center (just like reference image)
                let rotY = -sinA * (isMobile ? 38 : 68);

                // Sculpted alternating scale rhythm (center hero tallest, flanking cards alternate tall/compact)
                const frontness = (cosA + 1) * 0.5; // 1.0 at center front, 0.0 at back
                let scale = 0.68 + 0.40 * Math.pow(frontness, 1.35);

                if (carouselSculptedAlternate && count >= 4) {
                    const altPulse = (idx % 2 === 1) ? -0.075 : 0.045;
                    scale += altPulse * (1 - Math.pow(frontness, 3));
                }

                // When hovered: bring forward in 3D Z-space, enlarge, and flatten angle toward viewer
                if (isHovered) {
                    z += 95;
                    scale *= 1.15;
                    rotY *= 0.28; // Rotate toward viewer for effortless reading
                }

                // Smooth visibility & z-index sorting
                const opacity = clamp(0.22 + 0.78 * Math.pow(frontness, 0.95), 0.18, 1);
                const isMobileVisible = !isMobile || frontness >= 0.68 || isHovered;
                const zIndex = isHovered ? 200 : Math.round(frontness * 100);

                slot.style.zIndex = String(zIndex);
                slot.style.opacity = isHovered ? '1' : (isMobileVisible ? opacity.toFixed(3) : '0');
                slot.style.pointerEvents = isMobileVisible ? '' : 'none';
                slot.inert = !isMobileVisible;
                slot.setAttribute('aria-hidden', String(!isMobileVisible));
                slot.style.transform = `translate3d(${x.toFixed(1)}px, 0px, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
            });
        }

        function stepProjectCarouselAnimation(deltaScale = 1) {
            if (isMotionPaused) {
                if (Math.abs(targetCarouselAngleOffset) > 0.05) {
                    carouselAngleDeg = (carouselAngleDeg + targetCarouselAngleOffset) % 360;
                    targetCarouselAngleOffset = 0;
                    update3DGalleryPositions();
                }
                return;
            }

            // Smoothly ease any manual button/drag angle offset
            if (Math.abs(targetCarouselAngleOffset) > 0.05) {
                const step = targetCarouselAngleOffset * (1 - Math.pow(1 - 0.12, deltaScale));
                carouselAngleDeg = (carouselAngleDeg + step) % 360;
                targetCarouselAngleOffset -= step;
                update3DGalleryPositions();
            }

            if (isProjectCarouselPaused || isDragging3DCarousel || isModalOpen()) return;

            // Continuous smooth 3D orbital rotation
            carouselAngleDeg = (carouselAngleDeg - 0.16 * deltaScale) % 360;
            update3DGalleryPositions();
        }

        // Pointer capture keeps gallery dragging available to mouse, pen, and touch users.
        (function init3DGalleryDrag() {
            const stage = document.getElementById('projectSpatialStage');
            if (!stage) return;

            stage.addEventListener('pointerdown', (e) => {
                if (!e.isPrimary || e.button !== 0 || isModalOpen()) return;
                isDragging3DCarousel = false;
                activeCarouselPointerId = e.pointerId;
                dragCarouselStartX = e.clientX;
                carouselDragDistance = 0;
            });

            stage.addEventListener('pointermove', (e) => {
                if (e.pointerId !== activeCarouselPointerId) return;
                const dx = e.clientX - dragCarouselStartX;
                dragCarouselStartX = e.clientX;
                carouselDragDistance += Math.abs(dx);
                if (!isDragging3DCarousel && carouselDragDistance > 6) {
                    isDragging3DCarousel = true;
                    stage.setPointerCapture(e.pointerId);
                }
                if (!isDragging3DCarousel) return;
                carouselAngleDeg = (carouselAngleDeg + dx * 0.32) % 360;
                update3DGalleryPositions();
            });

            const finishDrag = (e) => {
                if (e.pointerId !== activeCarouselPointerId) return;
                if (isDragging3DCarousel) {
                    suppressNextProjectClick = true;
                    window.setTimeout(() => { suppressNextProjectClick = false; }, 0);
                }
                isDragging3DCarousel = false;
                activeCarouselPointerId = null;
            };
            window.addEventListener('pointerup', finishDrag);
            window.addEventListener('pointercancel', finishDrag);
            stage.addEventListener('lostpointercapture', finishDrag);
            window.addEventListener('blur', () => {
                isDragging3DCarousel = false;
                activeCarouselPointerId = null;
            });
        })();

        function filterProjects(category) {
            currentProjectFilter = category;
            carouselAngleDeg = 0;
            targetCarouselAngleOffset = 0;
            clearProjectCardEmphasisTimer();
            focusedProjectCardId = null;
            hoveredProjectCardId = null;
            expandedProjectCardId = null;
            isProjectCarouselPaused = false;
            highlightProjectCard(null);
            document.querySelectorAll('.proj-filter-btn').forEach(btn => {
                const isSelected = btn.getAttribute('data-proj-filter') === category;
                btn.setAttribute('aria-pressed', String(isSelected));
                if (isSelected) {
                    btn.className = 'proj-filter-btn min-h-11 px-3 py-1 rounded-full font-mono text-[11px] bg-[var(--text-primary)] text-[var(--bg-primary)] transition-all';
                } else {
                    btn.className = 'proj-filter-btn min-h-11 px-3 py-1 rounded-full font-mono text-[11px] border hairline-border card-surface text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all';
                }
            });
            renderProjectsGrid();
        }

        function openEngineeringProjectModal(id) {
            const p = engineeringProjectsData.find(item => item.id === id);
            if (!p) return;
            clearProjectCardEmphasis();
            stopProjectCardVideos();
            document.getElementById('modalMeta').textContent = `SOFTWARE ENGINEERING PROJECT — ELEVATION ${p.altitude}`;
            document.getElementById('modalTitle').textContent = p.title;
            const summaryEl = document.getElementById('modalSummary');
            summaryEl.style.whiteSpace = 'pre-line';
            summaryEl.textContent = `${p.sentence}\n\n${p.details}`;
            document.getElementById('modalCoords').textContent = `${p.coords} — ${p.altitude}`;
            const modalArtwork = document.getElementById('modalArtwork');
            modalArtwork.innerHTML = p.video ? '' : createProjectArtwork(p);
            modalArtwork.classList.toggle('hidden', Boolean(p.video));
            document.getElementById('modalTags').innerHTML = p.tags.map(t =>
                `<span class="px-2.5 py-1 rounded-full border hairline-border text-[11px]">${t}</span>`
            ).join('');
            setProjectModalLinks(p);
            setProjectModalMedia(p);

            const modal = document.getElementById('projectModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            activateModal(modal);
        }

        function activateModal(modal) {
            activeModal = modal;
            modalReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            const initialFocus = modal.querySelector('[data-modal-initial-focus], button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            (initialFocus || modal.querySelector('[role="dialog"] > div') || modal).focus();
        }

        function closeActiveModal() {
            if (!activeModal) return false;
            const closingModal = activeModal;
            activeModal = null;
            closingModal.classList.add('hidden');
            closingModal.classList.remove('flex');
            const focusTarget = modalReturnFocus;
            modalReturnFocus = null;
            if (focusTarget?.isConnected) focusTarget.focus();
            return true;
        }

        function trapModalTab(event) {
            if (!activeModal || event.key !== 'Tab') return;
            const focusable = Array.from(activeModal.querySelectorAll(
                'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], audio[controls], [tabindex]:not([tabindex="-1"])'
            )).filter(element => element instanceof HTMLElement && element.getClientRects().length > 0);
            if (focusable.length === 0) {
                event.preventDefault();
                activeModal.focus();
                return;
            }
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && (document.activeElement === first || !activeModal.contains(document.activeElement))) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && (document.activeElement === last || !activeModal.contains(document.activeElement))) {
                event.preventDefault();
                first.focus();
            }
        }

        function setProjectModalLinks(project) {
            const linksContainer = document.getElementById('modalProjectLinks');
            linksContainer.replaceChildren();

            [
                ['liveUrl', 'Live Demo', 'project-modal-link--demo'],
                ['repoUrl', 'GitHub Repository', 'project-modal-link--repo']
            ].forEach(([urlKey, label, variant]) => {
                if (!project[urlKey]) return;

                const link = document.createElement('a');
                link.href = project[urlKey];
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.className = `project-modal-link ${variant}`;
                link.textContent = `${label} ↗`;
                linksContainer.appendChild(link);
            });

            (project.documents || []).forEach(documentLink => {
                const link = document.createElement('a');
                link.href = documentLink.url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.className = 'project-modal-link project-modal-link--resource';
                link.textContent = `${documentLink.label} ↗`;
                linksContainer.appendChild(link);
            });

            linksContainer.classList.toggle('hidden', linksContainer.childElementCount === 0);
        }

        function setProjectModalMedia(project) {
            const mediaContainer = document.getElementById('modalProjectMedia');
            mediaContainer.querySelectorAll('video').forEach(video => video.pause());
            mediaContainer.replaceChildren();
            mediaContainer.classList.toggle('hidden', !project?.video);
            if (!project?.video) return;

            const video = document.createElement('video');
            video.className = 'w-full max-h-80 rounded-xl bg-black';
            video.controls = true;
            video.autoplay = !isMotionPaused;
            video.muted = true;
            video.preload = 'metadata';
            video.playsInline = true;
            video.src = project.video;
            video.addEventListener('error', () => {
                console.error(`Unable to load the ${project.title} project video:`, video.error);
            });
            mediaContainer.appendChild(video);
        }

        /* ==========================================================================
           1B. AMMAR SYAHANSYAH'S WORK EXPERIENCE DECK (+1,180m RIDGE)
           ========================================================================== */
        const projectsData = [
            {
                id: '01',
                title: 'Kasatria Technologies',
                role: 'Data Analyst Intern',
                dates: 'Mar 2026 – Jul 2026',
                altitude: '+1,420m',
                coords: '03°08\'20"N 101°41\'13"E · Kuala Lumpur',
                tags: ['Google Tag Manager', 'GA4 Audits', 'Data Layer', 'Google Web Designer'],
                sentence: 'Authored technical integration guides for client engineers and audited GTM and GA4 data layers to improve tracking accuracy.',
                details: '• Authored technical integration guides to help client engineers configure enterprise Google Tag Manager (GTM) tracking.\n• Executed GTM and Google Analytics 4 (GA4) data-layer audits to eliminate tracking gaps and ensure data integrity.\n• Developed and deployed dynamic rich-media ads using Google Web Designer and Google Studio.',
                image: 'assets/experience/kasatria-team.jpeg',
                imageAlt: 'Kasatria Technologies colleagues together in their office.',
                seed: 1.4,
                targetProgress: 0.42
            },
            {
                id: '02',
                title: 'Derhu Beach Resort',
                role: 'IT Department Intern',
                dates: 'Apr 2022 – Aug 2022',
                altitude: '+1,180m',
                coords: '03°56\'N 103°22\'E · Pahang, MY',
                tags: ['Wi-Fi Telephony Migration', 'Server Hardware', 'Vendor Liaison', 'Networking'],
                sentence: 'Coordinated the resort telephone system migration from traditional landlines to a Wi-Fi-based infrastructure.',
                details: '• Coordinated the migration of the resort telephone system from traditional landlines to a Wi-Fi-based system.\n• Liaised between resort management and external IT vendors.\n• Maintained server and networking hardware.',
                image: 'assets/experience/derhu-resort.jpg',
                imageAlt: 'The swimming pool and tropical grounds at Derhu Beach Resort.',
                seed: 2.9,
                targetProgress: 0.60
            },
        ];

        function createMinimalContourSvg(seed) {
            let rings = '';
            for (let i = 1; i <= 7; i++) {
                const rx = 26 * i + Math.sin(seed * i) * 10;
                const ry = 14 * i + Math.cos(seed + i) * 6;
                const rot = (seed * 22 + i * 11) % 180;
                const isAccent = i === 4;
                rings += `<ellipse cx="220" cy="115" rx="${rx}" ry="${ry}" transform="rotate(${rot} 220 115)" fill="none" stroke="${isAccent ? 'var(--accent)' : 'currentColor'}" stroke-opacity="${isAccent ? '0.85' : '0.18'}" stroke-width="${isAccent ? '1.5' : '1'}"/>`;
            }
            return `
                <svg viewBox="0 0 440 230" class="w-full h-full">
                    ${rings}
                    <circle cx="220" cy="115" r="3" fill="var(--accent)"/>
                </svg>
            `;
        }

        function applyAboutTab(tab) {
            const isAcademics = tab === 'academics';
            const academicsTab = document.getElementById('academicsTab');
            const strengthsTab = document.getElementById('strengthsTab');
            const academicsPanel = document.getElementById('academicsPanel');
            const strengthsPanel = document.getElementById('strengthsPanel');
            const academicsEyebrow = document.getElementById('academicsEyebrow');
            const strengthsEyebrow = document.getElementById('strengthsEyebrow');
            const academicsHeading = document.getElementById('academicsHeading');
            const strengthsHeading = document.getElementById('strengthsHeading');

            academicsTab.setAttribute('aria-selected', String(isAcademics));
            academicsTab.tabIndex = isAcademics ? 0 : -1;
            academicsPanel.hidden = !isAcademics;
            academicsPanel.classList.toggle('hidden', !isAcademics);
            strengthsTab.setAttribute('aria-selected', String(!isAcademics));
            strengthsTab.tabIndex = isAcademics ? -1 : 0;
            strengthsPanel.hidden = isAcademics;
            strengthsPanel.classList.toggle('hidden', isAcademics);
            academicsEyebrow.hidden = !isAcademics;
            academicsEyebrow.classList.toggle('hidden', !isAcademics);
            strengthsEyebrow.hidden = isAcademics;
            strengthsEyebrow.classList.toggle('hidden', isAcademics);
            academicsHeading.hidden = !isAcademics;
            academicsHeading.classList.toggle('hidden', !isAcademics);
            strengthsHeading.hidden = isAcademics;
            strengthsHeading.classList.toggle('hidden', isAcademics);
        }

        function selectAboutTab(tab) {
            applyAboutTab(tab);
            scrubToProgress(ABOUT_TAB_PROGRESS[tab]);
        }

        document.getElementById('aboutTabs').addEventListener('keydown', (event) => {
            if (!['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'].includes(event.key)) return;
            event.preventDefault();
            const nextTab = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 'strengths' : 'academics';
            selectAboutTab(nextTab);
            document.getElementById(`${nextTab}Tab`).focus();
        });

        function renderWorkDeck() {
            const deck = document.getElementById('workDeckContainer');
            const dots = document.getElementById('workStageDots');

            dots.innerHTML = projectsData.map((p, idx) => `
                <button onclick="scrubToProgress(${p.targetProgress})" data-work-dot="${idx}" class="work-dot-btn min-h-11 px-3 py-1 rounded-full font-mono text-xs border hairline-border transition-all">
                    <span class="work-dot-id">${p.id}</span>
                    <span class="work-dot-title">${p.title}</span>
                    <span aria-hidden="true">/</span>
                </button>
            `).join('');

            deck.innerHTML = projectsData.map((p, idx) => `
                <article id="workSlide_${idx}" role="button" tabindex="0" aria-label="Inspect ${p.title}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openProjectModal('${p.id}')}" onclick="this.focus();openProjectModal('${p.id}')" class="work-card-slide cursor-pointer rounded-3xl border hairline-border card-surface p-6 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center hover:border-[var(--accent)] transition-colors">
                    <!-- Left Artwork Preview -->
                    <div class="md:col-span-6 h-48 sm:h-72 rounded-2xl border hairline-border overflow-hidden flex items-center justify-center bg-black/[0.02] dark:bg-white/[0.02] relative">
                        <img src="${p.image}" alt="${p.imageAlt}" class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async">
                        <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35"></div>
                        <span class="absolute top-3 left-3.5 font-mono text-[11px] text-white drop-shadow-sm">
                            SURVEY ${p.id} / 02
                        </span>
                        <span class="work-card-coordinates absolute bottom-3 right-3.5 font-mono text-[11px] text-white drop-shadow-sm">
                            ${p.coords}
                        </span>
                    </div>

                    <!-- Right Editorial Info -->
                    <div class="md:col-span-6 flex flex-col justify-between h-full py-2">
                        <div>
                            <div class="flex items-center space-x-2 font-mono text-xs text-[var(--accent-text)] mb-3">
                                <span>${p.role}</span>
                                <span>—</span>
                                <span class="text-[var(--text-muted)]">${p.dates}</span>
                            </div>

                            <h3 class="text-2xl sm:text-4xl font-medium tracking-tight leading-tight mb-4">
                                ${p.title}
                            </h3>

                            <p class="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6">
                                ${p.sentence}
                            </p>

                            <div class="flex flex-wrap gap-2 mb-6">
                                ${p.tags.map(t => `<span class="px-3 py-1 rounded-full border hairline-border font-mono text-[11px] text-[var(--text-muted)]">${t}</span>`).join('')}
                            </div>
                        </div>

                        <div class="pt-4 border-t hairline-border flex items-center justify-between font-mono text-xs">
                            <span class="text-[var(--text-muted)]">Select a card or press Enter to inspect</span>
                            <span class="text-[var(--text-primary)] font-medium">Inspect Details →</span>
                        </div>
                    </div>
                </article>
            `).join('');
        }

        /* ==========================================================================
           2. APPLE-STYLE SPATIAL CAMERA & VIRTUAL SCROLL ENGINE
           ========================================================================== */
        let targetProgress = 0;   // Normalized 0.0 (Summit +2840m) -> 1.0 (Seabed -1200m)
        let currentProgress = 0;  // Smooth LERP-interpolated camera progress
        let activeSceneIdx = 0;
        let activeChapterHint = '';
        let isDraggingScrubber = false;
        const altitudeScrubber = document.getElementById('altitudeScrubber');

        // Key stop centers where the camera naturally dwells for an extra 1-2 wheel ticks
        const ABOUT_TAB_PROGRESS = { academics: 0.775, strengths: 0.865 };
        const ABOUT_TAB_SWITCH_PROGRESS = 0.82;
        const SCRUBBER_COMPACT_LAYOUT_QUERY = '(max-width: 899px)';
        const STAGE_STOP_CENTERS = [0.00, 0.22, 0.42, 0.60, ABOUT_TAB_PROGRESS.academics, ABOUT_TAB_SWITCH_PROGRESS, ABOUT_TAB_PROGRESS.strengths, 1.00];
        const ALTITUDE_STOPS = [
            { progress: 0.00, altitude: 2840 },
            { progress: 0.22, altitude: 2050 },
            { progress: 0.42, altitude: 1180 },
            { progress: 0.82, altitude: 0 },
            { progress: 1.00, altitude: -1200 }
        ];

        function updateAboutTabForProgress(progress) {
            const tab = progress <= ABOUT_TAB_SWITCH_PROGRESS ? 'academics' : 'strengths';
            const isSelected = document.getElementById(`${tab}Tab`).getAttribute('aria-selected') === 'true';
            if (!isSelected) applyAboutTab(tab);
        }

        function updateScrubberVisibility() {
            const shouldHideScrubber = window.matchMedia(SCRUBBER_COMPACT_LAYOUT_QUERY).matches && !isDraggingScrubber;
            if (altitudeScrubber.classList.contains('is-hidden') === shouldHideScrubber) return;

            altitudeScrubber.classList.toggle('is-hidden', shouldHideScrubber);
            altitudeScrubber.setAttribute('aria-hidden', String(shouldHideScrubber));
            if (shouldHideScrubber) {
                altitudeScrubber.setAttribute('inert', '');
                if (altitudeScrubber.contains(document.activeElement)) {
                    document.querySelector(`.nav-pill-btn[data-nav-scene="${activeSceneIdx}"]`).focus();
                }
            } else {
                altitudeScrubber.removeAttribute('inert');
            }
        }

        updateScrubberVisibility();
        window.addEventListener('resize', updateScrubberVisibility);

        function clamp(val, min, max) {
            return Math.max(min, Math.min(max, val));
        }

        function scrubToProgress(val) {
            setProgressTarget(val);
        }

        function setProgressTarget(val) {
            targetProgress = clamp(val, 0, 1);
            if (isMotionPaused) {
                currentProgress = targetProgress;
                updateSpatialScenes(currentProgress);
            }
            requestSpatialRender();
        }

        function stepForward() {
            if (targetProgress < 0.16) scrubToProgress(0.22);
            else if (targetProgress < 0.36) scrubToProgress(0.42);
            else if (targetProgress < 0.51) scrubToProgress(0.60);
            else if (targetProgress < 0.76) scrubToProgress(ABOUT_TAB_PROGRESS.academics);
            else if (targetProgress < ABOUT_TAB_PROGRESS.strengths) scrubToProgress(ABOUT_TAB_PROGRESS.strengths);
            else if (targetProgress < 0.93) scrubToProgress(1.0);
            else scrubToProgress(0.0);
        }

        function isModalOpen() {
            const pModal = document.getElementById('projectModal');
            return !pModal.classList.contains('hidden');
        }

        // Compute dwell-adjusted scroll step so each item stays displayed for 1-2 extra wheel ticks
        function getDwellAdjustedDelta(rawDelta) {
            let minDist = 1;
            for (let i = 0; i < STAGE_STOP_CENTERS.length; i++) {
                const d = Math.abs(targetProgress - STAGE_STOP_CENTERS[i]);
                if (d < minDist) minDist = d;
            }
            // When inside a stage or card dwell zone (+/- 0.042), dampen scroll speed by ~42%
            // so it takes 1 to 2 extra wheel ticks before departing the active item
            const dwellFactor = minDist < 0.042 ? 0.58 : 1.0;
            return rawDelta * dwellFactor;
        }

        // Wheel / Trackpad Gesture Listener (Lengthened timeline & clamped per-tick step)
        window.addEventListener('wheel', (e) => {
            if (isModalOpen()) return;
            e.preventDefault();
            // Lower multiplier (0.00021 vs 0.00045) + clamped max per-tick step (0.024)
            const rawStep = clamp(e.deltaY * 0.00021, -0.024, 0.024);
            const adjustedStep = getDwellAdjustedDelta(rawStep);
            setProgressTarget(targetProgress + adjustedStep);
        }, { passive: false });

        // Touch Swipe Gesture Listener for Mobile/Tablet (Lengthened swipe distance)
        let touchStartY = 0;
        window.addEventListener('touchstart', (e) => {
            if (isModalOpen()) return;
            if (e.target instanceof Element && e.target.closest('#projectSpatialStage, #altitudeTrack, button, a, input, textarea, select, [role="dialog"]')) return;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (isModalOpen()) return;
            if (e.target instanceof Element && e.target.closest('#projectSpatialStage, #altitudeTrack, button, a, input, textarea, select, [role="dialog"]')) return;
            const currentY = e.touches[0].clientY;
            const dy = touchStartY - currentY;
            touchStartY = currentY;
            const rawTouchStep = clamp(dy * 0.00072, -0.028, 0.028);
            setProgressTarget(targetProgress + getDwellAdjustedDelta(rawTouchStep));
        }, { passive: true });

        // Keyboard Arrow / PageUp / PageDown Support (Finer arrow nudge step)
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (activeModal === document.getElementById('projectModal')) closeProjectModal();
                return;
            }
            if (activeModal) {
                trapModalTab(e);
                return;
            }
            if (e.target === document.getElementById('altitudeTrack')) return;
            if (e.target instanceof HTMLElement && e.target.closest('button, a, input, textarea, select, [contenteditable="true"]')) return;

            if (e.key === 'PageDown' || e.key === ' ') {
                e.preventDefault();
                stepForward();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setProgressTarget(targetProgress + 0.042);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setProgressTarget(targetProgress - 0.042);
            } else if (e.key === 'PageUp') {
                e.preventDefault();
                setProgressTarget(targetProgress - 0.09);
            }
        });

        // Right-Edge Altitude Scrubber Drag Interaction
        const altitudeTrack = document.getElementById('altitudeTrack');
        const altitudeThumb = document.getElementById('altitudeThumb');
        function getAltitudeThumbInset() {
            return altitudeThumb.offsetHeight / 2;
        }

        function layoutAltitudeTrack() {
            const trackTravel = Math.max(0, altitudeTrack.clientHeight - altitudeThumb.offsetHeight);
            const thumbInset = getAltitudeThumbInset();
            const labels = document.querySelectorAll('.altitude-labels [data-altitude-stop]');

            altitudeTrack.querySelectorAll('.altitude-tick[data-altitude-stop]').forEach((tick) => {
                const stop = ALTITUDE_STOPS[Number(tick.dataset.altitudeStop)];
                if (!stop) return;
                tick.style.top = `${thumbInset + stop.progress * trackTravel}px`;
            });

            labels.forEach((label) => {
                const stop = ALTITUDE_STOPS[Number(label.dataset.altitudeStop)];
                if (!stop) return;
                label.style.top = `${thumbInset + stop.progress * trackTravel}px`;
            });
        }

        function getAltitudeAtProgress(progress) {
            const upperStopIndex = ALTITUDE_STOPS.findIndex(stop => progress <= stop.progress);
            if (upperStopIndex <= 0) return ALTITUDE_STOPS[0].altitude;

            const lowerStop = ALTITUDE_STOPS[upperStopIndex - 1];
            const upperStop = ALTITUDE_STOPS[upperStopIndex];
            const stopRatio = (progress - lowerStop.progress) / (upperStop.progress - lowerStop.progress);
            return Math.round(lowerStop.altitude + (upperStop.altitude - lowerStop.altitude) * stopRatio);
        }

        layoutAltitudeTrack();
        window.addEventListener('resize', layoutAltitudeTrack);

        function updateScrubberFromEvent(e) {
            const rect = altitudeTrack.getBoundingClientRect();
            const trackTravel = Math.max(1, altitudeTrack.clientHeight - altitudeThumb.offsetHeight);
            const trackContentTop = rect.top + altitudeTrack.clientTop;
            const ratio = (e.clientY - trackContentTop - getAltitudeThumbInset()) / trackTravel;
            setProgressTarget(ratio);
        }

        altitudeTrack.addEventListener('pointerdown', (e) => {
            if (!e.isPrimary || e.button !== 0) return;
            isDraggingScrubber = true;
            altitudeTrack.setPointerCapture(e.pointerId);
            updateScrubberFromEvent(e);
        });
        altitudeTrack.addEventListener('pointermove', (e) => {
            if (isDraggingScrubber && altitudeTrack.hasPointerCapture(e.pointerId)) updateScrubberFromEvent(e);
        });
        const stopScrubberDrag = () => {
            if (!isDraggingScrubber) return;
            isDraggingScrubber = false;
            requestSpatialRender();
        };
        altitudeTrack.addEventListener('pointerup', stopScrubberDrag);
        altitudeTrack.addEventListener('pointercancel', stopScrubberDrag);
        altitudeTrack.addEventListener('lostpointercapture', stopScrubberDrag);
        window.addEventListener('blur', stopScrubberDrag);
        altitudeTrack.addEventListener('keydown', (e) => {
            const increments = {
                ArrowUp: -0.02,
                ArrowDown: 0.02,
                PageUp: -0.09,
                PageDown: 0.09
            };
            if (Object.prototype.hasOwnProperty.call(increments, e.key)) {
                e.preventDefault();
                setProgressTarget(targetProgress + increments[e.key]);
            } else if (e.key === 'Home') {
                e.preventDefault();
                setProgressTarget(1);
            } else if (e.key === 'End') {
                e.preventDefault();
                setProgressTarget(0);
            }
        });

        // Compute Apple-style 3D spatial scene envelope with an expanded Crystal-Clear Dwell Plateau
        function applySceneEnvelope(el, progress, enterStart, peakStart, peakEnd, exitEnd, centerStop) {
            let opacity = 0;
            let scale = 1;
            let translateY = 0;
            let blur = 0;

            // Lock 100% razor-sharp rendering across the expanded plateau and +/- 0.075 around scene center
            const inCrystalPlateau = (progress >= peakStart && progress <= peakEnd) ||
                                     (centerStop !== undefined && Math.abs(progress - centerStop) <= 0.075);

            if (progress < enterStart || progress > exitEnd) {
                opacity = 0;
                el.classList.remove('is-interactive');
            } else if (inCrystalPlateau) {
                opacity = 1;
                scale = 1;
                translateY = 0;
                blur = 0;
                el.classList.add('is-interactive');
            } else if (progress >= enterStart && progress < peakStart) {
                const t = clamp((progress - enterStart) / Math.max(0.001, peakStart - enterStart), 0, 1);
                const ease = t * t * (3 - 2 * t);
                opacity = ease;
                scale = 0.96 + 0.04 * ease;
                translateY = (1 - ease) * 20;
                blur = (1 - ease) > 0.25 ? (1 - ease) * 4.0 : 0;
                if (ease > 0.55) el.classList.add('is-interactive');
                else el.classList.remove('is-interactive');
            } else if (progress > peakEnd && progress <= exitEnd) {
                const t = clamp((progress - peakEnd) / Math.max(0.001, exitEnd - peakEnd), 0, 1);
                const ease = t * t * (3 - 2 * t);
                opacity = 1 - ease;
                scale = 1 + 0.04 * ease;
                translateY = -ease * 20;
                blur = ease > 0.25 ? ease * 4.0 : 0;
                if (ease < 0.45) el.classList.add('is-interactive');
                else el.classList.remove('is-interactive');
            }

            el.inert = !el.classList.contains('is-interactive');
            el.style.opacity = opacity.toFixed(3);
            if (scale === 1 && translateY === 0) {
                // Exact identity transform prevents browser subpixel font blurring
                el.style.transform = 'translate3d(0, 0, 0) scale(1)';
            } else {
                el.style.transform = `translate3d(0, ${Math.round(translateY)}px, 0) scale(${scale.toFixed(3)})`;
            }
            el.style.filter = blur > 0.35 ? `blur(${blur.toFixed(1)}px)` : 'none';
        }

        function updateSpatialScenes(p) {
            // 1. Update Main 5 Scenes with widened Crystal-Clear Dwell Plateaus so each stage holds 2-3 ticks longer
            applySceneEnvelope(document.getElementById('sceneHero'),     p, -0.10, 0.00, 0.115, 0.155, 0.00);
            applySceneEnvelope(document.getElementById('sceneProjects'), p,  0.12, 0.155, 0.315, 0.355, 0.22);
            applySceneEnvelope(document.getElementById('sceneWork'),     p,  0.325, 0.365, 0.725, 0.765, 0.55);
            applySceneEnvelope(document.getElementById('sceneAbout'),    p,  0.735, 0.77, 0.875, 0.915, 0.82);
            applySceneEnvelope(document.getElementById('sceneContact'),  p,  0.885, 0.925, 1.05, 1.15, 1.00);
            // Follow the requested stop rather than the lagging camera during smooth navigation.
            updateAboutTabForProgress(targetProgress);

            // 2. Update the two internship cards inside Scene 2 (0.365 -> 0.725)
            const centers = [0.42, 0.60];
            const activeWorkIdx = centers.reduce((closestIdx, center, idx) =>
                Math.abs(p - center) < Math.abs(p - centers[closestIdx]) ? idx : closestIdx, 0);
            const showSingleWorkCard = window.matchMedia('(max-width: 639px)').matches;
            const isWorkSceneActive = p >= 0.355 && p <= 0.74;

            centers.forEach((center, idx) => {
                const slide = document.getElementById(`workSlide_${idx}`);
                if (!slide) return;
                const diff = (p - center) / 0.18;
                const absDiff = Math.abs(diff);
                const isCurrentWorkCard = !showSingleWorkCard || idx === activeWorkIdx;

                if (absDiff > 1.35) {
                    slide.style.opacity = '0';
                    slide.classList.remove('is-active');
                } else if (absDiff <= 0.44) {
                    // Expanded crystal-clear hold plateau for active experience card (+1-2 extra wheel ticks)
                    slide.style.opacity = '1';
                    slide.style.transform = 'translate3d(0, 0, 0) scale(1)';
                    slide.style.filter = 'none';
                    if (isWorkSceneActive && isCurrentWorkCard) slide.classList.add('is-active');
                    else slide.classList.remove('is-active');
                } else {
                    const crossDist = (absDiff - 0.44) / 0.56;
                    const opacity = clamp(1 - Math.pow(crossDist, 1.35), 0, 1);
                    const sign = diff >= 0 ? 1 : -1;
                    const scale = 1 - sign * crossDist * 0.045;
                    const translateY = -sign * crossDist * 28;
                    const blur = Math.max(0, crossDist * 4.0);

                    slide.style.opacity = opacity.toFixed(3);
                    slide.style.transform = `translate3d(0, ${Math.round(translateY)}px, 0) scale(${scale.toFixed(3)})`;
                    slide.style.filter = blur > 0.35 ? `blur(${blur.toFixed(1)}px)` : 'none';

                    if (absDiff < 0.52 && isWorkSceneActive && isCurrentWorkCard) {
                        slide.classList.add('is-active');
                    } else {
                        slide.classList.remove('is-active');
                    }
                }
                slide.inert = !slide.classList.contains('is-active');
            });

            // Highlight active work stage dot
            document.querySelectorAll('.work-dot-btn').forEach((btn, idx) => {
                if (idx === activeWorkIdx) {
                    btn.className = 'work-dot-btn min-h-11 px-3 py-1 rounded-full font-mono text-xs bg-[var(--text-primary)] text-[var(--bg-primary)] transition-all';
                } else {
                    btn.className = 'work-dot-btn min-h-11 px-3 py-1 rounded-full font-mono text-xs border hairline-border text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all';
                }
            });

            // 3. Highlight Top Navigation Pill across all 5 stops
            const previousSceneIdx = activeSceneIdx;
            activeSceneIdx = 0;
            if (p >= 0.905) activeSceneIdx = 4;
            else if (p >= 0.745) activeSceneIdx = 3;
            else if (p >= 0.345) activeSceneIdx = 2;
            else if (p >= 0.135) activeSceneIdx = 1;
            if (activeSceneIdx !== previousSceneIdx) {
                document.querySelectorAll('.spatial-scene')[activeSceneIdx].scrollTop = 0;
            }

            document.querySelectorAll('.nav-pill-btn').forEach((btn, idx) => {
                if (idx === activeSceneIdx) {
                    btn.className = 'nav-pill-btn min-h-11 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-[var(--text-primary)] text-[var(--bg-primary)] transition-all whitespace-nowrap';
                } else {
                    btn.className = 'nav-pill-btn min-h-11 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all whitespace-nowrap';
                }
            });

            updateScrubberVisibility();

            // 4. Interpolate altitude through the labeled stops so track, ticks, and readout share one scale.
            const currentAltitude = getAltitudeAtProgress(p);

            const signPrefix = currentAltitude > 0 ? '+' : '';
            const formattedAlt = `${signPrefix}${currentAltitude.toLocaleString()}m`;
            document.getElementById('hudElevation').textContent = formattedAlt;
            document.getElementById('scrubberReadout').textContent = formattedAlt;
            const altitudeTrack = document.getElementById('altitudeTrack');
            altitudeTrack.setAttribute('aria-valuenow', String(currentAltitude));
            altitudeTrack.setAttribute('aria-valuetext', `${currentAltitude.toLocaleString()} meters`);

            // Update Zone & Atmospheric / Hydrostatic Pressure Readouts
            const zoneBadge = document.getElementById('scrubberZoneBadge');
            const pressureEl = document.getElementById('scrubberPressure');
            const hudModeBadge = document.getElementById('hudModeBadge');

            if (currentAltitude > 2350) {
                zoneBadge.textContent = 'STRATOSPHERE';
                const hpa = Math.round(1013 * Math.exp(-currentAltitude / 8400));
                pressureEl.textContent = `${hpa} hPa · CLOUD MIST`;
                if (hudModeBadge) hudModeBadge.textContent = 'ATMOS';
            } else if (currentAltitude > 1650) {
                zoneBadge.textContent = 'SUMMIT PEAKS';
                const hpa = Math.round(1013 * Math.exp(-currentAltitude / 8400));
                pressureEl.textContent = `${hpa} hPa · ALPINE RIDGE`;
                if (hudModeBadge) hudModeBadge.textContent = 'SUMMIT';
            } else if (currentAltitude > 180) {
                zoneBadge.textContent = 'TERRACED LAND';
                const hpa = Math.round(1013 * Math.exp(-currentAltitude / 8400));
                pressureEl.textContent = `${hpa} hPa · LAND & VALLEY`;
                if (hudModeBadge) hudModeBadge.textContent = 'LAND';
            } else if (currentAltitude >= -120) {
                zoneBadge.textContent = 'TIDAL HORIZON';
                pressureEl.textContent = `1.0 ATM · WAVE SURFACE`;
                if (hudModeBadge) hudModeBadge.textContent = 'SURF';
            } else {
                zoneBadge.textContent = 'ABYSSAL SEABED';
                const atm = (1 + Math.abs(currentAltitude) / 10).toFixed(1);
                pressureEl.textContent = `${atm} ATM · BATHYMETRY`;
                if (hudModeBadge) hudModeBadge.textContent = 'SONAR';
            }

            const trackTravel = Math.max(0, altitudeTrack.clientHeight - altitudeThumb.offsetHeight);
            altitudeThumb.style.transform = `translate(-50%, ${p * trackTravel}px)`;

            // 5. Update Bottom Chapter Telemetry across all 5 stages
            const chapters = [
                { num: '01 / 05', name: 'CLOUD SUMMIT (+2,840M) · AMMAR SYAHANSYAH', hint: 'Descend to Summit Peaks · My Projects (+2,050m)', arrow: '↓' },
                { num: '02 / 05', name: 'SUMMIT PEAKS (+2,050M) · SELECTED PROJECTS (7)', hint: 'Descend to Terraced Land · Experience (+1,180m)', arrow: '↓' },
                { num: '03 / 05', name: `LAND & VALLEY (+1,180M) · ${projectsData[activeWorkIdx].title.toUpperCase()}`, hint: 'Continue descending toward Sea Level (0m)', arrow: '↓' },
                { num: '04 / 05', name: 'SEA LEVEL (0M MSL) · UNIKL & GA4 CERTIFICATION', hint: 'Dive below waves to Seabed (-1,200m)', arrow: '↓' },
                { num: '05 / 05', name: 'ABYSSAL SEABED (-1,200M) · SONAR & DOSSIER', hint: 'Ascend back to Cloud Summit (+2,840m)', arrow: '↑' }
            ];
            const activeChap = chapters[activeSceneIdx];
            activeChapterHint = activeChap.hint;
            document.getElementById('chapterIndex').textContent = activeChap.num;
            document.getElementById('chapterName').textContent = activeChap.name;
            document.getElementById('scrollHintLabel').textContent = activeChap.hint;
            document.getElementById('nextStageBtn').setAttribute('aria-label', activeChap.hint);
            document.getElementById('scrollHintArrow').textContent = activeChap.arrow;

            // 6. Dynamically tint background & surface palette from Warm Alpine Paper -> Deep Abyssal Ocean
            updateEnvironmentPalette(p);
        }

        /* ==========================================================================
           3. MODALS & UTILITIES
           ========================================================================== */
        function openProjectModal(id) {
            const p = projectsData.find(item => item.id === id);
            if (!p) return;
            stopProjectCardVideos();
            document.getElementById('modalMeta').textContent = `${p.dates.toUpperCase()} — ${p.role.toUpperCase()}`;
            document.getElementById('modalTitle').textContent = p.title;
            const summaryEl = document.getElementById('modalSummary');
            summaryEl.style.whiteSpace = 'pre-line';
            summaryEl.textContent = `${p.sentence}\n\n${p.details}`;
            document.getElementById('modalCoords').textContent = p.coords;
            const modalArtwork = document.getElementById('modalArtwork');
            modalArtwork.innerHTML = createProjectArtwork(p);
            modalArtwork.classList.remove('hidden');
            document.getElementById('modalTags').innerHTML = p.tags.map(t =>
                `<span class="px-2.5 py-1 rounded-full border hairline-border text-[11px]">${t}</span>`
            ).join('');
            setProjectModalLinks(p);
            setProjectModalMedia(p);

            const modal = document.getElementById('projectModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            activateModal(modal);
        }

        function closeProjectModal() {
            const modal = document.getElementById('projectModal');
            if (activeModal !== modal) return;
            setProjectModalMedia(null);
            closeActiveModal();
            playProjectCardVideos();
        }

        function toggleTheme() {
            const html = document.documentElement;
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            document.getElementById('sunIcon').classList.toggle('hidden', !isDark);
            document.getElementById('moonIcon').classList.toggle('hidden', isDark);
            document.querySelector('[aria-label="Toggle color theme"]')?.setAttribute('aria-pressed', String(isDark));
            updateEnvironmentPalette(currentProgress);
            requestSpatialRender();
        }

        function toggleMotion() {
            isMotionPaused = !isMotionPaused;
            lastSpatialFrameTime = 0;
            syncMotionControl();
            if (isMotionPaused) {
                stopProjectCardVideos();
                updateCarouselStatusHUD(true, 'MOTION PAUSED');
            } else {
                playProjectCardVideos();
                updateCarouselStatusHUD(isProjectCarouselPaused, 'CARD ENLARGED');
            }
            requestSpatialRender();
        }

        function syncMotionControl() {
            document.documentElement.classList.toggle('motion-reduced', isMotionPaused);
            const button = document.getElementById('motionToggleBtn');
            button.setAttribute('aria-pressed', String(isMotionPaused));
            button.setAttribute('aria-label', isMotionPaused ? 'Resume ambient motion' : 'Pause ambient motion');
            button.title = isMotionPaused ? 'Resume ambient motion' : 'Pause ambient motion';
            document.getElementById('motionPauseIcon').classList.toggle('hidden', isMotionPaused);
            document.getElementById('motionPlayIcon').classList.toggle('hidden', !isMotionPaused);
        }

        document.querySelectorAll('details[data-collapse-on-mobile]').forEach(disclosure => {
            disclosure.open = !window.matchMedia('(max-width: 899px)').matches;
        });

        function copyEmail() {
            const email = document.getElementById('contactEmailText').textContent;
            const temp = document.createElement('textarea');
            temp.value = email;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand('copy');
            document.body.removeChild(temp);

            const badge = document.getElementById('copyBadge');
            badge.textContent = 'Copied ✓';
            setTimeout(() => { badge.textContent = 'Copy Email'; }, 2000);
        }

        /* ==========================================================================
           4. CLOUD-TO-SEABED ATMOSPHERIC & BATHYMETRIC ANIMATION ENGINE
           ========================================================================== */
        const topoCanvas = document.getElementById('topoCanvas');
        const topoCtx = topoCanvas.getContext('2d');

        let mouseX = window.innerWidth * 0.5;
        let mouseY = window.innerHeight * 0.5;
        let smoothX = mouseX;
        let smoothY = mouseY;
        let time = 0;

        // Cloud layer actors (clearly visible in both Light & Dark Mode at +2,840m -> +800m)
        const cloudWisps = Array.from({ length: 16 }, (_, i) => ({
            xRatio: (i * 0.17) % 1,
            yRatio: 0.06 + ((i * 0.12) % 0.78),
            rx: 195 + (i % 4) * 90,
            ry: 46 + (i % 3) * 22,
            speed: (0.014 + (i % 5) * 0.005) * (i % 2 === 0 ? 1 : -1),
            phase: i * 1.6
        }));

        // Marine snow / micro-bubbles & atmospheric wind motes
        const envParticles = Array.from({ length: 48 }, (_, i) => ({
            x: Math.random(),
            y: Math.random(),
            r: 1.0 + (i % 3) * 0.85,
            speedY: 0.00035 + (i % 5) * 0.00018,
            speedX: 0.00025 + (i % 4) * 0.00012,
            phase: Math.random() * Math.PI * 2
        }));

        // Hydrographic Sonar Pulse Rings (for underwater/seabed depth)
        const sonarPulses = [];

        function triggerManualSonarPing() {
            sonarPulses.push({
                x: topoCanvas.width * 0.5,
                y: topoCanvas.height * 0.5,
                radius: 8,
                maxRadius: Math.max(topoCanvas.width, topoCanvas.height) * 0.65,
                alpha: 0.85
            });
            requestSpatialRender();
        }

        window.addEventListener('click', (e) => {
            if (currentProgress > 0.68 && !isModalOpen()) {
                sonarPulses.push({
                    x: e.clientX,
                    y: e.clientY,
                    radius: 6,
                    maxRadius: 360,
                    alpha: 0.65
                });
            }
        });

        function lerpNumber(a, b, t) {
            return a + (b - a) * t;
        }

        function lerpRGB(c1, c2, t) {
            return [
                Math.round(lerpNumber(c1[0], c2[0], t)),
                Math.round(lerpNumber(c1[1], c2[1], t)),
                Math.round(lerpNumber(c1[2], c2[2], t))
            ];
        }

        function relativeLuminance(rgb) {
            const linear = rgb.map(channel => {
                const normalized = channel / 255;
                return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
            });
            return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
        }

        function contrastRatio(first, second) {
            const firstLuminance = relativeLuminance(first);
            const secondLuminance = relativeLuminance(second);
            return (Math.max(firstLuminance, secondLuminance) + 0.05) /
                (Math.min(firstLuminance, secondLuminance) + 0.05);
        }

        function contrastSafeColor(foreground, background) {
            const foregroundRGB = foreground.match(/[0-9A-Fa-f]{2}/g).map(value => parseInt(value, 16));
            const target = relativeLuminance(background) > 0.179 ? [0, 0, 0] : [255, 255, 255];
            if (contrastRatio(foregroundRGB, background) >= 4.5) return foreground;

            for (let step = 1; step <= 100; step++) {
                const amount = step / 100;
                const adjusted = foregroundRGB.map((channel, index) =>
                    Math.round(channel + (target[index] - channel) * amount)
                );
                if (contrastRatio(adjusted, background) >= 4.5) {
                    return `#${adjusted.map(channel => channel.toString(16).padStart(2, '0')).join('')}`;
                }
            }
            return relativeLuminance(background) > 0.179 ? '#000000' : '#FFFFFF';
        }

        function contrastForeground(rgb) {
            return relativeLuminance(rgb) > 0.179 ? '#000000' : '#FFFFFF';
        }

        // High-contrast, crystal-clear theme tokens across Air, Sea Level (0m MSL), and Abyssal Seabed (-1,200m)
        function updateEnvironmentPalette(p) {
            const isDark = document.documentElement.classList.contains('dark');
            // Submersion begins smoothly only after passing Sea Level (p > 0.83) so Sea Level UI stays 100% high-contrast
            const deepDive = clamp((p - 0.83) / 0.15, 0, 1);
            const isSeaLevelZone = p >= 0.70 && p <= 0.88;
            const root = document.documentElement.style;

            if (!isDark) {
                // Light Mode: Crisp Alpine Paper (#F6F4F0) through 0m Sea Level -> Deep Abyssal Trench (#071726) at -1,200m
                const bg = lerpRGB([244, 243, 238], [7, 23, 38], deepDive);
                const accent = isSeaLevelZone
                    ? [0, 118, 182] // High-contrast hydrographic cerulean at 0m Sea Level
                    : lerpRGB([255, 79, 0], [0, 210, 255], deepDive);
                const lightBackground = relativeLuminance(bg) > 0.179;
                const accentIsCool = isSeaLevelZone || deepDive > 0.2;
                const backgroundLuminance = relativeLuminance(bg);

                root.setProperty('--bg-primary', `rgb(${bg[0]}, ${bg[1]}, ${bg[2]})`);
                root.setProperty('--text-primary', backgroundLuminance > 0.22
                    ? '#141413'
                    : (lightBackground ? '#000000' : '#FFFFFF'));
                root.setProperty('--text-muted', contrastSafeColor(
                    lightBackground
                        ? (backgroundLuminance > 0.5 ? '#454B50' : '#000000')
                        : '#9CC0D6',
                    bg
                ));
                root.setProperty('--accent', `rgb(${accent[0]}, ${accent[1]}, ${accent[2]})`);
                root.setProperty('--accent-text', contrastSafeColor(
                    lightBackground
                        ? (backgroundLuminance > 0.6 ? (accentIsCool ? '#00527D' : '#A93600') : '#000000')
                        : '#7FEAFF',
                    bg
                ));
                root.setProperty('--accent-on', contrastForeground(accent));

                if (!lightBackground) {
                    // Opaque high-contrast deep ocean cards (-1,200m)
                    root.setProperty('--bg-surface', `rgba(10, 28, 44, 0.90)`);
                    root.setProperty('--bg-card', `#0C1B2BEB`);
                    root.setProperty('--border-color', `rgba(130, 210, 255, 0.24)`);
                } else {
                    // Solid high-readability white frosted cards (#FFFFFFEB) at Clouds, Ridge & Sea Level
                    root.setProperty('--bg-surface', `rgba(255, 255, 255, 0.90)`);
                    root.setProperty('--bg-card', `#FFFFFFEB`);
                    root.setProperty('--border-color', isSeaLevelZone ? `rgba(0, 118, 182, 0.22)` : `rgba(20, 20, 19, 0.14)`);
                }
            } else {
                // Dark Mode: Obsidian Survey (#0E100F) -> Deep Mariana Trench (#040C14)
                const bg = lerpRGB([14, 16, 15], [4, 12, 20], deepDive);
                const accent = (isSeaLevelZone || deepDive > 0.3)
                    ? [0, 215, 255]
                    : [255, 94, 26];
                const accentIsCool = isSeaLevelZone || deepDive > 0.3;

                root.setProperty('--bg-primary', `rgb(${bg[0]}, ${bg[1]}, ${bg[2]})`);
                root.setProperty('--text-primary', `#F4F7F9`);
                root.setProperty('--text-muted', (isSeaLevelZone || deepDive > 0.3) ? `#9CC0D6` : `#98A29D`);
                root.setProperty('--accent', `rgb(${accent[0]}, ${accent[1]}, ${accent[2]})`);
                root.setProperty('--accent-text', accentIsCool ? '#7FEAFF' : '#FF9870');
                root.setProperty('--accent-on', contrastForeground(accent));
                root.setProperty('--bg-surface', `rgba(10, 18, 26, 0.90)`);
                root.setProperty('--bg-card', `#0C141CEB`);
                root.setProperty('--border-color', (isSeaLevelZone || deepDive > 0.3) ? `rgba(0, 215, 255, 0.22)` : `rgba(242, 244, 243, 0.15)`);
            }
        }

        function resizeCanvas() {
            topoCanvas.width = window.innerWidth;
            topoCanvas.height = window.innerHeight;
            requestSpatialRender();
        }
        window.addEventListener('resize', resizeCanvas);

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            const lat = (3.139 + (0.5 - e.clientY / window.innerHeight) * 0.15).toFixed(3);
            const coordsEl = document.getElementById('hudCoords');
            if (coordsEl) coordsEl.textContent = `${lat}° N`;
        });

        // Elevation & Bathymetric field morphs with camera depth (currentProgress)
        function sampleField(x, y, t, depthProgress) {
            const zoomScale = 0.0012 + depthProgress * 0.00075;
            const nx = (x - topoCanvas.width * 0.5) * zoomScale;
            const ny = (y - topoCanvas.height * 0.5) * zoomScale;
            const phase = depthProgress * 4.5;

            let v = Math.sin(nx * 2.1 + t + phase) * Math.cos(ny * 1.9 - t * 0.6 + phase * 0.7) * 0.58
                  + Math.cos((nx - ny) * 2.4 + t * 0.4 - phase) * 0.28;

            const dx = x - smoothX;
            const dy = y - smoothY;
            const distSq = dx * dx + dy * dy;
            const radiusSq = 300 * 300;
            if (distSq < radiusSq * 2) {
                // Positive peak in air, bathymetric depression trench underwater
                const polarity = depthProgress > 0.72 ? -0.45 : 0.42;
                v += Math.exp(-distSq / radiusSq) * polarity;
            }
            return v;
        }

        // Draw volumetric clouds with distinct Light-Mode Alpine Sky tinting, slate-blue undersides, warm sunlit rims, and vapour contour bands
        function drawCloudLayer(ctx, w, h, p, isDark) {
            const cloudVisibility = clamp(1 - (p / 0.46), 0, 1);
            if (cloudVisibility <= 0.01) return;

            ctx.save();

            // 1. Subtle Atmospheric Alpine Sky Dome at the top of the viewport in Light Mode so white/silver clouds pop clearly
            if (!isDark) {
                const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.78);
                skyGrad.addColorStop(0, `rgba(182, 206, 228, ${0.52 * cloudVisibility})`);
                skyGrad.addColorStop(0.5, `rgba(210, 224, 236, ${0.28 * cloudVisibility})`);
                skyGrad.addColorStop(1, 'rgba(246, 244, 240, 0)');
                ctx.fillStyle = skyGrad;
                ctx.fillRect(0, 0, w, h * 0.78);
            } else {
                const nightSkyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.7);
                nightSkyGrad.addColorStop(0, `rgba(28, 46, 64, ${0.42 * cloudVisibility})`);
                nightSkyGrad.addColorStop(1, 'rgba(14, 16, 15, 0)');
                ctx.fillStyle = nightSkyGrad;
                ctx.fillRect(0, 0, w, h * 0.7);
            }

            // 2. Render Multi-Layered Volumetric Cloud Banks (Shadow Underside + Sunlit Billow + Crisp Vapour Contour Rim)
            cloudWisps.forEach((cloud, idx) => {
                const driftX = ((cloud.xRatio * w + time * 1150 * cloud.speed) % (w + cloud.rx * 2.2));
                const cx = driftX < -cloud.rx ? driftX + w + cloud.rx * 2.2 : driftX;
                const verticalParallax = -p * h * 1.1;
                const cy = cloud.yRatio * h + verticalParallax + Math.sin(time * 2 + cloud.phase) * 12;

                if (cy < -cloud.ry * 2.5 || cy > h + cloud.ry * 2.5) return;

                if (!isDark) {
                    // (a) Soft Slate-Cerulean Cloud Underside Shadow (gives immediate depth on light paper)
                    const shadowGrad = ctx.createRadialGradient(
                        cx, cy + cloud.ry * 0.28, cloud.ry * 0.1,
                        cx, cy + cloud.ry * 0.22, cloud.rx * 1.02
                    );
                    shadowGrad.addColorStop(0, `rgba(116, 142, 168, ${0.34 * cloudVisibility})`);
                    shadowGrad.addColorStop(0.55, `rgba(148, 170, 192, ${0.18 * cloudVisibility})`);
                    shadowGrad.addColorStop(1, 'rgba(148, 170, 192, 0)');
                    ctx.fillStyle = shadowGrad;
                    ctx.beginPath();
                    ctx.ellipse(cx, cy + cloud.ry * 0.24, cloud.rx * 1.02, cloud.ry * 0.88, 0, 0, Math.PI * 2);
                    ctx.fill();

                    // (b) Bright Sunlit Cumulus Crown with Warm Ivory/Gold Highlight
                    const crownGrad = ctx.createRadialGradient(
                        cx - cloud.rx * 0.15, cy - cloud.ry * 0.2, cloud.ry * 0.08,
                        cx, cy, cloud.rx * 0.92
                    );
                    crownGrad.addColorStop(0, `rgba(255, 255, 255, ${0.92 * cloudVisibility})`);
                    crownGrad.addColorStop(0.5, `rgba(252, 249, 242, ${0.68 * cloudVisibility})`);
                    crownGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    ctx.fillStyle = crownGrad;
                    ctx.beginPath();
                    ctx.ellipse(cx, cy, cloud.rx * 0.92, cloud.ry * 0.82, 0, 0, Math.PI * 2);
                    ctx.fill();

                    // (c) Cartographic Isobar Vapour Contour Ring around Cloud Mass
                    ctx.beginPath();
                    ctx.ellipse(cx, cy, cloud.rx * 0.78, cloud.ry * 0.64, 0, 0, Math.PI * 2);
                    ctx.strokeStyle = idx % 3 === 0
                        ? `rgba(255, 79, 0, ${0.18 * cloudVisibility})`
                        : `rgba(82, 108, 134, ${0.22 * cloudVisibility})`;
                    ctx.lineWidth = 1;
                    ctx.setLineDash(idx % 2 === 0 ? [5, 5] : []);
                    ctx.stroke();
                    ctx.setLineDash([]);
                } else {
                    // Dark Mode Volumetric Silver-Cyan Cloud Mass
                    const darkGrad = ctx.createRadialGradient(cx, cy, cloud.ry * 0.1, cx, cy, cloud.rx);
                    const alpha = (0.18 + (idx % 3) * 0.04) * cloudVisibility;
                    darkGrad.addColorStop(0, `rgba(220, 235, 248, ${alpha * 0.72})`);
                    darkGrad.addColorStop(0.55, `rgba(130, 165, 190, ${alpha * 0.34})`);
                    darkGrad.addColorStop(1, 'rgba(14, 16, 15, 0)');
                    ctx.fillStyle = darkGrad;
                    ctx.beginPath();
                    ctx.ellipse(cx, cy, cloud.rx, cloud.ry, 0, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.beginPath();
                    ctx.ellipse(cx, cy, cloud.rx * 0.76, cloud.ry * 0.62, 0, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(200, 225, 245, ${0.14 * cloudVisibility})`;
                    ctx.lineWidth = 0.9;
                    ctx.stroke();
                }
            });
            ctx.restore();
        }

        // STAGE 1 (+2,050m PROJECTS): Illustrated Alpine Summit Peaks, Faceted Ridges, Snow Caps & Survey Beacons
        function drawSummitPeaksBackground(ctx, w, h, p, isDark) {
            // Active across Stage 0 -> Stage 1 (peaks centered at p = 0.20, fading out as land takes over around p = 0.42)
            let vis = 0;
            if (p <= 0.20) {
                vis = clamp((p + 0.04) / 0.20, 0, 1);
            } else {
                vis = clamp(1 - (p - 0.20) / 0.22, 0, 1);
            }
            if (vis <= 0.01) return;

            ctx.save();
            const parallaxY = (0.20 - p) * h * 0.95;
            const mouseShiftX = (smoothX / Math.max(1, w) - 0.5) * 28;

            // 1. Distant Back-Range Alpine Massif Silhouette
            const backPeaks = [
                { x: 0.00, y: 0.82 },
                { x: 0.09, y: 0.52 },
                { x: 0.18, y: 0.66 },
                { x: 0.29, y: 0.36 },
                { x: 0.41, y: 0.58 },
                { x: 0.54, y: 0.44 },
                { x: 0.67, y: 0.63 },
                { x: 0.79, y: 0.33 },
                { x: 0.91, y: 0.55 },
                { x: 1.00, y: 0.74 }
            ];

            ctx.beginPath();
            backPeaks.forEach((pt, idx) => {
                const px = pt.x * w + mouseShiftX * 0.35;
                const py = pt.y * h + parallaxY * 0.65;
                if (idx === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            });
            ctx.lineTo(w, h);
            ctx.lineTo(0, h);
            ctx.closePath();

            const backGrad = ctx.createLinearGradient(0, h * 0.30 + parallaxY * 0.65, 0, h);
            if (!isDark) {
                backGrad.addColorStop(0, `rgba(176, 190, 206, ${0.36 * vis})`);
                backGrad.addColorStop(0.6, `rgba(214, 218, 222, ${0.24 * vis})`);
                backGrad.addColorStop(1, `rgba(246, 244, 240, 0)`);
            } else {
                backGrad.addColorStop(0, `rgba(38, 52, 70, ${0.46 * vis})`);
                backGrad.addColorStop(0.6, `rgba(22, 30, 40, ${0.28 * vis})`);
                backGrad.addColorStop(1, `rgba(14, 16, 15, 0)`);
            }
            ctx.fillStyle = backGrad;
            ctx.fill();

            ctx.strokeStyle = !isDark
                ? `rgba(90, 108, 128, ${0.28 * vis})`
                : `rgba(140, 175, 210, ${0.22 * vis})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // 2. Primary Foreground Faceted Summit Range with Sunlit & Shadowed Slopes + Snow Crowns
            const mainRange = [
                { x: -0.02, y: 0.88, ridgeX: 0.04, baseY: 0.98 },
                { x: 0.14,  y: 0.42, ridgeX: 0.17, baseY: 0.96, label: 'PEAK α · +2,410M', snow: true },
                { x: 0.26,  y: 0.67, ridgeX: 0.28, baseY: 0.96 },
                { x: 0.39,  y: 0.48, ridgeX: 0.42, baseY: 0.96, label: 'SUMMIT RIDGE · +2,050M', snow: true },
                { x: 0.52,  y: 0.72, ridgeX: 0.53, baseY: 0.98 },
                { x: 0.65,  y: 0.51, ridgeX: 0.68, baseY: 0.96, snow: true },
                { x: 0.76,  y: 0.69, ridgeX: 0.78, baseY: 0.98 },
                { x: 0.88,  y: 0.38, ridgeX: 0.91, baseY: 0.96, label: 'PEAK β · +2,280M', snow: true },
                { x: 1.02,  y: 0.84, ridgeX: 1.04, baseY: 0.98 }
            ];

            // Draw faceted left (sunlit) and right (shadowed) geological triangles per peak
            for (let i = 1; i < mainRange.length - 1; i += 2) {
                const leftVal = mainRange[i - 1];
                const peak = mainRange[i];
                const rightVal = mainRange[i + 1];

                const lx = leftVal.x * w - mouseShiftX * 0.55;
                const ly = leftVal.y * h + parallaxY;
                const px = peak.x * w - mouseShiftX * 0.55;
                const py = peak.y * h + parallaxY;
                const rx = rightVal.x * w - mouseShiftX * 0.55;
                const ry = rightVal.y * h + parallaxY;
                const bx = peak.ridgeX * w - mouseShiftX * 0.35;
                const by = peak.baseY * h + parallaxY;

                // Left Sunlit Slope Facet
                ctx.beginPath();
                ctx.moveTo(lx, ly);
                ctx.lineTo(px, py);
                ctx.lineTo(bx, by);
                ctx.closePath();
                ctx.fillStyle = !isDark
                    ? `rgba(232, 229, 222, ${0.58 * vis})`
                    : `rgba(34, 42, 52, ${0.52 * vis})`;
                ctx.fill();

                // Right Shadowed Slope Facet
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(rx, ry);
                ctx.lineTo(bx, by);
                ctx.closePath();
                ctx.fillStyle = !isDark
                    ? `rgba(168, 178, 190, ${0.42 * vis})`
                    : `rgba(18, 24, 32, ${0.62 * vis})`;
                ctx.fill();

                // Snow-Capped Crown on Summit Peaks
                if (peak.snow) {
                    const snowFactor = 0.28;
                    const slx = px + (lx - px) * snowFactor;
                    const sly = py + (ly - py) * snowFactor;
                    const srx = px + (rx - px) * snowFactor;
                    const sry = py + (ry - py) * snowFactor;
                    const sbx = px + (bx - px) * (snowFactor * 0.82);
                    const sby = py + (by - py) * (snowFactor * 0.82);

                    // Left sunlit snow cap
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(slx, sly);
                    ctx.lineTo(sbx, sby);
                    ctx.closePath();
                    ctx.fillStyle = !isDark
                        ? `rgba(255, 255, 255, ${0.92 * vis})`
                        : `rgba(220, 236, 250, ${0.38 * vis})`;
                    ctx.fill();

                    // Right cool-shadowed snow cap
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(srx, sry);
                    ctx.lineTo(sbx, sby);
                    ctx.closePath();
                    ctx.fillStyle = !isDark
                        ? `rgba(216, 228, 242, ${0.78 * vis})`
                        : `rgba(145, 180, 215, ${0.25 * vis})`;
                    ctx.fill();
                }

                // Geological Spine & Topographic Hatching Lines along the shadow facet
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(bx, by);
                ctx.strokeStyle = !isDark
                    ? `rgba(255, 79, 0, ${0.34 * vis})`
                    : `rgba(255, 94, 26, ${0.38 * vis})`;
                ctx.lineWidth = 1.15;
                ctx.stroke();

                for (let hStep = 1; hStep <= 4; hStep++) {
                    const t = hStep / 5;
                    const hx1 = px + (bx - px) * t;
                    const hy1 = py + (by - py) * t;
                    const hx2 = px + (rx - px) * t;
                    const hy2 = py + (ry - py) * t;
                    ctx.beginPath();
                    ctx.moveTo(hx1, hy1);
                    ctx.lineTo(hx2, hy2);
                    ctx.strokeStyle = !isDark
                        ? `rgba(40, 48, 58, ${0.14 * vis})`
                        : `rgba(200, 220, 240, ${0.12 * vis})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }

                // Triangulation Survey Beacon & Elevation Callout Flag on Summit Peaks
                if (peak.label && py > 54 && py < h - 60) {
                    // Vertical survey mast
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(px, py - 22);
                    ctx.strokeStyle = !isDark
                        ? `rgba(255, 79, 0, ${0.85 * vis})`
                        : `rgba(255, 94, 26, ${0.90 * vis})`;
                    ctx.lineWidth = 1.25;
                    ctx.stroke();

                    // Survey triangulation diamond marker
                    ctx.beginPath();
                    ctx.arc(px, py, 3.2, 0, Math.PI * 2);
                    ctx.fillStyle = !isDark
                        ? `rgba(255, 79, 0, ${0.92 * vis})`
                        : `rgba(255, 94, 26, ${0.95 * vis})`;
                    ctx.fill();

                    ctx.font = '500 9.5px "JetBrains Mono", monospace';
                    ctx.fillStyle = !isDark
                        ? `rgba(20, 20, 19, ${0.78 * vis})`
                        : `rgba(242, 244, 243, ${0.82 * vis})`;
                    ctx.fillText(`▲ ${peak.label}`, px + 6, py - 14);
                }
            }

            // Continuous Crisp Ridge Silhouette Stroke
            ctx.beginPath();
            mainRange.forEach((pt, idx) => {
                const px = pt.x * w - mouseShiftX * 0.55;
                const py = pt.y * h + parallaxY;
                if (idx === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            });
            ctx.strokeStyle = !isDark
                ? `rgba(20, 20, 19, ${0.42 * vis})`
                : `rgba(242, 244, 243, ${0.36 * vis})`;
            ctx.lineWidth = 1.4;
            ctx.stroke();

            // 3. Drifting Summit Ridge Mist Band weaving between the peaks
            const mistY = h * 0.64 + parallaxY * 0.85;
            const mistGrad = ctx.createLinearGradient(0, mistY - 55, 0, mistY + 75);
            if (!isDark) {
                mistGrad.addColorStop(0, 'rgba(246, 244, 240, 0)');
                mistGrad.addColorStop(0.5, `rgba(246, 244, 240, ${0.65 * vis})`);
                mistGrad.addColorStop(1, 'rgba(246, 244, 240, 0)');
            } else {
                mistGrad.addColorStop(0, 'rgba(14, 16, 15, 0)');
                mistGrad.addColorStop(0.5, `rgba(20, 28, 36, ${0.58 * vis})`);
                mistGrad.addColorStop(1, 'rgba(14, 16, 15, 0)');
            }
            ctx.fillStyle = mistGrad;
            ctx.fillRect(0, mistY - 55, w, 130);

            ctx.restore();
        }

        // STAGE 2 (+1,180m EXPERIENCE): Illustrated Land & Terraced Valley, Conifer Timberline & Winding River
        function drawLandValleyBackground(ctx, w, h, p, isDark) {
            // Active across the Experience stage (p = 0.28 -> 0.76, plateauing across 0.38 -> 0.68)
            let vis = 0;
            if (p < 0.26 || p > 0.78) {
                vis = 0;
            } else if (p >= 0.36 && p <= 0.68) {
                vis = 1;
            } else if (p < 0.36) {
                vis = clamp((p - 0.26) / 0.10, 0, 1);
            } else {
                vis = clamp(1 - (p - 0.68) / 0.10, 0, 1);
            }
            if (vis <= 0.01) return;

            ctx.save();
            const parallaxY = (0.52 - p) * h * 0.65;
            const mouseShiftX = (smoothX / Math.max(1, w) - 0.5) * 22;

            // 1. Three Layered Rolling Terraced Land Hills (Highland Ochre, Sage Timberline, Terracotta Valley Floor)
            const landLayers = [
                {
                    baseY: 0.64,
                    amp1: 34, freq1: 0.0022,
                    amp2: 18, freq2: 0.0051,
                    phaseOffset: 0.4,
                    lightFillTop: [212, 220, 204],
                    lightFillBot: [236, 234, 224],
                    darkFillTop:  [22, 38, 32],
                    darkFillBot:  [14, 20, 18],
                    strokeLight:  `rgba(76, 104, 82, ${0.34 * vis})`,
                    strokeDark:   `rgba(82, 178, 132, ${0.30 * vis})`,
                    hasTrees: true,
                    treeDensity: 34
                },
                {
                    baseY: 0.74,
                    amp1: 28, freq1: 0.0028,
                    amp2: 14, freq2: 0.0064,
                    phaseOffset: 2.1,
                    lightFillTop: [194, 210, 186],
                    lightFillBot: [232, 228, 216],
                    darkFillTop:  [18, 34, 28],
                    darkFillBot:  [12, 18, 16],
                    strokeLight:  `rgba(62, 92, 68, ${0.42 * vis})`,
                    strokeDark:   `rgba(96, 198, 146, ${0.36 * vis})`,
                    hasTrees: true,
                    treeDensity: 28
                },
                {
                    baseY: 0.84,
                    amp1: 20, freq1: 0.0034,
                    amp2: 10, freq2: 0.0072,
                    phaseOffset: 3.8,
                    lightFillTop: [222, 204, 184],
                    lightFillBot: [242, 236, 226],
                    darkFillTop:  [28, 32, 24],
                    darkFillBot:  [14, 16, 15],
                    strokeLight:  `rgba(186, 92, 38, ${0.38 * vis})`,
                    strokeDark:   `rgba(255, 120, 50, ${0.34 * vis})`,
                    hasTrees: false
                }
            ];

            landLayers.forEach((layer, lIdx) => {
                const shiftX = mouseShiftX * (0.3 + lIdx * 0.25);
                const layerYOffset = parallaxY * (0.5 + lIdx * 0.22);

                const evalHillY = (x) => {
                    const wx = x + shiftX;
                    return layer.baseY * h + layerYOffset
                        + Math.sin(wx * layer.freq1 + layer.phaseOffset) * layer.amp1
                        + Math.cos(wx * layer.freq2 - layer.phaseOffset * 0.7) * layer.amp2;
                };

                // Draw Rolling Land Polygon
                ctx.beginPath();
                for (let x = 0; x <= w; x += 14) {
                    const y = evalHillY(x);
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.lineTo(w, h);
                ctx.lineTo(0, h);
                ctx.closePath();

                const hillGrad = ctx.createLinearGradient(0, layer.baseY * h + layerYOffset - 40, 0, h);
                if (!isDark) {
                    const cTop = layer.lightFillTop;
                    const cBot = layer.lightFillBot;
                    hillGrad.addColorStop(0, `rgba(${cTop[0]}, ${cTop[1]}, ${cTop[2]}, ${0.52 * vis})`);
                    hillGrad.addColorStop(1, `rgba(${cBot[0]}, ${cBot[1]}, ${cBot[2]}, ${0.28 * vis})`);
                } else {
                    const cTop = layer.darkFillTop;
                    const cBot = layer.darkFillBot;
                    hillGrad.addColorStop(0, `rgba(${cTop[0]}, ${cTop[1]}, ${cTop[2]}, ${0.64 * vis})`);
                    hillGrad.addColorStop(1, `rgba(${cBot[0]}, ${cBot[1]}, ${cBot[2]}, ${0.38 * vis})`);
                }
                ctx.fillStyle = hillGrad;
                ctx.fill();

                // Draw Terraced Topographic Strata Ribbons inside the hill
                for (let terrace = 1; terrace <= 3; terrace++) {
                    ctx.beginPath();
                    for (let x = 0; x <= w; x += 18) {
                        const y = evalHillY(x) + terrace * 14 + Math.sin(x * 0.008 + terrace) * 3;
                        if (x === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.strokeStyle = !isDark
                        ? `rgba(70, 90, 74, ${0.13 * vis})`
                        : `rgba(110, 190, 150, ${0.11 * vis})`;
                    ctx.lineWidth = 0.85;
                    ctx.setLineDash(terrace === 2 ? [5, 5] : []);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }

                // Crisp Horizon Ridge Line
                ctx.beginPath();
                for (let x = 0; x <= w; x += 14) {
                    const y = evalHillY(x);
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.strokeStyle = !isDark ? layer.strokeLight : layer.strokeDark;
                ctx.lineWidth = 1.35;
                ctx.stroke();

                // Conifer / Pine Timberline Silhouettes along the Land Ridges
                if (layer.hasTrees) {
                    const spacing = Math.max(24, Math.floor(w / layer.treeDensity));
                    for (let tx = 18; tx < w - 18; tx += spacing) {
                        // Cluster trees naturally along ridge crests
                        const clusterMask = Math.sin(tx * 0.019 + lIdx * 2.2);
                        if (clusterMask < -0.15) continue;

                        const ty = evalHillY(tx);
                        if (ty < 70 || ty > h - 40) continue;
                        const treeH = 11 + ((tx * 7) % 9) + lIdx * 3;
                        const treeW = treeH * 0.42;

                        // Two-tiered conifer silhouette
                        ctx.beginPath();
                        ctx.moveTo(tx, ty - treeH);
                        ctx.lineTo(tx - treeW * 0.75, ty - treeH * 0.45);
                        ctx.lineTo(tx - treeW * 0.35, ty - treeH * 0.45);
                        ctx.lineTo(tx - treeW, ty);
                        ctx.lineTo(tx + treeW, ty);
                        ctx.lineTo(tx + treeW * 0.35, ty - treeH * 0.45);
                        ctx.lineTo(tx + treeW * 0.75, ty - treeH * 0.45);
                        ctx.closePath();

                        ctx.fillStyle = !isDark
                            ? `rgba(54, 84, 62, ${(0.34 + lIdx * 0.08) * vis})`
                            : `rgba(68, 168, 118, ${(0.28 + lIdx * 0.08) * vis})`;
                        ctx.fill();
                    }
                }
            });

            // 2. Winding Topographic Braided River Valley cutting from the mid-horizon toward the Sea
            const riverStartY = h * 0.64 + parallaxY * 0.5;
            const riverEndY = h + 20;
            ctx.beginPath();
            const steps = 28;
            for (let i = 0; i <= steps; i++) {
                const t = i / steps;
                const ry = riverStartY + (riverEndY - riverStartY) * t;
                const meander = Math.sin(t * Math.PI * 2.6 + time * 0.8) * (45 + t * 95);
                const rx = w * 0.52 + meander - t * 60 - mouseShiftX * 0.4;
                const widthOffset = 4 + t * 28;
                if (i === 0) ctx.moveTo(rx - widthOffset, ry);
                else ctx.lineTo(rx - widthOffset, ry);
            }
            for (let i = steps; i >= 0; i--) {
                const t = i / steps;
                const ry = riverStartY + (riverEndY - riverStartY) * t;
                const meander = Math.sin(t * Math.PI * 2.6 + time * 0.8) * (45 + t * 95);
                const rx = w * 0.52 + meander - t * 60 - mouseShiftX * 0.4;
                const widthOffset = 4 + t * 28;
                ctx.lineTo(rx + widthOffset, ry);
            }
            ctx.closePath();

            const riverGrad = ctx.createLinearGradient(0, riverStartY, 0, riverEndY);
            if (!isDark) {
                riverGrad.addColorStop(0, `rgba(56, 148, 198, ${0.22 * vis})`);
                riverGrad.addColorStop(1, `rgba(28, 128, 186, ${0.42 * vis})`);
            } else {
                riverGrad.addColorStop(0, `rgba(0, 195, 245, ${0.18 * vis})`);
                riverGrad.addColorStop(1, `rgba(0, 215, 255, ${0.36 * vis})`);
            }
            ctx.fillStyle = riverGrad;
            ctx.fill();

            ctx.strokeStyle = !isDark
                ? `rgba(0, 118, 182, ${0.45 * vis})`
                : `rgba(0, 215, 255, ${0.45 * vis})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();

            // 3. Land Survey Benchmark Callout along the Terraced Valley Horizon
            const benchX = w * 0.14;
            const benchY = clamp(h * 0.63 + parallaxY * 0.5, 76, h - 76);
            ctx.font = '500 9.5px "JetBrains Mono", monospace';
            ctx.fillStyle = !isDark
                ? `rgba(54, 84, 62, ${0.82 * vis})`
                : `rgba(96, 198, 146, ${0.85 * vis})`;
            ctx.fillText('⛰ LAND SECTOR 03 · TERRACED VALLEY & TIMBERLINE (+1,180m)', benchX, benchY);

            ctx.restore();
        }

        // Draw animated 0m MSL Tidal Wave Horizon cleanly in the lower background zone so it never blurs or clashes with Sea Level cards
        function drawSeaLevelHorizon(ctx, w, h, p, isDark) {
            const waveVisibility = clamp(1 - Math.abs(p - 0.80) / 0.20, 0, 1);
            if (waveVisibility <= 0.01) return;

            // Anchor the tidal horizon in the lower background third (h * 0.81) at p=0.80 so UI cards sit cleanly above/in front
            const baseWaveY = h * 0.81 - (p - 0.80) * h * 1.85;

            ctx.save();
            for (let layer = 0; layer < 3; layer++) {
                ctx.beginPath();
                const amp = 8 + layer * 4;
                const freq = 0.0042 - layer * 0.0007;
                const speed = time * (2.8 - layer * 0.6);

                for (let x = 0; x <= w; x += 16) {
                    const y = baseWaveY
                        + Math.sin(x * freq + speed + layer) * amp
                        + Math.cos(x * freq * 1.7 - speed * 0.7) * (amp * 0.4);
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }

                const alpha = (0.50 - layer * 0.12) * waveVisibility;
                ctx.strokeStyle = isDark
                    ? (layer === 0 ? `rgba(0, 215, 255, ${alpha})` : `rgba(110, 205, 240, ${alpha * 0.75})`)
                    : (layer === 0 ? `rgba(0, 118, 182, ${alpha})` : `rgba(40, 150, 205, ${alpha * 0.75})`);
                ctx.lineWidth = layer === 0 ? 1.8 : 1.0;
                ctx.stroke();

                if (layer === 0) {
                    ctx.lineTo(w, h);
                    ctx.lineTo(0, h);
                    ctx.closePath();
                    const waterGrad = ctx.createLinearGradient(0, baseWaveY, 0, h);
                    if (isDark) {
                        waterGrad.addColorStop(0, `rgba(0, 165, 225, ${0.12 * waveVisibility})`);
                        waterGrad.addColorStop(1, `rgba(4, 24, 42, ${0.28 * waveVisibility})`);
                    } else {
                        waterGrad.addColorStop(0, `rgba(0, 135, 195, ${0.10 * waveVisibility})`);
                        waterGrad.addColorStop(1, `rgba(180, 222, 242, ${0.22 * waveVisibility})`);
                    }
                    ctx.fillStyle = waterGrad;
                    ctx.fill();
                }
            }

            // Crisp hydrographic datum marker along the wave crest
            ctx.font = '500 10px "JetBrains Mono", monospace';
            ctx.fillStyle = isDark
                ? `rgba(0, 215, 255, ${0.85 * waveVisibility})`
                : `rgba(0, 105, 165, ${0.85 * waveVisibility})`;
            ctx.fillText('≈ 0m MEAN SEA LEVEL · HYDROGRAPHIC DATUM', 28, clamp(baseWaveY - 12, 72, h - 52));
            ctx.restore();
        }

        // Draw underwater light caustics, rising micro-bubbles, and seabed sonar rings
        function drawUnderwaterAndSeabed(ctx, w, h, p, submerge) {
            if (submerge <= 0.02) return;

            ctx.save();

            // 1. Upper-ocean diagonal caustic light beams (strongest just below surface, fading toward -1,200m abyss)
            const causticStrength = clamp(Math.sin(submerge * Math.PI), 0, 1) * 0.14;
            if (causticStrength > 0.01) {
                for (let i = 0; i < 5; i++) {
                    const beamX = (w * (0.15 + i * 0.18)) + Math.sin(time * 1.5 + i) * 45;
                    const grad = ctx.createLinearGradient(beamX, 0, beamX + 140, h * 0.85);
                    grad.addColorStop(0, `rgba(0, 220, 255, ${causticStrength})`);
                    grad.addColorStop(1, 'rgba(0, 220, 255, 0)');

                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.moveTo(beamX - 40, 0);
                    ctx.lineTo(beamX + 60, 0);
                    ctx.lineTo(beamX + 220, h * 0.85);
                    ctx.lineTo(beamX + 40, h * 0.85);
                    ctx.closePath();
                    ctx.fill();
                }
            }

            // 2. Rising Marine Snow / Micro-Bubbles
            envParticles.forEach((pt, idx) => {
                pt.y -= pt.speedY * (1 + submerge * 1.4);
                if (pt.y < 0) pt.y = 1;
                const px = ((pt.x + Math.sin(time * 2 + pt.phase) * 0.015) * w + w) % w;
                const py = pt.y * h;

                ctx.beginPath();
                ctx.arc(px, py, pt.r, 0, Math.PI * 2);
                const isBiolum = idx % 5 === 0;
                ctx.fillStyle = isBiolum
                    ? `rgba(0, 230, 255, ${0.48 * submerge})`
                    : `rgba(180, 230, 255, ${0.26 * submerge})`;
                ctx.fill();
            });

            // 3. Periodic Autonomous Seabed Sonar Pulse at Abyssal Depth (p > 0.85)
            if (p > 0.84 && Math.random() < 0.018 && sonarPulses.length < 4) {
                sonarPulses.push({
                    x: smoothX,
                    y: smoothY,
                    radius: 6,
                    maxRadius: 320,
                    alpha: 0.55
                });
            }

            for (let i = sonarPulses.length - 1; i >= 0; i--) {
                const sp = sonarPulses[i];
                sp.radius += 2.6;
                sp.alpha *= 0.982;

                ctx.beginPath();
                ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(0, 225, 255, ${sp.alpha * submerge})`;
                ctx.lineWidth = 1.25;
                ctx.stroke();

                if (sp.radius > sp.maxRadius || sp.alpha < 0.02) {
                    sonarPulses.splice(i, 1);
                }
            }

            ctx.restore();
        }

        const compactSpatialFrameQuery = window.matchMedia('(max-width: 639px), (pointer: coarse)');
        let lastSpatialFrameTime = 0;
        let contourGrid = new Float32Array(0);
        let contourGridLength = 0;

        function requestSpatialRender() {
            if (document.hidden || spatialFrameId !== null) return;
            spatialFrameId = window.requestAnimationFrame(animateSpatialPortfolio);
        }

        function animateSpatialPortfolio(timestamp) {
            spatialFrameId = null;
            const targetFrameInterval = 1000 / (compactSpatialFrameQuery.matches ? 24 : 30);
            if (!isMotionPaused && lastSpatialFrameTime && timestamp - lastSpatialFrameTime < targetFrameInterval) {
                requestSpatialRender();
                return;
            }
            const deltaScale = lastSpatialFrameTime ? Math.min((timestamp - lastSpatialFrameTime) / (1000 / 60), 3) : 1;
            lastSpatialFrameTime = timestamp;

            if (isMotionPaused) {
                currentProgress = targetProgress;
            } else {
                // Smooth physics LERP for virtual camera depth
                currentProgress += (targetProgress - currentProgress) * (1 - Math.pow(1 - 0.075, deltaScale));
            }
            updateSpatialScenes(currentProgress);

            if (!isMotionPaused) {
                time += 0.0022 * deltaScale;
                smoothX += (mouseX - smoothX) * (1 - Math.pow(1 - 0.05, deltaScale));
                smoothY += (mouseY - smoothY) * (1 - Math.pow(1 - 0.05, deltaScale));
            }

            const w = topoCanvas.width;
            const h = topoCanvas.height;
            topoCtx.clearRect(0, 0, w, h);

            const isDark = document.documentElement.classList.contains('dark');
            const submerge = clamp((currentProgress - 0.62) / 0.34, 0, 1);

            // 1. Render Marching-Squares Topographic Isolines (Air) -> Bathymetric Depth Isobars (Ocean)
            const step = 42;
            const cols = Math.ceil(w / step) + 1;
            const rows = Math.ceil(h / step) + 1;
            const requiredGridLength = cols * rows;
            if (contourGridLength !== requiredGridLength) {
                contourGrid = new Float32Array(requiredGridLength);
                contourGridLength = requiredGridLength;
            }

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    contourGrid[r * cols + c] = sampleField(c * step, r * step, time, currentProgress);
                }
            }

            const baseStroke = submerge > 0.4
                ? 'rgba(130, 210, 250, 0.08)'
                : (isDark ? 'rgba(242, 244, 243, 0.058)' : 'rgba(20, 20, 19, 0.062)');

            const accentStroke = submerge > 0.4
                ? 'rgba(0, 225, 255, 0.24)'
                : (isDark ? 'rgba(255, 94, 26, 0.16)' : 'rgba(255, 79, 0, 0.15)');

            const levels = 9;
            for (let l = 0; l < levels; l++) {
                const threshold = -0.65 + (l / levels) * 1.5;
                const isIndex = l === 4 || l === 7;

                topoCtx.beginPath();
                topoCtx.strokeStyle = isIndex ? accentStroke : baseStroke;
                topoCtx.lineWidth = isIndex ? 1.25 : 0.85;

                // Dashed bathymetric soundings when deep underwater
                if (submerge > 0.55 && !isIndex && l % 2 === 0) {
                    topoCtx.setLineDash([4, 6]);
                } else {
                    topoCtx.setLineDash([]);
                }

                for (let r = 0; r < rows - 1; r++) {
                    for (let c = 0; c < cols - 1; c++) {
                        const idx = r * cols + c;
                        const v0 = contourGrid[idx];
                        const v1 = contourGrid[idx + 1];
                        const v2 = contourGrid[idx + cols + 1];
                        const v3 = contourGrid[idx + cols];

                        let state = 0;
                        if (v0 > threshold) state |= 8;
                        if (v1 > threshold) state |= 4;
                        if (v2 > threshold) state |= 2;
                        if (v3 > threshold) state |= 1;
                        if (state === 0 || state === 15) continue;

                        const x = c * step;
                        const y = r * step;
                        const ax = x + step * 0.5, ay = y;
                        const bx = x + step,       by = y + step * 0.5;
                        const cx = x + step * 0.5, cy = y + step;
                        const dx = x,              dy = y + step * 0.5;

                        switch (state) {
                            case 1: case 14: topoCtx.moveTo(dx, dy); topoCtx.lineTo(cx, cy); break;
                            case 2: case 13: topoCtx.moveTo(bx, by); topoCtx.lineTo(cx, cy); break;
                            case 3: case 12: topoCtx.moveTo(dx, dy); topoCtx.lineTo(bx, by); break;
                            case 4: case 11: topoCtx.moveTo(ax, ay); topoCtx.lineTo(bx, by); break;
                            case 6: case 9:  topoCtx.moveTo(ax, ay); topoCtx.lineTo(cx, cy); break;
                            case 7: case 8:  topoCtx.moveTo(ax, ay); topoCtx.lineTo(dx, dy); break;
                        }
                    }
                }
                topoCtx.stroke();
            }
            topoCtx.setLineDash([]);

            // 2. Render High-Altitude Cloud Layer (+2,840m -> +1,000m)
            drawCloudLayer(topoCtx, w, h, currentProgress, isDark);

            // 3. Render Stage 1 (+2,050m Projects) Alpine Summit Peaks, Faceted Ridges & Survey Beacons
            drawSummitPeaksBackground(topoCtx, w, h, currentProgress, isDark);

            // 4. Render Stage 2 (+1,180m Experience) Rolling Terraced Land, Conifer Timberline & Winding River Valley
            drawLandValleyBackground(topoCtx, w, h, currentProgress, isDark);

            // 5. Render Crossing Sea Surface Wave Horizon (0m MSL)
            drawSeaLevelHorizon(topoCtx, w, h, currentProgress, isDark);

            // 6. Render Underwater Caustics, Marine Snow & Seabed Sonar Pulses (-1,200m)
            drawUnderwaterAndSeabed(topoCtx, w, h, currentProgress, submerge);

            // 7. Advance the Rotating Project Carousel when not hovered
            stepProjectCarouselAnimation(deltaScale);

            if (!isMotionPaused && !document.hidden) requestSpatialRender();
        }

        window.addEventListener('load', function initializePortfolio() {
            syncMotionControl();
            updateCarouselStatusHUD(isMotionPaused, 'MOTION PAUSED');
            renderProjectsGrid();
            renderWorkDeck();
            resizeCanvas();
            requestSpatialRender();
        }, { once: true });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden && spatialFrameId !== null) {
                cancelAnimationFrame(spatialFrameId);
                spatialFrameId = null;
            } else if (!document.hidden) {
                lastSpatialFrameTime = 0;
                playProjectCardVideos();
                requestSpatialRender();
            }
        });

        document.addEventListener('click', event => {
            if (!expandedProjectCardId || !(event.target instanceof Element)) return;

            const clickedButton = event.target.closest('button');
            if (clickedButton?.getAttribute('onclick')?.startsWith('nudgeProjectCarousel(')) return;

            const expandedSlot = Array.from(document.querySelectorAll('.project-3d-slot'))
                .find(slot => slot.getAttribute('data-proj-id') === expandedProjectCardId);
            if (clickedButton || !expandedSlot?.contains(event.target)) {
                clearProjectCardEmphasis();
            }
        }, true);

        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', event => {
            if (!event.matches || isMotionPaused) return;
            isMotionPaused = true;
            lastSpatialFrameTime = 0;
            syncMotionControl();
            stopProjectCardVideos();
            updateCarouselStatusHUD(true, 'MOTION PAUSED');
            requestSpatialRender();
        });
