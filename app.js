const models = [
  {name:"iX1", type:"SUV", tags:["electric"], drive:"Fully electric", power:"204 hp", zero:"8.6 s", character:"Smart & versatile", image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85", desc:"A compact electric SUV combining everyday practicality with quiet, instant electric response."},
  {name:"i5", type:"Sedan", tags:["electric","sedan"], drive:"Fully electric", power:"340 hp", zero:"6.0 s", character:"Executive electric", image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85", desc:"Business-class comfort with a fully electric drivetrain and a technology-focused cabin."},
  {name:"i7", type:"Sedan", tags:["electric","sedan"], drive:"Fully electric", power:"544 hp", zero:"4.7 s", character:"Luxury", image:"https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85", desc:"BMW's flagship electric sedan, built around long-distance luxury and digital innovation."},
  {name:"X1", type:"SUV", tags:["suv"], drive:"Petrol / Diesel", power:"150–204 hp", zero:"7.7–9.2 s", character:"Urban adventure", image:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85", desc:"A premium compact SUV with confident proportions, flexible space and modern technology."},
  {name:"X3", type:"SUV", tags:["suv"], drive:"Petrol / Diesel", power:"190–258 hp", zero:"6.2–8.5 s", character:"Balanced SUV", image:"https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=85", desc:"A versatile mid-size SUV designed for confident daily driving and long journeys."},
  {name:"X5", type:"SUV", tags:["suv"], drive:"Petrol / Diesel", power:"286–530 hp", zero:"4.8–6.1 s", character:"Luxury SAV", image:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85", desc:"A spacious Sports Activity Vehicle combining commanding presence, comfort and strong performance."},
  {name:"X6", type:"SAV Coupé", tags:["suv","m"], drive:"Petrol", power:"530 hp", zero:"4.3 s", character:"Bold & athletic", image:"https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85", desc:"Dramatic coupé styling meets the presence and versatility of a BMW X model."},
  {name:"X7", type:"SUV", tags:["suv"], drive:"Petrol / Diesel", power:"340–381 hp", zero:"5.8–6.1 s", character:"Flagship SUV", image:"https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=85", desc:"Three-row luxury, premium space and effortless long-distance capability."},
  {name:"2 Series", type:"Gran Coupé", tags:["sedan"], drive:"Petrol", power:"156–204 hp", zero:"7.8–8.8 s", character:"Compact sport", image:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=85", desc:"A compact BMW with expressive design, agile dynamics and everyday usability."},
  {name:"3 Series", type:"Sedan", tags:["sedan"], drive:"Petrol / Diesel", power:"190–374 hp", zero:"4.4–7.4 s", character:"Sport sedan", image:"https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=85", desc:"The benchmark sport sedan: balanced handling, premium comfort and iconic BMW character."},
  {name:"5 Series", type:"Sedan", tags:["sedan"], drive:"Petrol / Diesel", power:"190–340 hp", zero:"5.9–7.5 s", character:"Business athlete", image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85", desc:"A sophisticated executive sedan with a strong focus on comfort, technology and driving pleasure."},
  {name:"7 Series", type:"Sedan", tags:["sedan"], drive:"Petrol / Diesel / Electric", power:"286–544+ hp", zero:"4.7–6.7 s", character:"Flagship luxury", image:"https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85", desc:"BMW flagship luxury with first-class rear comfort, advanced digital features and powerful drivetrains."},
  {name:"M2", type:"Coupé", tags:["m"], drive:"Twin-turbo petrol", power:"480 hp", zero:"4.0 s", character:"Compact M", image:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85", desc:"A compact high-performance coupé with rear-biased dynamics and classic BMW M attitude."},
  {name:"M4", type:"Coupé", tags:["m"], drive:"Twin-turbo petrol", power:"530 hp", zero:"3.5 s", character:"Track-bred", image:"https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=85", desc:"A high-performance coupé engineered for precision, speed and everyday usability."},
  {name:"M5", type:"Sedan", tags:["m","sedan"], drive:"V8 plug-in hybrid", power:"727 hp", zero:"3.5 s", character:"Super-sedan", image:"https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=85", desc:"A super-sedan blending electrified performance with the presence and comfort of the 5 Series."},
  {name:"XM", type:"SUV", tags:["m","suv"], drive:"V8 plug-in hybrid", power:"748 hp", zero:"3.8 s", character:"M flagship SUV", image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85", desc:"The first BMW M original since the M1, combining electrified V8 power with bold SUV design."},
  {name:"Z4", type:"Roadster", tags:["m"], drive:"Turbo petrol", power:"340 hp", zero:"4.5 s", character:"Open-air sports", image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=85", desc:"A classic two-seat roadster focused on open-air driving and agile sports-car dynamics."}
];

const grid = document.getElementById("grid");
const count = document.getElementById("count");
const search = document.getElementById("search");
let active = "all";

function render(){
  const q = search.value.trim().toLowerCase();
  const filtered = models.filter(m =>
    (active === "all" || m.tags.includes(active)) &&
    (!q || (m.name+" "+m.type+" "+m.drive).toLowerCase().includes(q))
  );
  count.textContent = `${filtered.length} models`;
  grid.innerHTML = filtered.map((m,i)=>`
    <article class="card" onclick="openModal(${models.indexOf(m)})">
      <div class="card-img"><img loading="lazy" src="${m.image}" alt="BMW ${m.name}"></div>
      <div class="card-body">
        <p class="eyebrow">${m.type}</p>
        <h3>BMW ${m.name}</h3>
        <div class="meta">${m.drive} · ${m.power}</div>
        <div class="discover">DISCOVER DETAILS →</div>
      </div>
    </article>`).join("");
}
function applyFilter(filter){
  active=filter;
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));
  document.getElementById("models").scrollIntoView({behavior:"smooth"});
  render();
}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>applyFilter(b.dataset.filter)));
search.addEventListener("input",render);

function openModal(index){
  const m=models[index];
  document.getElementById("modalImage").src=m.image;
  document.getElementById("modalImage").alt="BMW "+m.name;
  document.getElementById("modalType").textContent=m.type;
  document.getElementById("modalName").textContent="BMW "+m.name;
  document.getElementById("modalTagline").textContent=m.character;
  document.getElementById("modalDescription").textContent=m.desc;
  document.getElementById("modalDrive").textContent=m.drive;
  document.getElementById("modalPower").textContent=m.power;
  document.getElementById("modalZero").textContent=m.zero;
  document.getElementById("modalCharacter").textContent=m.character;
  document.getElementById("modal").classList.add("open");
  document.getElementById("modal").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}
function closeModal(){
  document.getElementById("modal").classList.remove("open");
  document.getElementById("modal").setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
render();
