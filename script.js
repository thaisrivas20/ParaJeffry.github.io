document.addEventListener('DOMContentLoaded', () => {
    // 1. LISTA DE CANCIONES Y DATOS
    const playlist = [
        { 
            title: "Wet Hands", 
            artist: "C418", 
            src: "mc2.mp3", 
            cover: "portada1.jpg"
        },
        { 
            title: "Haggstrom", 
            artist: "C418", 
            src: "mc.mp3", 
            cover: "portada2.jpg" 
        },
        {
            title: "Si Supieras", 
            artist: "Panda", 
            src: "Si Supieras.mp3", 
            cover: "portada3.jpg" 
        },
        {
            title: "Amor completo", 
            artist: "Mon Laferte", 
            src: "Amor Completo.mp3",
            cover: "portada4.jpg" 
        },
        {
            title: "Flaco", 
            artist: "Mon Laferte", 
            src: "Flaco.mp3",
            cover: "portada5.jpg" 
        },
        {
            title: "Beso", 
            artist: "Jósean Log", 
            src: "Beso.mp3", 
            cover: "portada6.jpeg" 
        },
        {
            title: "Cómo te extraño", 
            artist: "Leo Dan", 
            src: "Cómo Te Extraño Mi Amor.mp3", 
            cover: "portada7.jpg" 
        },
        {
            title: "canción de SEX0", 
            artist: "Soda Estereo", 
            src: "Entre Caníbales.mp3", 
            cover: "portada8.gif" 
        },
         {
            title: "Puente", 
            artist: "Gustavo Cerote", 
            src: "Puente .mp3", 
            cover: "portada9.jpg" 
        },
        {
            title: "Buddy Holly",
            artist: "Weezer",
            src: "Buddy Holly.mp4",
            cover: "portada10.jpg"
        },
        {
            title: "Pretty Boy",
            artist: "The neighbourhood",
            src: "Pretty Boy.mp3",
            cover: "portada11.jpeg"
        },
        {
            title: "Desgarrame",
            artist: "La texana",
            src: "Desgárrame.mp3",
            cover: "portada12.jpg"
        },
    ];

    let currentSongIndex = 0; 

    const audio = new Audio(); 
    audio.id = 'audioPlayer';

    const playPauseBtn = document.querySelector('.play-pause-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeSpan = document.querySelector('.current-time');
    const totalTimeSpan = document.querySelector('.total-time');
    const titleDiv = document.querySelector('.song-info .title');
    const artistDiv = document.querySelector('.song-info .artist');
    const coverImg = document.querySelector('.album-art-square img');

    function loadSong(index) {
        const song = playlist[index];
        audio.src = song.src;
        titleDiv.textContent = song.title;
        artistDiv.textContent = song.artist;
        coverImg.src = song.cover;
        
        // Carga y reproduce
        audio.load();
        if (playPauseBtn.innerHTML === '⏸') {
            audio.play();
        }
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
    }

    function playPrevSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
    }
    nextBtn.addEventListener('click', playNextSong);
    prevBtn.addEventListener('click', playPrevSong);
    audio.addEventListener('ended', playNextSong);


    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '⏸';
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '▶';
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60).toString().padStart(2, '0');
        totalTimeSpan.textContent = `${minutes}:${seconds}`;
        progressBar.max = duration;
    });

    audio.addEventListener('timeupdate', () => {
        progressBar.value = audio.currentTime;
        
        const current = audio.currentTime;
        const minutes = Math.floor(current / 60);
        const seconds = Math.floor(current % 60).toString().padStart(2, '0');
        currentTimeSpan.textContent = `${minutes}:${seconds}`;
    });

    progressBar.addEventListener('input', () => {
        audio.currentTime = progressBar.value;
    });
    loadSong(currentSongIndex);
});

// carrucel fotos 
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "n4.jpeg", 
        "n3.jpeg",
        "n1.jpeg", 
        "n5.jpeg",
        "n8.gif",
        "n6.jpeg",
        "n7.jpeg",
        "n2.gif",
        "n8.jpeg",
        "n9.jpeg",
        "n10.jpeg",
        "n11.jpeg"
        
    ];

    const carouselSlide = document.querySelector('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    function setupCarousel() {
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Gatito ${images.indexOf(src) + 1}`;
            img.classList.add('carousel-img');
            carouselSlide.appendChild(img);
        });
    }
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselSlide.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1;
        }
        updateCarousel();
    });
    setupCarousel();
    updateCarousel(); 
});
document.addEventListener('DOMContentLoaded', () => {
    
    const backgroundGifs = [
        'https://bettysgraphics.neocities.org/images/backgrounds/pattern%2016.jpg', 
        'https://bettysgraphics.neocities.org/images/backgrounds/pattern%20238.gif', 
        'https://bettysgraphics.neocities.org/images/backgrounds/stars%202.gif',      
        'https://bettysgraphics.neocities.org/images/backgrounds/water.gif',       
        'https://bettysgraphics.neocities.org/images/backgrounds/pattern%20623.gif',
        'https://bettysgraphics.neocities.org/images/backgrounds/bubbles%204.gif',
        'https://bettysgraphics.neocities.org/images/backgrounds/pattern%20155.gif',
        'https://bettysgraphics.neocities.org/images/backgrounds/strawberries%202.gif',
        'https://bettysgraphics.neocities.org/images/backgrounds/pattern%20198.gif',
        'https://bettysgraphics.neocities.org/images/backgrounds/104.GIF'
        
    ];

    let currentBackgroundIndex = 0;
    const intervalTime = 60 * 1000; 
    const backgroundLayer = document.getElementById('background-layer'); 

    function changeBackground() {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundGifs.length;
        const nextGif = backgroundGifs[currentBackgroundIndex];
        backgroundLayer.style.opacity = 0;
        setTimeout(() => {
            backgroundLayer.style.backgroundImage = `url('${nextGif}')`;
            backgroundLayer.style.opacity = 1; 
        }, 500);
    }
    backgroundLayer.style.opacity = 1; 
    setInterval(changeBackground, intervalTime);
});
document.addEventListener('DOMContentLoaded', () => {
    const carta = document.getElementById('cartaAbrible');
    const modal = document.getElementById('modal-carta');
    const cerrarModalBtn = document.getElementById('cerrar-modal'); 
    const body = document.body; 
    function abrirCarta() {
        body.classList.add('fondo-borroso'); 
        modal.classList.add('modal-mostrar');
        setTimeout(() => {
            modal.classList.remove('modal-oculto');
            modal.classList.add('modal-visible');
        }, 10); 
    }

    function cerrarCarta() {
        modal.classList.remove('modal-visible');
        modal.classList.add('modal-oculto');
        setTimeout(() => {
            modal.classList.remove('modal-mostrar');
            body.classList.remove('fondo-borroso');
        }, 300); 
    }

    carta.addEventListener('click', abrirCarta);
    cerrarModalBtn.addEventListener('click', cerrarCarta);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarCarta();
        }
    });
    modal.classList.add('modal-oculto');
});

document.addEventListener('DOMContentLoaded', () => {

    const gatito = document.getElementById('gatitoAfortunado');
    const contenedorFortuna = document.getElementById('contenedor-fortuna'); 
    if (gatito && contenedorFortuna) {
        gatito.addEventListener('click', () => {
            if (contenedorFortuna.classList.contains('visible')) {
                return;
            }
            contenedorFortuna.classList.remove('oculto');
            contenedorFortuna.classList.add('visible');

            setTimeout(() => {
                contenedorFortuna.classList.add('romper');
            }, 10); 
            const totalAnimationTime = 4000;
            setTimeout(() => {
                contenedorFortuna.classList.remove('romper');
                contenedorFortuna.classList.remove('visible');
                contenedorFortuna.classList.add('oculto');
                
            }, totalAnimationTime);
        });
    } else {
        console.error("Error");
    }
});


