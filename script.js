// Attend que le contenu HTML de la page soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {

    // Contenu HTML pour chaque section du site
    const pageContent = {
        home: `
            <div class="text-center">
                <h1 class="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Hazel The Fox</h1>
                <p class="text-lg text-gray-300 max-w-2xl mx-auto">
A silly fox goddess trying her best to be a great photographer                </p>
                <img src="https://placehold.co/1200x500/1a202c/ffffff?text=Photographie" alt="Image de présentation" class="mt-8 rounded-lg shadow-2xl mx-auto">
            </div>
        `,
        gallery: `
            <div>
                <h1 class="text-4xl font-bold mb-8 text-center">Galerie d'images</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <!-- Génération de 12 images de remplacement -->
                    ${Array.from({length: 12}).map((_, i) => `
                        <div class="group overflow-hidden rounded-lg shadow-lg">
                            <img src="https://placehold.co/600x400/2d3748/ffffff?text=Photo+${i + 1}" 
                                 alt="Photo ${i + 1}" 
                                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        lore: `
            <div>
                <h1 class="text-4xl font-bold mb-8 text-center">À propos de mon parcours</h1>
                <div class="max-w-4xl mx-auto text-gray-300 space-y-6">
                    <div class="flex flex-col md:flex-row items-center gap-8 bg-gray-800 p-6 rounded-lg">
                        <img src="https://placehold.co/400x400/4a5568/ffffff?text=Portrait" alt="Portrait" class="w-48 h-48 rounded-full object-cover flex-shrink-0 shadow-md">
                        <div>
                            <h2 class="text-2xl font-semibold mb-2 text-white">Mon histoire</h2>
                            <p>Passionné par la photographie depuis mon plus jeune âge, j'ai toujours été fasciné par la capacité d'un simple cliché à figer le temps et à transmettre des émotions profondes. Mon appareil photo est le prolongement de mon regard sur le monde, une façon de partager ma perspective et de mettre en lumière la beauté qui nous entoure, souvent dans les détails les plus simples.</p>
                        </div>
                    </div>
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <h2 class="text-2xl font-semibold mb-2 text-white">Ma Vision Artistique</h2>
                        <p>Je m'efforce de créer des images qui ne sont pas seulement esthétiques, mais qui racontent aussi une histoire. J'aime jouer avec la lumière naturelle, les contrastes et les compositions pour créer des atmosphères uniques. Que ce soit un paysage grandiose, un portrait intime ou une scène de rue animée, mon objectif est de capturer l'essence même de l'instant présent.</p>
                    </div>
                </div>
            </div>
        `,
        social: `
            <div>
                <h1 class="text-4xl font-bold mb-8 text-center">Retrouvez-moi sur les réseaux</h1>
                <div class="flex justify-center items-center gap-8 flex-wrap">
                    <a href="#" class="flex flex-col items-center group text-gray-300 hover:text-blue-400 transition-colors duration-300">
                       <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                       <span class="mt-2 text-lg">Instagram</span>
                    </a>
                    <a href="#" class="flex flex-col items-center group text-gray-300 hover:text-blue-400 transition-colors duration-300">
                        <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.716-2.011-4.415-2.011-3.356 0-6.08 2.724-6.08 6.08 0 .478.054.944.16 1.4-5.044-.253-9.5-2.666-12.487-6.324-.523.896-.822 1.94-.822 3.028 0 2.11.968 3.967 2.614 5.05A6.012 6.012 0 0 1 2.3 9.94v.076c0 2.94 2.092 5.39 4.88 5.952-.51.139-.99.208-1.49.208-.39 0-.77-.038-1.14-.104.77 2.408 3.007 4.156 5.65 4.205-2.078 1.625-4.69 2.592-7.53 2.592-.49 0-.97-.028-1.44-.084 2.68 1.71 5.86 2.712 9.28 2.712 11.13 0 17.22-9.22 17.22-17.22 0-.262-.006-.523-.018-.782A12.33 12.33 0 0 0 24 4.01z"></path></svg>
                       <span class="mt-2 text-lg">Twitter / X</span>
                    </a>
                     <a href="#" class="flex flex-col items-center group text-gray-300 hover:text-blue-400 transition-colors duration-300">
                       <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                       <span class="mt-2 text-lg">Facebook</span>
                    </a>
                    <a href="#" class="flex flex-col items-center group text-gray-300 hover:text-blue-400 transition-colors duration-300">
                       <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                       <span class="mt-2 text-lg">LinkedIn</span>
                    </a>
                </div>
            </div>
        `
    };

    // Références aux éléments du DOM (Document Object Model)
    const contentArea = document.getElementById('content-area');
    const navButtons = document.querySelectorAll('.nav-button');

    // Fonction pour afficher le contenu d'une page
    function renderContent(page) {
        // Met à jour le contenu de la zone principale
        contentArea.innerHTML = pageContent[page] || '<p>Page non trouvée.</p>';
        
        // Met à jour le style du bouton de navigation actif
        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.page === page) {
                button.classList.add('active');
            }
        });
    }

    // Ajout des écouteurs d'événements sur chaque bouton de navigation
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const page = event.currentTarget.dataset.page;
            renderContent(page);
        });
    });

    // Affiche la page d'accueil par défaut au premier chargement
    renderContent('home');
    
});
