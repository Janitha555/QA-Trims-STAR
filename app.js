// Function to generate the gallery items
const gallery = document.getElementById('image-gallery');

// Your images array (Placeholder names used here)
// ඔබට පුළුවන් ඔබේ folder එකේ ඇති images ටික මෙහි array එකකට දාන්න
const imageCount = 52; 

for (let i = 1; i <= imageCount; i++) {
    const card = document.createElement('div');
    card.className = "bg-white p-2 rounded shadow hover:scale-105 transition-transform cursor-pointer border border-slate-300";
    
    card.innerHTML = `
        <div class="h-32 bg-slate-100 flex items-center justify-center text-xs text-slate-400 mb-2">
            IMG ${i}
        </div>
        <p class="text-[10px] text-center font-bold text-slate-500 uppercase tracking-tighter">Slide Visual ${i}</p>
    `;
    
    gallery.appendChild(card);
}

// Simple Scroll Animation Logic
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        if (top >= offset) {
            sec.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});