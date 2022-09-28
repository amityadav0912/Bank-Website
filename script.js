'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e)
{
  //const s1coords = section1.getBoundingClientRect();
  // window.scrollTo(
  // s1coords.left+window.pageXOffset,
  // s1coords.top+window.pageYOffset);

  // window.scrollTo({
  //   left:s1coords.left+window.pageXOffset,
  //   top: s1coords.top+window.pageYOffset,
  //   behavior : 'smooth'
  // })
  
  section1.scrollIntoView({
    behavior:'smooth'
  });

});

// Page navigation 

// document.querySelectorAll('.nav__link').forEach(
//   function(el)
//   {
//     el.addEventListener('click',function(e)
//     {
//       e.preventDefault();
//       const id = this.getAttribute('href');
//      // console.log(id);
//      document.querySelector(id).scrollIntoView({behavior:'smooth'});
//     })
//   }
// )

document.querySelector('.nav__links').addEventListener('click',function(e)
{  
   e.preventDefault();
   // matching stratergy 
   if(e.target.classList.contains('nav__link'))
   {
    const id =e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView
    ({behavior:'smooth'});
   }
})

// Tabbed Component 

const tabs = document.querySelectorAll
('.operations__tab');
const tabsContainer =  document.querySelector
('.operations__tab-container');
const tabsContent=document.querySelectorAll
('.operations__content');

tabsContainer.addEventListener('click',function(e)
{
  const clicked = e.target.closest('.operations__tab');
  // guard clause
  if(!clicked) return;
  // other wise move on
  tabs.forEach(t=> t.classList.remove
    ('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove
    ('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  document.querySelector(`.operations__content--${clicked
    .dataset.tab}`)
    .classList.add('operations__content--active');

});


// Menu fade animation 

const handleHover = function(e,opacity)

{
  if(e.target.classList.contains('nav__link'))
   {
     const link = e.target;
     const siblings = link.closest('.nav').
     querySelectorAll('.nav__link');
     const logo =link.closest('.nav').querySelector('img');

     siblings.forEach(el => {
       if(el!==link) el.style.opacity = opacity;
     });
     logo.style.opacity = opacity;
   }
}

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover',function(e)
{
   handleHover(e,0.5);
})
nav.addEventListener('mouseout',function(e)
{
  handleHover(e,1);
})



//sticky navingation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll',function()
// {
//   //console.log(window.scrollY);
//   if(window.scrollY > initialCoords.top)
//   {
//     nav.classList.add('sticky');
//   }else
//   {
//     nav.classList.remove('sticky');
//   }
// });

// stick navingation : intersection ovserver API

// const obsCallBack = function(entries,observer)
// {
//   entries.forEach( entry => {
//     console.log(entry);
//   })
// }

// const obsOptions ={
//   root : null,
//   threshold : [0,0.2],
// }
// const observer = new IntersectionObserver
// (obsCallBack,obsOptions);
// observer.observe(section1);


const header =  document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function(entries)
{
  const [entry]= entries;
  if(!entry.isIntersecting) nav.classList.add
  ('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(
  stickyNav,{
    root : null,
    threshold:0,
    rootMargin:`-${navHeight}px`
  }
);
headerObserver.observe(header);

// reveal section 
const allSection = document.querySelectorAll('.section');

const revealSection = function(entries,observer)
{
   const [entry] = entries;
   //console.log(entry);
   if(!entry.isIntersecting) return ;
   entry.target.classList.remove('section--hidden');
   observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection,
  {
      root: null,
      threshold : 0.15,
  });
allSection.forEach(function(section)
{
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})

// Lazy loading images 

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries,observer)
{
   const [entry] = entries;
   //console.log(entry);

   if(!entry.isIntersecting) return;
   
   entry.target.src=entry.target.dataset.src;
   
   entry.target.addEventListener('load',function()
   {
    entry.target.classList.remove('lazy-img');
   }
   );
   observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg,
  {
      root:null,
      threshold : 0,
     // rootMargin: '200px'
  })

imgTargets.forEach(img => imgObserver.observe(img));

// Slider 

const slides = document.querySelectorAll('.slide')












//////////////////////////
///////////////////////////
//////////////////////////////
///////////////////////////////


// console.log(document.documentElement);
// console.log(document.querySelector('Header'));
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);
// const header = document.querySelector('header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.append(message);

// //header.before(message.cloneNode(true));

// // delete

// document.querySelector('.btn--close-cookie').addEventListener('click',function(){
//   //  message.remove();
//   message.parentElement.removeChild(message);
// });

// // styles 

// message.style.backgroundColor='#989222';
// message.style.width='120%';



// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click',function(e)
// {
//   const s1coords = section1.getBoundingClientRect();
//   window.scrollTo(s1coords.left+window.pageXOffset, s1coords.top+window.pageYOffset);
// });

// const h1 = document.querySelector('h1');

// const alet1 = function(e)
// {
//   alert('add event listener : great you are reading the heading and clicked on it')
//   //h1.removeEventListener('mouseenter',alet1);
// }
// h1.addEventListener('mouseenter', alet1);


// const randomInt = (min,max) => 
//      Math.floor(Math.random() * (max-min+1 )+min);
// const randomColor = ()=>
// `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// console.log(randomColor());
// // document.querySelector('.nav__link').addEventListener('click',function(e){
// //   this.style.backgroundColor=randomColor();
// // });

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()});

// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor()});

// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor()});


// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// h1.firstElementChild.style.color='red';
// h1.lastElementChild.style.color='pink';


//console.log(h1.parentNode);

// finding parents 

// h1.closest('.header').style.background = 
// 'var(--color-tertiary-darker)';

