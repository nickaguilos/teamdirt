document.getElementById('menuBtn')?.addEventListener('click',()=>{
  const m = document.getElementById('mobileNav');
  if(!m) return;
  m.classList.toggle('hidden');
});
document.getElementById('year').textContent = new Date().getFullYear();

// import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';