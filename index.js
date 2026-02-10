let heartInterval;

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const overlay = document.getElementById('photo-overlay');
    
    envelope.classList.add('open');
    
    setTimeout(() => {
        overlay.classList.add('visible');
        startHearts();
    }, 600);
}

function closeEnvelope() {
    const envelope = document.querySelector('.envelope');
    const overlay = document.getElementById('photo-overlay');
    overlay.classList.remove('visible');
    stopHearts(); 
    setTimeout(() => {
        envelope.classList.remove('open');
    }, 300);
}

// --- LÓGICA DE CORAZONES ---

function createHeart() {
    const container = document.getElementById('hearts-container');
    
    if (!container) return;

    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️'; 
    
    heart.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 20 + 20; 
    heart.style.fontSize = size + 'px';
    
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; 
    
    container.appendChild(heart);

    // Eliminar el corazón del HTML después de 5 segundos para no saturar la memoria
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function startHearts() {
    heartInterval = setInterval(createHeart, 300);
}

function stopHearts() {
    clearInterval(heartInterval);
    const container = document.getElementById('hearts-container');
    if (container) {
        container.innerHTML = '';
    }
}