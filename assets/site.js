(function(){
var d=document,de=d.documentElement;
var dr=d.getElementById('mobdrawer'),ov=d.getElementById('mobov'),hb=d.querySelector('.hamburger');
function openM(){dr.classList.add('open');ov.classList.add('open');de.style.overflow='hidden';if(hb)hb.setAttribute('aria-expanded','true');}
function closeM(){dr.classList.remove('open');ov.classList.remove('open');de.style.overflow='';if(hb)hb.setAttribute('aria-expanded','false');}
if(hb&&dr){hb.addEventListener('click',openM);ov.addEventListener('click',closeM);var c=d.querySelector('.mob-close');if(c)c.addEventListener('click',closeM);
dr.addEventListener('click',function(e){if(e.target.tagName==='A')closeM();});
d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});
window.addEventListener('resize',function(){if(window.innerWidth>768)closeM();});}
d.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){
var it=b.parentNode,a=it.querySelector('.faq-a'),o=it.classList.toggle('open');
b.setAttribute('aria-expanded',o?'true':'false');a.style.maxHeight=o?a.scrollHeight+'px':'0';});});
})();
