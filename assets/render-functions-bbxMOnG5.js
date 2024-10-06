import{S as c,i as a}from"./vendor-DhR_lzGM.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();let n;function u(o){const s=document.querySelector(".gallery");s.innerHTML+=o.map(t=>`
    <a href="${t.largeImageURL}" class="gallery-item">
      <img src="${t.webformatURL}" alt="${t.tags}" />
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </a>
  `).join(""),n?n.refresh():n=new c(".gallery a")}function f(o){a.error({title:"Error",message:o})}function p(){const o=document.querySelector(".loader");o.style.display="block"}function m(){const o=document.querySelector(".loader");o.style.display="none"}function y(o){return o.map(({urls:{small:s,full:t},alt_description:i})=>`
  <li><a href="${s}"><img src="${s}" alt="${i}"></a></li>`).join("")}export{p as a,y as c,m as h,u as r,f as s};
//# sourceMappingURL=render-functions-bbxMOnG5.js.map
