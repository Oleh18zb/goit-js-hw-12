import{S as d,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const y="46168146-32b0147d59d6daaf7b97d8253",m="https://pixabay.com/api/";async function p(t){const o=await fetch(`${m}?key=${y}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`);if(!o.ok)throw new Error("Failed to fetch images");return o.json()}let i;function h(t){const o=document.querySelector(".gallery");o.innerHTML=t.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-item">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </a>
  `).join(""),i?i.refresh():i=new d(".gallery a")}function a(t){f.error({title:"Error",message:t})}function g(){const t=document.querySelector(".loader");t.style.display="block"}function l(){const t=document.querySelector(".loader");t.style.display="none"}const L=document.querySelector(".search-form"),w=document.querySelector(".search-input"),u=document.querySelector(".gallery");L.addEventListener("submit",async t=>{t.preventDefault();const o=w.value.trim();if(o===""){a("Please enter a search query");return}g(),u.innerHTML="";try{const r=await p(o);l(),r.hits.length===0?a("Sorry, there are no images matching your search query. Please try again!"):h(r.hits)}catch{l(),u.innerHTML="",a("Failed to fetch images. Please try again later.")}});
//# sourceMappingURL=index.js.map
