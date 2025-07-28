// Scene configuration
const scenes = {
    "1_entrance.jpg": {
        type: "image",
        file: "media/1_entrance.jpg",
        overlays: [
            { position: "center", label: "Entrar", action: "2_text.jpg" }
        ]
    },
    "2_text.jpg": {
        type: "image",
        file: "media/2_text.jpg",
        overlays: [
            { 
                position: "right", 
                label: "Texto", 
                action: "replaceText" 
            },
            { 
                position: "left", 
                label: "Continuar", 
                action: "3_room_1.jpg" 
            }
        ]
    },
    "3_room_1.jpg": {
        type: "image",
        file: "media/3_room_1.jpg",
        overlays: [
            { position: "right", label: "Foto", action: "4_photo.jpg" },
            { position: "center", label: "Minha Mãe", action: "6_minha_mae.jpg" },
            { position: "left", label: "Nove Dias", action: "7_nove_dias.jpg" },
            { position: "bottom", label: "Sala 2", action: "8_book_sign.jpg" }
        ]
    },
    "4_photo.jpg": {
        type: "image",
        file: "media/4_photo.jpg",
        overlays: [
            { position: "southwest", label: "Sala 1", action: "3_room_1.jpg" },
            { position: "southeast", label: "Ver vídeo", action: "5_video.mp4" }
        ]
    },
    "5_video.mp4": {
        type: "video",
        file: "media/5_video.mp4",
        overlays: [
            { position: "southwest", label: "Sala 1", action: "3_room_1.jpg" }
        ]
    },
    "6_minha_mae.jpg": {
        type: "image",
        file: "media/6_minha_mae.jpg",
        overlays: [
            { position: "southwest", label: "Sala 1", action: "3_room_1.jpg" },
            { 
                position: "southeast", 
                label: "Ficha técnica", 
                action: "showInfo",
                info: {
                    artist: "Miriam Tolpolar",
                    title: "Minha Mãe",
                    technique: "Litografia sobre lenços",
                    year: "2024"
                }
            }
        ]
    },
    "7_nove_dias.jpg": {
        type: "image",
        file: "media/7_nove_dias.jpg",
        overlays: [
            { position: "southwest", label: "Sala 1", action: "3_room_1.jpg" },
            { 
                position: "southeast", 
                label: "Ficha técnica", 
                action: "showInfo",
                info: {
                    artist: "Miriam Tolpolar",
                    title: "Nove Dias",
                    technique: "Litografia sobre lenços",
                    year: "2025"
                }
            }
        ]
    },
    "8_book_sign.jpg": {
        type: "image",
        file: "media/8_book_sign.jpg",
        overlays: [
            { 
                position: "southwest", 
                label: "Assinar livro", 
                action: "openLink",
                link: "https://test.com"
            },
            { 
                position: "southeast", 
                label: "Sala 2", 
                action: "9_room_2_first.jpg" 
            }
        ]
    },
    "9_room_2_first.jpg": {
        type: "image",
        file: "media/9_room_2_first.jpg",
        overlays: [
            { position: "right", label: "Yom Kippur", action: "10_yom_kippur.jpg" },
            { position: "center", label: "Quimera", action: "11_quimera.jpg" }
        ]
    },
    "10_yom_kippur.jpg": {
        type: "image",
        file: "media/10_yom_kippur.jpg",
        overlays: [
            { position: "southwest", label: "Sala 2", action: "9_room_2_first.jpg" },
            { 
                position: "southeast", 
                label: "Ficha técnica", 
                action: "showInfo",
                info: {
                    artist: "Miriam Tolpolar",
                    title: "Yom Kippur (Dia do Perdão)",
                    technique: "Litografia sobre lenços",
                    year: "2023"
                }
            }
        ]
    },
    "11_quimera.jpg": {
        type: "image",
        file: "media/11_quimera.jpg",
        overlays: [
            { position: "southwest", label: "Sala 2", action: "12_room_2_second.jpg" },
            { 
                position: "southeast", 
                label: "Ficha técnica", 
                action: "showInfo",
                info: {
                    artist: "Miriam Tolpolar",
                    title: "Quimera",
                    technique: "Litografia sobre lenços",
                    year: "2025"
                }
            }
        ]
    },
    "12_room_2_second.jpg": {
        type: "image",
        file: "media/12_room_2_second.jpg",
        overlays: [
            { position: "right", label: "Meus Mortos", action: "13_meus_mortos_meus_vivos.jpg" },
            { position: "center", label: "Passante", action: "14_passante_fio_da_vida.jpg" }
        ]
    },
    "13_meus_mortos_meus_vivos.jpg": {
        type: "image",
        file: "media/13_meus_mortos_meus_vivos.jpg",
        overlays: [
            { position: "southwest", label: "Sala 2", action: "12_room_2_second.jpg" },
            { 
                position: "southeast", 
                label: "Ficha técnica", 
                action: "showInfo",
                info: {
                    artist: "Miriam Tolpolar",
                    title: "Meus Mortos, Meus Vivos",
                    technique: "Litografia sobre lenços",
                    year: "2004"
                }
            }
        ]
    },
    "14_passante_fio_da_vida.jpg": {
        type: "image",
        file: "media/14_passante_fio_da_vida.jpg",
        overlays: [
            { position: "southwest", label: "Sala 2", action: "12_room_2_second.jpg" },
            { 
                position: "southeast", 
                label: "Ficha técnica", 
                action: "showInfo",
                info: {
                    artist: "Miriam Tolpolar",
                    title: "Passante; Fio da Vida",
                    technique: "Litografia e caneta esferográfica sobre lenços; Litografia sobre toalha de mesa",
                    year: "2024/2025; 2021"
                }
            }
        ]
    }
};

// DOM elements
const tourImage = document.getElementById('tour-image');
const tourVideo = document.getElementById('tour-video');
const overlaysContainer = document.getElementById('overlays-container');
const infoModal = document.getElementById('info-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

// Position mapping
const positionMap = {
    center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    northeast: { top: '20%', right: '20%' },
    northwest: { top: '20%', left: '20%' },
    southeast: { bottom: '20%', right: '20%' },
    southwest: { bottom: '20%', left: '20%' },
    top: { top: '20%', left: '50%', transform: 'translateX(-50%)' },
    bottom: { bottom: '20%', left: '50%', transform: 'translateX(-50%)' },
    left: { top: '50%', left: '20%', transform: 'translateY(-50%)' },
    right: { top: '50%', right: '20%', transform: 'translateY(-50%)' }
};

// Current scene
let currentScene = '1_entrance.jpg';

// Initialize tour
function initTour() {
    loadScene(currentScene);
    
    // Event listeners
    closeModal.addEventListener('click', () => {
        infoModal.style.display = 'none';
    });
    
    window.addEventListener('resize', () => {
        loadScene(currentScene); // Re-position overlays on resize
    });
}

// Load a scene
function loadScene(sceneId) {
    currentScene = sceneId;
    const scene = scenes[sceneId];
    
    if (!scene) {
        console.error(`Scene ${sceneId} not found`);
        return;
    }
    
    // Set media source
    if (scene.type === 'image') {
        tourImage.src = scene.file;
        tourImage.style.display = 'block';
        tourVideo.style.display = 'none';
        tourVideo.pause();
    } else {
        tourVideo.src = scene.file;
        tourVideo.style.display = 'block';
        tourImage.style.display = 'none';
        tourVideo.play();
    }
    
    // Clear existing overlays
    overlaysContainer.innerHTML = '';
    
    // Create overlays
    scene.overlays.forEach(overlay => {
        const overlayEl = document.createElement('div');
        overlayEl.className = 'overlay' + (overlay.action === 'showInfo' ? ' info' : '');
        overlayEl.textContent = overlay.label;
        
        // Apply position styles
        Object.assign(overlayEl.style, positionMap[overlay.position]);
        
        // Add click handler
        overlayEl.addEventListener('click', () => handleOverlayClick(overlay));
        
        overlaysContainer.appendChild(overlayEl);
    });
}

// Handle overlay click
function handleOverlayClick(overlay) {
    switch (overlay.action) {
        case 'showInfo':
            showArtInfo(overlay.info);
            break;
        case 'replaceText':
            replaceText();
            break;
        case 'openLink':
            window.open(overlay.link, '_blank');
            break;
        default:
            loadScene(overlay.action);
    }
}

// Show art information
function showArtInfo(info) {
    modalBody.innerHTML = `
        <h3>${info.title}</h3>
        <p><strong>Artista:</strong> ${info.artist}</p>
        <p><strong>Técnica:</strong> ${info.technique}</p>
        <p><strong>Ano:</strong> ${info.year}</p>
    `;
    infoModal.style.display = 'flex';
}

// Replace text in scene 2
function replaceText() {
    const scene = scenes['2_text.jpg'];
    const textOverlay = scene.overlays.find(o => o.position === 'northeast');
    
    if (textOverlay) {
        textOverlay.label = "Replacement text";
        loadScene('2_text.jpg'); // Reload to update
    }
}

// Start the tour when page loads
window.addEventListener('load', initTour);
