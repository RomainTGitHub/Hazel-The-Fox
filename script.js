document.addEventListener('DOMContentLoaded', () => {

    const pageContent = {
        home: `
            <div class="flex items-center justify-center min-h-full py-12">
                <div class="w-full max-w-2xl mx-auto bg-[#f5f0e9]/75 rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-[#a08c7d]">
                    <div class="flex flex-col md:flex-row items-center">
                        <!-- Colonne de l'image -->
                        <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                            <img src="images/hazelhome.jpg" alt="Profile Picture" class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#a08c7d] shadow-lg">
                        </div>
                        <!-- Colonne du texte -->
                        <div class="text-center md:text-left">
                            <h1 class="text-4xl font-bold text-[#4d4030]">Hazel</h1>
                            <p class="text-lg text-[#6b5a47] mb-4">A silly fox goddess</p>
                            <hr class="border-[#4d4030]/25 my-4">
                            <p class="text-[#6b5a47] text-base mb-6">
                                Trying her best to be a great photographer. Welcome to my little corner of the internet.
                            </p>
                            <div class="flex justify-center md:justify-start space-x-6">
                                <a href="#" class="text-[#6b5a47] hover:text-[#4d4030] transition-colors duration-300" title="Instagram"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
                                <a href="#" class="text-[#6b5a47] hover:text-[#4d4030] transition-colors duration-300" title="Twitter / X"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.716-2.011-4.415-2.011-3.356 0-6.08 2.724-6.08 6.08 0 .478.054.944.16 1.4-5.044-.253-9.5-2.666-12.487-6.324-.523.896-.822 1.94-.822 3.028 0 2.11.968 3.967 2.614 5.05A6.012 6.012 0 0 1 2.3 9.94v.076c0 2.94 2.092 5.39 4.88 5.952-.51.139-.99.208-1.49.208-.39 0-.77-.038-1.14-.104.77 2.408 3.007 4.156 5.65 4.205-2.078 1.625-4.69 2.592-7.53 2.592-.49 0-.97-.028-1.44-.084 2.68 1.71 5.86 2.712 9.28 2.712 11.13 0 17.22-9.22 17.22-17.22 0-.262-.006-.523-.018-.782A12.33 12.33 0 0 0 24 4.01z"></path></svg></a>
                                <a href="#" class="text-[#6b5a47] hover:text-[#4d4030] transition-colors duration-300" title="Facebook"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
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

