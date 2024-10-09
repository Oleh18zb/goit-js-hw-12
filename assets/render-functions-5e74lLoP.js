import{S as c,i as a}from"./vendor-Draw1i9A.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();let l;function u(t){const s=document.querySelector(".gallery");s.innerHTML+=t.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-item">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </a>
  `).join(""),l?l.refresh():l=new c(".gallery a")}function f(t){a.error({title:"Error",message:t})}function p(){const t=document.querySelector(".loader");t.style.display="block"}function m(){const t=document.querySelector(".loader");t.style.display="none"}function y(t){return t.map(({urls:{small:s,full:r},alt_description:i})=>`
  <li><a href="${r}"><img data-source="${r}" src="${s}" alt="${i}"></a></li>`).join("")}export{p as a,y as c,m as h,u as r,f as s};
//# sourceMappingURL=render-functions-5e74lLoP.js.map
