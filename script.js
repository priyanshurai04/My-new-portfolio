const ring = document.getElementById('profileRing');
const hint = document.getElementById('ringHint');
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

ring.addEventListener('click', () => {
  const enabled = ring.classList.toggle('glow');
  ring.setAttribute('aria-pressed', String(enabled));
  hint.textContent = enabled ? 'Purple glow activated ✨ Tap again to switch it off' : 'Tap the portrait for a little magic ✨';
});

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();
