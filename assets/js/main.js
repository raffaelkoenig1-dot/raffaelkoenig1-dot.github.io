
function toggleMenu(){
  const nav = document.getElementById('mainnav');
  if(!nav) return;
  if(nav.classList.contains('hidden')){
    nav.classList.remove('hidden');
    nav.classList.add('flex','flex-col','gap-4','absolute','right-4','top-14','bg-white','p-4','rounded-xl','shadow-lg','border');
  } else {
    nav.classList.add('hidden');
    nav.classList.remove('flex','flex-col','gap-4','absolute','right-4','top-14','bg-white','p-4','rounded-xl','shadow-lg','border');
  }
}
