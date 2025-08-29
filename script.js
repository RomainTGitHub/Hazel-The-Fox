document.addEventListener('DOMContentLoaded', () => {

    const pageContent = {
        home: `
            <div> <!-- Ce conteneur recevra l'animation fadeIn -->
                <div class="w-full max-w-2xl md:max-w-4xl mx-auto bg-[#f5f0e9]/75 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm border border-[#a08c7d] animate-float">
                    <div class="flex flex-col md:flex-row items-center">
                        <!-- Colonne de l'image -->
                        <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
                            <img src="images/hazelhome.jpg" alt="Profile Picture" class="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-[#a08c7d] shadow-lg">
                        </div>
                        <!-- Colonne du texte -->
                        <div class="text-center md:text-left">
                            <h1 class="text-4xl md:text-5xl font-bold text-[#4d4030]">Hazel</h1>
                            <p class="text-lg md:text-xl text-[#6b5a47] mb-4">A silly fox goddess</p>
                            <hr class="border-[#4d4030]/25 my-4">
                            <p class="text-base md:text-lg text-[#6b5a47] mb-6">
                                Trying her best to be a great photographer. Welcome to my little corner of the internet.
                            </p>
                            <div class="flex justify-center md:justify-start space-x-6">
                                <a href="https://bsky.app/profile/hazel-ffxiv.bsky.social" target="_blank" rel="noopener noreferrer" class="text-[#6b5a47] hover:text-[#4d4030] transition-colors duration-300" title="BlueSky">
                                    <svg class="w-8 h-8" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve"><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:currentColor;} </style> <g> <path class="st0" d="M243.695,179.339c0.703,4.906,5.813,7.438,7.719,1.406c1.891-6.031-4.828-17.219-22.219-36.531 c-14.828-16.484-35.625-39.391-23.844-51.578c14.609-10.078,8.469-27.75-4.172-29.469c-11.313-1.516-21.609,13.578-15.031,38.703 C192.711,126.964,241.695,165.292,243.695,179.339z"></path> <path class="st0" d="M445.898,83.886c-74.469,0-160.703,89.859-174.516,111.078c-3.594-4.578-9.109-7.578-15.375-7.578 c-6.281,0-11.797,3-15.391,7.578C226.805,173.73,140.57,83.886,66.102,83.886c-76.828,0-70.547,68.984-59.578,112.891 c10.969,43.922,56.453,92.516,106.609,94.094c-56.438,25.078-61.141,89.375-43.891,119.156 c16.359,28.25,103.266,92.016,167.156-50.296v29.141c0,10.813,8.781,19.593,19.609,19.593c10.813,0,19.594-8.781,19.594-19.593 v-29.156c63.891,142.328,150.813,78.562,167.156,50.312c17.25-29.781,12.547-94.078-43.891-119.156 c50.172-1.578,95.641-50.172,106.609-94.094C516.445,152.871,522.727,83.886,445.898,83.886z"></path> <path class="st0" d="M268.305,179.339c2-14.047,50.984-52.375,57.563-77.469c6.563-25.125-3.734-40.219-15.047-38.703 c-12.641,1.719-18.766,19.391-4.172,29.469c11.781,12.188-9.016,35.094-23.844,51.578c-17.391,19.313-24.109,30.5-22.219,36.531 C262.492,186.777,267.602,184.246,268.305,179.339z"></path> </g> </g></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        gallery: `
            <div>
                <h1 class="text-4xl font-bold mb-8 text-center">Galerie d'images</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    ${Array.from({length: 12}).map((_, i) => `
                        <div class="group overflow-hidden rounded-lg shadow-lg">
                            <img src="https://placehold.co/600x400/c4b8ab/4d4030?text=Photo+${i + 1}" alt="Photo ${i + 1}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        lore: `
            <div>
                <h1 class="text-4xl font-bold mb-8 text-center">À propos de mon parcours</h1>
                <div class="max-w-4xl mx-auto text-[#6b5a47] space-y-6">
                    <div class="flex flex-col md:flex-row items-center gap-8 bg-[#f5f0e9] p-6 rounded-lg">
                        <img src="https://placehold.co/400x400/a08c7d/ffffff?text=Portrait" alt="Portrait" class="w-48 h-48 rounded-full object-cover flex-shrink-0 shadow-md">
                        <div>
                            <h2 class="text-2xl font-semibold mb-2 text-[#4d4030]">Mon histoire</h2>
                            <p>Passionné par la photographie depuis mon plus jeune âge, j'ai toujours été fasciné par la capacité d'un simple cliché à figer le temps et à transmettre des émissions profondes. Mon appareil photo est le prolongement de mon regard sur le monde, une façon de partager ma perspective et de mettre en lumière la beauté qui nous entoure, souvent dans les détails les plus simples.</p>
                        </div>
                    </div>
                    <div class="bg-[#f5f0e9] p-6 rounded-lg">
                        <h2 class="text-2xl font-semibold mb-2 text-[#4d4030]">Ma Vision Artistique</h2>
                        <p>Je m'efforce de créer des images qui ne sont pas seulement esthétiques, mais qui racontent aussi une histoire. J'aime jouer avec la lumière naturelle, les contrastes et les compositions pour créer des atmosphères uniques. Que ce soit un paysage grandiose, un portrait intime ou une scène de rue animée, mon objectif est de capturer l'essence même de l'instant présent.</p>
                    </div>
                </div>
            </div>
        `
    };

    const contentArea = document.getElementById('content-area');
    const hamburgerButton = document.getElementById('hamburger-button');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const allNavButtons = document.querySelectorAll('.nav-button');
    const rainAudio = document.getElementById('rain-audio');

    function renderContent(page) {
        // Réinitialiser les styles du conteneur de contenu
        contentArea.classList.remove('flex', 'items-center', 'justify-center');

        // Appliquer les styles de centrage uniquement pour la page d'accueil
        if (page === 'home') {
            contentArea.classList.add('flex', 'items-center', 'justify-center');
        }

        contentArea.innerHTML = pageContent[page] || '<p>Page non trouvée.</p>';
        
        allNavButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.page === page) {
                button.classList.add('active');
            }
        });
    }

    allNavButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const page = event.currentTarget.dataset.page;
            renderContent(page);
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    });

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    renderContent('home');

    if (rainAudio) {
        rainAudio.volume = 0.15;
        let playPromise = rainAudio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.warn("La lecture automatique a été bloquée. Le son démarrera après une interaction.");
                document.body.addEventListener('click', () => {
                   rainAudio.play();
                }, { once: true });
            });
        }
    }
});

