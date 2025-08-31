document.addEventListener('DOMContentLoaded', () => {

    // Structure de données améliorée incluant les icônes pour chaque galerie.
    const galleries = {
        hazel: {
            icon: 'images/hazelhome.jpg',
            images: Array.from({length: 13}).map((_, i) => `images/hazel${i + 1}.png`)
        },
        hela: {
            icon: 'images/helahome.png',
            images: Array.from({length: 5}).map((_, i) => `images/hela${i + 1}.png`)
        },
        kaia: {
            icon: 'images/kaiahome.png',
            images: Array.from({length: 1}).map((_, i) => `images/kaia${i + 1}.png`)
        }
    };

    // La fonction utilise maintenant l'objet 'galleryData' pour obtenir l'icône et les images.
    function createGalleryHTML(galleryName, galleryData) {
        return `
            <div class="mb-12">
                <h2 class="text-5xl font-bold mt-10 mb-10 text-center text-[#EAE0D5] capitalize flex items-center justify-center">
                    <img src="${galleryData.icon}" alt="Icone ${galleryName}" class="w-10 h-10 rounded-full mr-4 border-2 border-[#EAE0D5]/50">
                    <span>${galleryName}</span>
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    ${galleryData.images.map((imgSrc, i) => `
                        <div class="group overflow-hidden rounded-lg shadow-xl shadow-[#5E4742]/30">
                            <img src="${imgSrc}" alt="Photo ${galleryName} ${i + 1}" 
                                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                                 data-gallery="${galleryName}" 
                                 data-index="${i}">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    const pageContent = {
        home: `
            <div> <!-- Ce conteneur recevra l'animation fadeIn -->
                <div class="w-full max-w-2xl md:max-w-4xl mx-auto bg-[#f5f0e9]/75 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm border border-[#a08c7d] animate-float">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
                            <img src="images/hazelhome.jpg" alt="Profile Picture" class="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-[#a08c7d] shadow-lg">
                        </div>
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
            <div class="w-full">
                ${Object.keys(galleries).map((galleryName, index, array) => {
                    const galleryHTML = createGalleryHTML(galleryName, galleries[galleryName]);
                    // Ajoute un séparateur sauf pour la dernière galerie
                    if (index < array.length - 1) {
                        return galleryHTML + `<hr class="border-[#EAE0D5]/20 my-12">`;
                    }
                    return galleryHTML;
                }).join('')}
            </div>
        `,
        lore: `
            <div class="text-[#EAE0D5]">
                <h1 class="text-4xl lg:text-5xl font-bold mb-12 text-center">Lore</h1>
                <div class="max-w-5xl mx-auto space-y-12">

                    <!-- Section Hazel -->
                    <div class="flex flex-col md:flex-row items-center gap-8 bg-black/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10">
                        <img src="images/hazelhome.jpg" alt="Portrait de Hazel" class="w-48 h-48 rounded-full object-cover flex-shrink-0 shadow-md border-4 border-white/20">
                        <div class="text-center md:text-left">
                            <h2 class="text-3xl font-semibold mb-3 text-white">Hazel</h2>
                            <div class="text-lg space-y-4">
                                <p>
                                    Deep within the forests of Gridania, where ancient melodies whispered through the trees and nature reigned supreme, lived Hazel, a fox goddess whose enchanting appearance captivated all who crossed her path. Hazel had a rich brown coat with light tips, and even when she took on a human form, she kept her fox ears and tail, proud symbols of her divine nature. Instead of hiding them, she wore them with pride, knowing they connected her back to her origins.
                                </p>
                                <p>
                                    Hazel was not just an ordinary fox. Her powers allowed her to summon mystical creatures to protect and guide her, a skill that made her a formidable Summoner. Curious about the world of mortals, she decided to leave her sacred glade to immerse herself into the humans’ lifestyle, drawn by their complexity and creativity.
                                </p>
                                <p>
                                    When she arrived in Gridania, Hazel blended in with the inhabitants, discovering with wonder the richness of their cultures. Though she was a goddess, she wished to experience mortal life, not as a spectator but as a participant. Thus, she became an adventurer, accepting quests and exploring the lands of Eorzea.
                                </p>
                                <p>
                                    After several months of adventurous living, Hazel decided to take a new path. She had tasted the thrill of battle, the joy of discovery, and now she sought a new way to express herself in this world that fascinated her so much. That’s when she discovered photography, an art that allowed her to capture the beauty of the landscapes and beings around her. Enchanted by this human form of magic, she began to travel across Eorzea with her camera, immortalizing the moments and people she encountered.
                                </p>
                                <p>
                                    Hazel quickly became a talented photographer, known for her images that seemed to capture the very soul of her subjects. She opened a small studio in Gridania, where adventurers would come to be photographed before setting off on new quests. But that’t all; Hazel also found another refuge—a small café tucked away in a quiet alley of the city. There, between photo sessions, she worked as a waitress, serving drinks to customers and sharing tales of her adventures.
                                </p>
                                <p>
                                    Despite her busy life, Hazel never forgot her divine roots. On nights when the moon was full, she would return to the forest, where she would take her fox form again, running through the woods with her tail flowing behind her and her ears perked up toward the starry sky.
                                </p>
                                <p>
                                    Thus, Hazel found her place between two worlds—the mortal world she had come to love and the spirit world that had witnessed her birth. She lived each day as a new adventure, whether it be by exploring the mysteries of Eorzea, capturing precious memories with her camera, or serving warm drinks to friends who visited her café.
                                </p>
                                <p>
                                    Her life became a legend in Gridania, not just for her exploits but for how she had created a home where magic, wonder, and adventure coexisted in perfect harmony.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Section Hela -->
                    <div class="flex flex-col md:flex-row-reverse items-center gap-8 bg-black/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10">
                        <img src="images/helahome.png" alt="Portrait de Hela" class="w-48 h-48 rounded-full object-cover flex-shrink-0 shadow-md border-4 border-white/20">
                        <div class="text-center md:text-left">
                            <h2 class="text-3xl font-semibold mb-3 text-white">Hela</h2>
                            <div class="text-lg space-y-4">
                                <p>
                                    Hela was born in the remote mountains of Yanxia, in a small, isolated village known as Shugosha no Mura (the Village of Guardians). Nestled on the edge of the Crane Forest, a mystical place where the boundary between the material and spiritual worlds is thin, this village is inhabited by a community of spiritual guardians. The villagers maintain a deep connection with the forest spirits and the aetheric currents that flow through the region.
                                </p>
                                <p>
                                    The village is home to a unique clan of hybrid beings, born from an ancient pact between a powerful forest Kami and the villagers' ancestors. These hybrids possess both human and animal traits, allowing them to perceive and interact with the spiritual world in ways ordinary humans cannot. Hela, with her dog-like ears and curled tail, is one such being, and she quickly became known for her innate affinity with aetheric energies and her ability to guide lost souls and travelers through the mystical forests surrounding her home.
                                </p>
                                <p>
                                    From a young age, Hela showed an innate curiosity about the aetheric energies that flowed through the sacred forest. While other children of the village preferred to play or practice their skills, Hela spent hours following the aetheric currents and observing the spirits that moved stealthily among the trees. Her canine instincts sharpened her senses, allowing her to hear whispers in the wind and feel subtle shifts in the world around her. She developed a keen sense for detecting changes in the surrounding energy.
                                </p>
                                <p>
                                    One day, while still a young girl, Hela sensed a strange disturbance in the aether. Guided by her instincts, she followed the disturbance deep into the forest and found a wounded human, lost and alone. This man, a scholar from Sharlayan, was on a mission to study the ancient magics of Yanxia. Intrigued by Hela's appearance and her obvious connection to the spirits, the scholar allowed himself to be led back to the village, where he was received with suspicion but also curiosity.
                                </p>
                                <p>
                                    The scholar was fascinated by Hela and her unique abilities. He decided to stay in the village for some time to learn more about its mysteries and the bond its people shared with the spiritual world. For months, Hela accompanied him in his explorations, learning alongside him the secrets of ancient ruins and the aetheric currents of the region. A strong bond developed between them: the scholar admired Hela’s unique gifts, while she appreciated his curiosity and desire to uncover the secrets of the world.
                                </p>
                                <p>
                                    One day, the scholar received an urgent letter from his superiors in Sharlayan, asking him to investigate a mysterious ruin in Gyr Abania, where an ancient artifact of great power was said to have been discovered. Although Hela sensed a strange aura surrounding this mission, she was not yet experienced enough to understand the threat lurking behind this call.
                                </p>
                                <p>
                                    Despite her doubts, Hela decided to follow the scholar on this new adventure. Together, they traveled to the mountains of Gyr Abania, where they found an ancient temple in ruins, surrounded by a dense and ominous aetheric mist. Ignoring Hela’s warnings, the scholar ventured into the mist, leaving Hela outside to guard the entrance.
                                </p>
                                <p>
                                    Soon after, the mist thickened, filled with dark and turbulent energy. Hela suddenly felt an unsettling void in the aether. She tried to enter the mist to find her friend, but an invisible force repelled her violently. She continued searching for a way in for days, but to no avail. The scholar was nowhere to be found, as if swallowed by the dark magic surrounding the ruin.
                                </p>
                                <p>
                                    Desperate and lost, Hela began to wander alone, following the slightest clues left by her missing companion. Her journey took her across the lands of Hingashi, to Kugane, and further, seeking answers. Along the way, she used her heightened senses and instincts to assist adventurers and scholars she met, quickly becoming a respected guide for those who sought to explore places where the aetheric magic was unstable or dangerous.
                                </p>
                                <p>
                                    During her travels, Hela collected fragments of information and clues about the place where the scholar disappeared. She discovered scattered notes, strange artifacts, and testimonies from other explorers who had mentioned visions of similar mists, suggesting an ancient and dangerous magic linked to a forgotten cult that once thrived in Gyr Abania.
                                </p>
                                <p>
                                    Every new lead brought her back to this cursed ruin, but also to a deeper understanding of the aetheric magic and the forces that shaped her world. Although the answers still eluded her, Hela persisted, knowing she must understand the nature of this dark magic if she ever hoped to find her master.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Section Kaia -->
                    <div class="flex flex-col md:flex-row items-center gap-8 bg-black/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10">
                        <img src="images/kaiahome.png" alt="Portrait de Kaia" class="w-48 h-48 rounded-full object-cover flex-shrink-0 shadow-md border-4 border-white/20">
                        <div class="text-center md:text-left">
                            <h2 class="text-3xl font-semibold mb-3 text-white">Kaia</h2>
                            <div class="text-lg space-y-4">
                                <p>
                                    Kaia had never known the scent of damp moss in the forest nor the song of the wind through the leaves like other Viera. She was not born of a hidden clan deep within the woods, but of a circle of scholars who sought to defy the gods. In the darkness of a laboratory, they had shaped her to be nothing more than an instrument, a dagger disguised as a smile. Their goal was clear: to strike down Hazel, goddess of nature, whose clairvoyance and kindness constantly thwarted their ambitions. To approach the goddess, they needed a creature innocent in appearance, crafted to inspire trust. Kaia was given long blond hair that fell like dim rays of sunlight, folded Viera ears pressed against her head, which lent her a soft and fragile air. She was dressed in a simple outfit inspired by the forest, woven in greens and browns, as if nature itself had claimed her.
                                </p>
                                <p>
                                    When she finally left the laboratory, Kaia appeared to be nothing more than a timid young wanderer. It was in this guise that she met Hazel, in a glade where the goddess walked among the trees in a mortal form. Hazel, who could usually see the shadows lurking behind every mask, did not distrust Kaia. What she perceived first was a fragile spark, a being in search of a home she had never known. And instead of suspicion, Hazel offered her friendship.
                                </p>
                                <p>
                                    Days passed, and Kaia discovered what it meant to live. Guided by the goddess, she learned to feel the steady strength of roots, to listen to the songs of rivers, to smile at the simple beauty of a blooming flower. She who had been shaped only to kill, who had known nothing but cold commands and invisible chains, was slowly discovering wonder. And yet, her soul remained prisoner to the runes carved deep within her being. She could laugh and dream, but the shadow of her mission still followed her.
                                </p>
                                <p>
                                    The fatal day arrived. It was not under starlit skies or by a quiet lake, but inside a simple room, hidden from all eyes, that she raised her hand against Hazel. Kaia stepped forward, blade in hand, her face perfectly still. No emotion flickered across it, save for the faintest trace of pity. Hazel, startled, stared at the weapon that drew closer. Her wide brown eyes filled with tears, heavy and silent, while the sting of betrayal tightened in her chest. She made no move to defend herself, not even to look away. Her tears flowed without end, and when steel met flesh, it was not the pain of the wound but the shattering of trust that broke her. Hazel collapsed, trembling, while Kaia stood there, her breath unsteady, yet her expression unchanged.
                                </p>
                                <p>
                                    Kaia believed her role fulfilled, and an immense emptiness hollowed her heart. But Hazel was no ordinary mortal. Nature never truly disappears. Her body lay broken for several days, a deep wound carved across her chest, but little by little, like a plant rising again after winter, her strength returned. The wound closed, life began to flow once more through her veins, and the goddess opened her eyes. Hazel had not died—only suffered—and the pain in her heart outweighed that of her injury.
                                </p>
                                <p>
                                    Meanwhile, the laboratory that had created Kaia was destroyed by adventurers who came to put an end to such blasphemous experiments. In the etheric explosion that consumed the place, Kaia was struck directly. When she awoke, her memories had been erased. She no longer remembered Hazel, her mission, or the act of betrayal. Her gaze had become clear again, innocent, wide with wonder at every detail of the world. She was no longer the weapon created to kill, but a gentle, fragile Viera who smiled timidly, who reached out with no second thought, who marveled at every flower as if she were seeing one for the first time.
                                </p>
                                <p>
                                    Hazel, still weakened, found Kaia once again. At first, her eyes welled with tears, the memory of the blade and of betrayal rising anew. But before her no longer stood the assassin. She saw instead a young Viera with long blond hair, folded ears, clad in her sylvan garb that still tied her to the wilds. A young woman who had lost her chains, and who in her naïveté had found a purity she had never been allowed to know. Hazel understood then that this Kaia was no longer the one who had struck her down. She forgave her—not out of weakness, but because nature heals all wounds, even those of the heart.
                                </p>
                                <p>
                                    They became friends once more. This time, their bond was not born of manipulated destiny or a grim mission, but of an innocence regained and a trust that was true. Hazel chose to protect this fragile balance, never speaking of the past Kaia had lost. The goddess of nature and the folded-eared Viera now walked side by side, as if betrayal had been nothing but a nightmare swept away by the dawn.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Section Foxglove & Coffee -->
                    <div class="flex flex-col md:flex-row-reverse items-center gap-8 bg-black/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10">
                        <img src="images/foxglove&coffee.jpg" alt="Image de Foxglove & Coffee" class="w-48 h-48 rounded-full object-cover flex-shrink-0 shadow-md border-4 border-white/20">
                        <div class="text-center md:text-left">
                            <h2 class="text-3xl font-semibold mb-3 text-white">Foxglove & Coffee</h2>
                            <div class="text-lg space-y-4">
                                <p>
                                    Tucked away at Apartment 76, W14 Lavender Adamantoise, lies a secret haven: a cozy café watched over by the Fox Goddess herself.
                                </p>
                                <p>
                                    At Foxglove & Coffee, time slows down. The scent of fresh espresso mingles with cinnamon in the air, and soft amber light dances across wooden tables. Every cup served carries a whisper of magic — brewed by gentle paws and ancient wisdom.
                                </p>
                                <p>
                                    The Fox Goddess, elegant and ever-smiling, invites wanderers, dreamers, and caffeine seekers into her den. Whether you stay for a single sip or a quiet afternoon, you’ll leave lighter, warmer, and just a little enchanted.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `
    };

    const contentArea = document.getElementById('content-area');
    const allNavButtons = document.querySelectorAll('.nav-button');
    const galleryOverlay = document.getElementById('gallery-overlay');
    const hamburgerButton = document.getElementById('hamburger-button');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const rainAudio = document.getElementById('rain-audio');
    const clickSound = document.getElementById('click-sound');

    // --- Logique de déblocage audio ---
    function unlockAllAudio() {
        if (rainAudio && rainAudio.paused) {
            rainAudio.play().catch(() => {});
        }
        if (clickSound) {
            clickSound.play().then(() => {
                clickSound.pause();
                clickSound.currentTime = 0;
            }).catch(() => {});
        }
        document.body.removeEventListener('click', unlockAllAudio);
        document.body.removeEventListener('touchend', unlockAllAudio);
    }
    document.body.addEventListener('click', unlockAllAudio);
    document.body.addEventListener('touchend', unlockAllAudio);


    // --- Logique du son de clic ---
    function playClickSound() {
        if (clickSound) {
            clickSound.volume = 0.5;
            clickSound.currentTime = 0;
            const playPromise = clickSound.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Erreur de lecture audio :", error);
                });
            }
        }
    }

    // --- Logique de survol de la galerie ---
    contentArea.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'IMG' && e.target.closest('.group')) {
            galleryOverlay.classList.add('bg-black/60');
            e.target.closest('.group').classList.add('gallery-item-highlighted');
        }
    });

    contentArea.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'IMG' && e.target.closest('.group')) {
            galleryOverlay.classList.remove('bg-black/60');
            e.target.closest('.group').classList.remove('gallery-item-highlighted');
        }
    });
    
    // --- Logique Lightbox ---
    let currentGallery = '';
    let currentIndex = 0;

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox-hidden';
    document.body.appendChild(lightbox);

    const lightboxImage = document.createElement('img');
    lightbox.appendChild(lightboxImage);

    const lightboxClose = document.createElement('button');
    lightboxClose.innerHTML = '&times;';
    lightboxClose.className = 'lightbox-close';
    lightbox.appendChild(lightboxClose);

    const lightboxPrev = document.createElement('button');
    lightboxPrev.innerHTML = '&#10094;';
    lightboxPrev.className = 'lightbox-prev';
    lightbox.appendChild(lightboxPrev);

    const lightboxNext = document.createElement('button');
    lightboxNext.innerHTML = '&#10095;';
    lightboxNext.className = 'lightbox-next';
    lightbox.appendChild(lightboxNext);

    function showImage(gallery, index) {
        const images = galleries[gallery].images;
        if (!images || index < 0 || index >= images.length) {
            return;
        }
        currentGallery = gallery;
        currentIndex = index;
        lightboxImage.src = images[currentIndex];
    }

    function openLightbox(gallery, index) {
        showImage(gallery, parseInt(index));
        lightbox.classList.replace('lightbox-hidden', 'lightbox-visible');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.replace('lightbox-visible', 'lightbox-hidden');
        document.body.style.overflow = 'auto';
    }

    contentArea.addEventListener('click', e => {
        if (e.target.tagName === 'IMG' && e.target.dataset.gallery) {
            openLightbox(e.target.dataset.gallery, e.target.dataset.index);
        }
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    lightboxPrev.addEventListener('click', () => {
        const images = galleries[currentGallery].images;
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentGallery, newIndex);
    });

    lightboxNext.addEventListener('click', () => {
        const images = galleries[currentGallery].images;
        const newIndex = (currentIndex + 1) % images.length;
        showImage(currentGallery, newIndex);
    });

    document.addEventListener('keydown', e => {
        if (lightbox.classList.contains('lightbox-visible')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') lightboxPrev.click();
            if (e.key === 'ArrowRight') lightboxNext.click();
        }
    });
    
    // --- Fin de la logique Lightbox ---

    function renderContent(page) {
        contentArea.classList.remove('flex', 'items-center', 'justify-center');
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
            playClickSound();
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
        playClickSound();
        mobileMenu.classList.toggle('open');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    renderContent('home');

    if (rainAudio) {
        rainAudio.volume = 0.15;
    }

    // --- Logique pour le lecteur Lo-Fi déplaçable ---
    const lofiPlayer = document.getElementById('lofi-player');
    
    // ÉTAPE 1: Créer dynamiquement une poignée de déplacement
    const dragHandle = document.createElement('div');
    dragHandle.className = 'lofi-drag-handle';
    dragHandle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>`;
    lofiPlayer.appendChild(dragHandle);

    let isDragging = false;
    let offsetX, offsetY;

    function initializeDragPosition() {
        const rect = lofiPlayer.getBoundingClientRect();
        lofiPlayer.style.top = `${rect.top}px`;
        lofiPlayer.style.left = `${rect.left}px`;
        lofiPlayer.style.bottom = 'auto';
        lofiPlayer.style.right = 'auto';
    }

    const startDrag = (e) => {
        if (lofiPlayer.style.top === '') {
            initializeDragPosition();
        }

        isDragging = true;
        lofiPlayer.classList.add('dragging');

        const rect = lofiPlayer.getBoundingClientRect();
        
        if (e.type === 'mousedown') {
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        } else { // touchstart
            offsetX = e.touches[0].clientX - rect.left;
            offsetY = e.touches[0].clientY - rect.top;
        }

        document.addEventListener('mousemove', onDrag);
        document.addEventListener('touchmove', onDrag, { passive: false });
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        let currentX, currentY;
        if (e.type === 'mousemove') {
            currentX = e.clientX;
            currentY = e.clientY;
        } else { // touchmove
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
        }

        let newLeft = currentX - offsetX;
        let newTop = currentY - offsetY;
        
        const playerWidth = lofiPlayer.offsetWidth;
        const playerHeight = lofiPlayer.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        if (newLeft + playerWidth > viewportWidth) newLeft = viewportWidth - playerWidth;
        if (newTop + playerHeight > viewportHeight) newTop = viewportHeight - playerHeight;

        lofiPlayer.style.left = `${newLeft}px`;
        lofiPlayer.style.top = `${newTop}px`;
    };

    const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        lofiPlayer.classList.remove('dragging');
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('touchmove', onDrag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchend', endDrag);
    };
    
    // ÉTAPE 4: Attacher les écouteurs UNIQUEMENT à la poignée
    dragHandle.addEventListener('mousedown', startDrag);
    dragHandle.addEventListener('touchstart', startDrag);
});

