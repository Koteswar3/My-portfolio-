// Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "10px";
toggleBtn.style.right = "10px";
toggleBtn.style.padding = "10px";
toggleBtn.style.zIndex = "999";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll Animation
const faders = document.querySelectorAll('.fade-in-scroll');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Typing Animation
const text = "Thothadi Koteswara Rao";
let index = 0;

function typeWriter() {
  const typingTarget = document.getElementById("typing-text");
  if (index < text.length) {
    typingTarget.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;
