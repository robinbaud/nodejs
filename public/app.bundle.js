(()=>{"use strict";!async function(){try{const t=await async function(){return(await fetch("https://api.gill-cote-bistro.fr/histoires?_sort=id:asc")).json()}();console.log(t);const e=await async function(){return(await fetch("https://api.gill-cote-bistro.fr/specials?_sort=id:asc")).json()}();console.log(e);const n=await async function(){return(await fetch("https://api.gill-cote-bistro.fr/suggestions?_sort=id:asc")).json()}();console.log(n);const o="https://api.gill-cote-bistro.fr";let s=document.createElement("div");s.innerHTML=t[0].first_paragraph,document.querySelector("#histoire").appendChild(s);for(let t=0;t<e.length;t++){let n=document.createElement("h2");n.textContent=e[t].title;let s=document.createElement("img");s.src=o+e[t].image.url;let c=document.createElement("p");c.textContent=e[t].description,document.querySelector(".special").append(n,s,c)}let c=document.createElement("h3");c.textContent=n[0].suggestionsStarter;let r=document.createElement("p");r.textContent=n[0].suggestionsStarterPrice;let i=document.createElement("h3");i.textContent=n[0].suggestionsPie;let l=document.createElement("p");l.textContent=n[0].suggestionsPiePrice;let a=document.createElement("h3");a.textContent=n[0].suggestionsMain;let u=document.createElement("p");u.textContent=n[0].suggestionsMainPrice;let g=document.createElement("h3");g.textContent=n[0].suggestionsDessert;let m=document.createElement("p");m.textContent=n[0].suggestionsDessertPrice,document.querySelector(".suggestion").append(c,r,i,l,a,u,g,m)}catch(t){console.log("Error",t)}}()})();