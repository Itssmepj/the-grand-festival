/* ════════ CONFIG — personalise here ════════ */
var START_DATE = "2025-10-21T00:00:00"; // the day you found each other
var GALLERY = [
  {img:"", k:"Potato Being Cute", t:"Potato Being Cute", h:240},
  {img:"", k:"My Favorite Smile", t:"My Favorite Smile", h:180},
  {img:"", k:"Rasgulla Mode Activated", t:"Rasgulla Mode Activated", h:300},
  {img:"", k:"Just Us", t:"Just Us", h:200},
  {img:"", k:"My Sunshine", t:"My Sunshine", h:260},
  {img:"", k:"A Memory I'll Keep Forever", t:"A Memory I'll Keep Forever", h:190},
];
var MAP_POINTS = [
  {x:12,y:46,k:"21 October 2025",t:"The day we found each other"},
  {x:44,y:20,k:"4 January 2026",t:"First met — Jodhpur boy, Jaipur girl"},
  {x:72,y:34,k:"Grand Anukampa, Jaipur",t:"Our second home"},
  {x:90,y:14,k:"Wherever we go next",t:"288 km today — no distance tomorrow"},
];
var EGG_NOTES = [
  "Hey Love ❤️",
  "Potato, you're my favorite notification.",
  "Rasgulla, I still get excited when you text me.",
  "Sunshine, thank you for making ordinary days beautiful.",
  "My Sukoon, life became softer after you.",
  "Kucchu Pucchu, yes this website has secret messages because I'm dramatic(huihuihui).",
];
var GIFTS = [
  {emoji:"🖼️", name:"Mahadev & His Painting", why:"Because some things are sacred — and so are you."},
  {emoji:"📖", name:"A Book For Him", why:"A gesture, from my 25th birthday celebrated as a grand festival, to you."},
  {emoji:"💌", name:"31 Handmade Cards", why:"One for every day from the 1st of July — your qualities, and cute little things, in my handwriting."},
  {emoji:"✉️", name:"31 Daily Mails", why:"A reminder every single day of how damn precious you are to me."},
  {emoji:"💡", name:'Neon: "Are You a Trader?"', why:"Our very, very first message — the one it all started from."},
  {emoji:"📰", name:"A Magazine Of Him", why:"A whole magazine, celebrating you. Cover star: my favorite person."},
  {emoji:"🧸", name:"A Soft Toy", why:"Because you're my small baby."},
  {emoji:"🎴", name:"A Handmade Card", why:"Made by hand, made with everything I feel."},
  {emoji:"👕", name:"A Cute T-Shirt", why:"Something playful — a little about me, a little about us."},
  {emoji:"🍫", name:"Chocolate Hamper", why:"Sweet things, for my sweetest thing."},
  {emoji:"👔", name:"Shirt & Jeans", why:"So you look as handsome as you always do — on me."},
  {emoji:"🎶", name:"Your Top 5 Songs", why:"I'll sing the five that make you think of me."},
  {emoji:"📿", name:"Handmade Beads Bracelet", why:"Made by me, because my beads-loving boy deserves one from my hands."},
  {emoji:"📕", name:"A Tiny Birthday Book", why:"A little ready-made one — zero mehnat, full love."},
  {emoji:"🤍", name:"Hanky With His Initial", why:"A small thing, with your letter on it, to carry everywhere."},
  {emoji:"⚫", name:"Black Piercing Hoops", why:"For all three — because they suit you far too well."},
  {emoji:"📱", name:"A Sleek Back Cover", why:"Something sharp, for the phone that holds all our chats."},
  {emoji:"🖼️", name:"A Photo Frame", why:"A moment of us, frozen where you'll see it daily."},
  {emoji:"💐", name:"A Hugeee Bouquet", why:"Big — because there's no small way to love you."},
  {emoji:"🩹", name:"A Nice Belt", why:"The finishing touch, like you are to my life."},
  {emoji:"🎁", name:"A Little Something More", why:"Edit me in the code — gift #21."},
  {emoji:"🎁", name:"A Little Something More", why:"Edit me in the code — gift #22."},
  {emoji:"🎁", name:"A Little Something More", why:"Edit me in the code — gift #23."},
  {emoji:"🎁", name:"A Little Something More", why:"Edit me in the code — gift #24."},
  {emoji:"🎁", name:"A Little Something More", why:"Edit me in the code — gift #25."},
  {emoji:"🌐", name:"This Birthday Website", why:"The last gift. Everything I feel, in one place, forever. Happy birthday, my Cutu Hunny Bunny ❤️", special:true},
];
/* ═══════════════════════════════════════════ */

(function(){
"use strict";
var RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
var FINE = matchMedia('(hover:hover) and (pointer:fine)').matches;
function $(id){return document.getElementById(id);}

/* ── floating hearts ── */
(function(){
  var wrap=$('hearts');
  function spawn(){
    if(RM)return;
    var h=document.createElement('div');h.className='fheart';h.textContent='♥';
    h.style.left=Math.random()*100+'%';
    var dur=Math.random()*8+10;h.style.animationDuration=dur+'s';
    h.style.fontSize=(Math.random()*12+10)+'px';
    h.style.color=Math.random()>.5?'var(--rose)':'var(--gold)';
    wrap.appendChild(h);setTimeout(function(){h.remove();},dur*1000);
  }
  for(var i=0;i<6;i++)setTimeout(spawn,i*1200);
  if(!RM)setInterval(spawn,2600);
})();

/* ── cursor glow ── */
if(FINE){
  var g=$('cursor-glow');var tx=innerWidth/2,ty=innerHeight/2,cx=tx,cy=ty;
  addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY;});
  (function loop(){cx+=(tx-cx)*.1;cy+=(ty-cy)*.1;g.style.left=cx+'px';g.style.top=cy+'px';requestAnimationFrame(loop);})();
}

/* ── reveal on scroll ── */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.16});
function observeReveals(){document.querySelectorAll('.reveal,.t-item').forEach(function(el){io.observe(el);});}

/* ── progress + timeline fill + map path ── */
var mapPathLen=0;
addEventListener('scroll',function(){
  var h=document.documentElement;
  $('progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
  var tl=$('timeline'),fill=$('tl-fill');
  if(tl&&fill){var r=tl.getBoundingClientRect();var vis=Math.min(Math.max((innerHeight-r.top)/(r.height+innerHeight*.3),0),1);fill.style.height=(vis*100)+'%';}
  var stage=$('mapStage'),path=$('mapPath');
  if(stage&&path&&mapPathLen){var mr=stage.getBoundingClientRect();var mv=Math.min(Math.max((innerHeight-mr.top)/(innerHeight*.9),0),1);path.style.strokeDashoffset=mapPathLen*(1-mv);}
},{passive:true});

/* ── build reasons ── */
var reasons=[
  ["Cutu","Because you're adorable even when you're trying very hard not to be."],
  ["Laddu","Because you're sweeter than you realize. And yes, I'm always stealing extra pieces."],
  ["Potato 🥔","Because you're soft. Comforting. And somehow manage to be cute doing absolutely nothing."],
  ["Betu","Because some names don't need a reason. They just feel like love."],
  ["Kucchu Pucchu","No explanation. No context. Just maximum cuteness."],
  ["Baby","Because sometimes the handsome man disappears and the cutest baby appears."],
  ["Babu","Because some words feel like home. And this is one of them."],
  ["Theodore","Because sometimes you deserve a name as handsome as you look."],
  ["Sunshine ☀️","Because every day is brighter when you're in it."],
  ["My Sukoon","Because peace started looking like you."],
  ["My Pookie","Because no matter how old we get, you'll always be adorable."],
  ["Rasgulla","Because you're sweet. Soft. And impossible to stop loving."]
];
(function(){
  var rg=$('reasonGrid');
  reasons.forEach(function(r,i){
    var d=document.createElement('div');d.className='reason-card glass reveal';d.tabIndex=0;d.setAttribute('role','button');
    d.innerHTML='<p class="reason-num">'+String(i+1).padStart(2,'0')+'</p><p class="reason-title">'+r[0]+'</p><p class="reason-body">'+r[1]+'</p>';
    function tog(){d.classList.toggle('open');}
    d.addEventListener('click',tog);
    d.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();tog();}});
    rg.appendChild(d);
  });
})();

/* ── build gallery ── */
(function(){
  var ms=$('masonry');
  GALLERY.forEach(function(s){
    var d=document.createElement('div');d.className='shot';d.tabIndex=0;
    d.innerHTML=s.img?('<img src="'+s.img+'" alt=""><div class="cap">'+s.t+'</div>')
      :('<div class="ph" style="height:'+(s.h||220)+'px">'+s.k+'<br><span style="opacity:.6;font-size:.85em">'+s.t+'</span></div>');
    function open(){openLB(s.t,s.img);}
    d.addEventListener('click',open);
    d.addEventListener('keydown',function(e){if(e.key==='Enter')open();});
    ms.appendChild(d);
  });
})();

/* ── build gifts ── */
(function(){
  var grid=$('giftsGrid');if(!grid)return;
  GIFTS.forEach(function(g,i){
    var d=document.createElement('div');d.className='gift-card reveal'+(g.special?' special':'');
    var media=g.img?'<img src="'+g.img+'" alt="">':'<span class="emoji">'+(g.emoji||'🎁')+'</span>';
    d.innerHTML='<div class="gift-media"><span class="badge">'+(i+1)+'</span>'+media+'</div>'+
                '<div class="gift-body"><p class="gift-name">'+g.name+'</p><p class="gift-why">'+g.why+'</p></div>';
    if(g.img){
      d.tabIndex=0;d.setAttribute('role','button');
      var open=function(){openLB(g.name+' — '+g.why,g.img);};
      d.addEventListener('click',open);
      d.addEventListener('keydown',function(e){if(e.key==='Enter'){open();}});
    }else{
      d.style.cursor='default';
    }
    grid.appendChild(d);
  });
})();

/* ── build wave + map points ── */
(function(){
  var wave=$('wave');
  for(var i=0;i<44;i++){var s=document.createElement('span');s.style.animationDelay=(i*0.045)+'s';wave.appendChild(s);}
  var stage=$('mapStage');
  MAP_POINTS.forEach(function(p){
    var el=document.createElement('div');el.className='map-point';el.tabIndex=0;
    el.style.left=p.x+'%';el.style.top=(p.y/62*100)+'%';
    el.innerHTML='<div class="ring"></div><div class="tip"><span class="k">'+p.k+'</span><span class="t">'+p.t+'</span></div>';
    function tog(){document.querySelectorAll('.map-point').forEach(function(o){if(o!==el)o.classList.remove('on');});el.classList.toggle('on');}
    el.addEventListener('click',tog);
    el.addEventListener('keydown',function(e){if(e.key==='Enter')tog();});
    stage.appendChild(el);
  });
  var path=$('mapPath');
  if(path&&path.getTotalLength){mapPathLen=path.getTotalLength();path.style.strokeDasharray=mapPathLen;path.style.strokeDashoffset=mapPathLen;}
})();

/* ── lightbox ── */
var lb=$('lb'),lbBox=$('lbBox'),lbCap=$('lbCap');
function openLB(cap,img){lbCap.textContent=cap;lbBox.innerHTML=img?'<img src="'+img+'" alt="">':'Your photo here';lb.classList.add('show');}
function closeLB(){lb.classList.remove('show');}
$('lbClose').addEventListener('click',closeLB);
lb.addEventListener('click',function(e){if(e.target===lb)closeLB();});

/* ── HOME transition sequence ── */
(function(){
  var started=false;
  var steps=[['hr1',300],['hr2',1900],['hr3',3700],['hr4',5500]];
  var ob=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting&&!started){started=true;
      steps.forEach(function(s){setTimeout(function(){var el=$(s[0]);if(el)el.classList.add('in');},RM?0:s[1]);});
      ob.disconnect();
    }
  });},{threshold:.4});
  var sec=$('home-reveal');if(sec)ob.observe(sec);
})();

/* ── words ── */
(function(){
  var words=document.querySelectorAll('.word-reveal');var started=false;
  var ob=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting&&!started){started=true;words.forEach(function(w,i){setTimeout(function(){w.classList.add('in');},i*450);});ob.disconnect();}
  });},{threshold:.25});
  if(words.length)ob.observe($('words'));
})();

/* ── counters ── */
(function(){
  function run(el){
    if(el.dataset.special)return;
    var target=+el.dataset.target;
    if(el.dataset.daysSince)target=Math.max(0,Math.floor((Date.now()-new Date(START_DATE).getTime())/86400000));
    var start=null,dur=1700;
    function step(t){if(!start)start=t;var p=Math.min((t-start)/dur,1);var e=1-Math.pow(1-p,3);
      el.textContent=Math.floor(e*target).toLocaleString();if(p<1)requestAnimationFrame(step);}
    requestAnimationFrame(step);
  }
  var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);co.unobserve(e.target);}});},{threshold:.5});
  document.querySelectorAll('.stat-num').forEach(function(el){co.observe(el);});
})();

/* ── letter lines ── */
document.querySelectorAll('#letterText p').forEach(function(p,i){
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){setTimeout(function(){p.classList.add('in');},i*120);o.unobserve(e.target);}});},{threshold:.3});
  o.observe(p);
});

/* ── finale ── */
(function(){
  var done=false;
  var nicknames=["Cutu","Laddu","Potato","Betu","Baby","Babu","Theodore","Sunshine","My Sukoon","My Pookie","Rasgulla"];
  var word=$('nickWord');
  function cascade(done2){
    if(RM){word.style.opacity=0;done2();return;}
    var i=0,hold=520;
    function show(){
      word.textContent=nicknames[i];
      word.style.opacity=1;word.style.transform='translateY(0)';
      setTimeout(function(){
        word.style.opacity=0;word.style.transform='translateY(-14px)';
        i++;
        if(i<nicknames.length)setTimeout(show,260);
        else setTimeout(done2,400);
      },hold);
    }
    show();
  }
  function ending(){
    var seq=[['f1',300],['f2',1900],['f3',3400],['f5',5400],['fheart',6200]];
    seq.forEach(function(s){setTimeout(function(){$(s[0]).classList.add('show');},RM?0:s[1]);});
  }
  var ob=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting&&!done){done=true;cascade(ending);ob.disconnect();}
  });},{threshold:.3});
  ob.observe($('finale'));
  var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){$('secretMore').classList.add('in');so.disconnect();}});},{threshold:.5});
  so.observe($('secret'));
})();

/* ── countdown ── */
(function(){
  var start=new Date(START_DATE).getTime();
  function pad(n){return String(n).padStart(2,'0');}
  function tick(){
    var diff=Date.now()-start;if(diff<0)diff=0;var sec=Math.floor(diff/1000);
    $('sDays').textContent=Math.floor(sec/86400).toLocaleString();
    $('sHours').textContent=pad(Math.floor((sec%86400)/3600));
    $('sMin').textContent=pad(Math.floor((sec%3600)/60));
    $('sSec').textContent=pad(sec%60);
  }
  tick();setInterval(tick,1000);
})();

/* ── voice note ── */
(function(){
  var btn=$('voicePlay'),cass=$('cassette'),fill=$('vfill'),tEl=$('vtime'),audio=$('voiceAudio');
  function hasSrc(){return audio.currentSrc||audio.querySelector('source');}
  var playing=false,ctx,iv,dur=18,t0,raf;
  function fmt(s){s=Math.max(0,Math.floor(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');}
  function icon(p){btn.innerHTML=p?'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>':'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';}
  audio.addEventListener('timeupdate',function(){if(audio.duration){fill.style.width=(audio.currentTime/audio.duration*100)+'%';tEl.textContent=fmt(audio.currentTime);}});
  audio.addEventListener('ended',function(){playing=false;cass.classList.remove('playing');icon(false);fill.style.width='0%';});
  function startTone(){
    try{ctx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){return;}
    var m=ctx.createGain();m.gain.value=0;m.connect(ctx.destination);m.gain.linearRampToValueAtTime(.35,ctx.currentTime+1.2);
    var notes=[392,440,523.25,440],i=0;
    iv=setInterval(function(){var o=ctx.createOscillator(),gg=ctx.createGain();o.type='sine';o.frequency.value=notes[i%notes.length];
      gg.gain.setValueAtTime(0,ctx.currentTime);gg.gain.linearRampToValueAtTime(.5,ctx.currentTime+.05);gg.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+1.4);
      o.connect(gg);gg.connect(m);o.start();o.stop(ctx.currentTime+1.4);i++;},700);
    t0=performance.now();
    (function up(){var el=(performance.now()-t0)/1000;fill.style.width=Math.min(el/dur*100,100)+'%';tEl.textContent=fmt(el);if(el>=dur){stopTone();return;}raf=requestAnimationFrame(up);})();
  }
  function stopTone(){clearInterval(iv);cancelAnimationFrame(raf);if(ctx)ctx.close();playing=false;cass.classList.remove('playing');icon(false);fill.style.width='0%';tEl.textContent='0:00';}
  btn.addEventListener('click',function(){
    if(!playing){playing=true;cass.classList.add('playing');icon(true);if(hasSrc())audio.play().catch(function(){});else startTone();}
    else{playing=false;cass.classList.remove('playing');icon(false);if(hasSrc())audio.pause();else stopTone();}
  });
})();

/* ── ambient piano ── */
(function(){
  var btn=$('music-btn'),ctx,master,playing=false,timer;
  var scale=[261.63,293.66,329.63,392.00,440.00,523.25];
  function note(f,t,d,gn){var o=ctx.createOscillator(),g=ctx.createGain(),o2=ctx.createOscillator(),g2=ctx.createGain();
    o.type='sine';o.frequency.value=f;o2.type='triangle';o2.frequency.value=f*2;g2.gain.value=.1;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(gn,t+.04);g.gain.exponentialRampToValueAtTime(.0001,t+d);
    o.connect(g);o2.connect(g2);g2.connect(g);g.connect(master);o.start(t);o2.start(t);o.stop(t+d);o2.stop(t+d);}
  function schedule(){var t=ctx.currentTime,b=Math.floor(Math.random()*3);
    [0,1,2,3,2,1].forEach(function(s,i){note(scale[Math.min(b+s,scale.length-1)],t+i*.5,1.6,.12);});
    note(scale[b]/2,t,3,.06);timer=setTimeout(schedule,3000);}
  function start(){try{ctx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){return;}
    master=ctx.createGain();master.gain.value=0;master.connect(ctx.destination);master.gain.linearRampToValueAtTime(.45,ctx.currentTime+2);
    schedule();playing=true;btn.classList.add('playing');btn.setAttribute('aria-label','Pause music');}
  function stop(){if(master)master.gain.linearRampToValueAtTime(0,ctx.currentTime+.6);clearTimeout(timer);setTimeout(function(){if(ctx)ctx.close();},800);
    playing=false;btn.classList.remove('playing');btn.setAttribute('aria-label','Play music');}
  btn.addEventListener('click',function(){playing?stop():start();});
})();

/* ── easter eggs ── */
(function(){
  var note=$('eggNote'),msg=$('eggMsg'),idx=0;
  addEventListener('keydown',function(e){
    if(e.key==='Escape'){closeLB();note.classList.remove('show');return;}
    if(e.repeat)return;
    if(e.key==='h'||e.key==='H'){
      if(note.classList.contains('show'))note.classList.remove('show');
      else{msg.textContent=EGG_NOTES[idx%EGG_NOTES.length];idx++;note.classList.add('show');}
    }
  });
  note.addEventListener('click',function(){note.classList.remove('show');});
})();

/* ════════ HERO + INTRO (bulletproof, no external libs) ════════ */
function revealHero(){
  /* split hero title into chars */
  var hm=$('hm1');var text=hm.textContent;hm.textContent='';
  [].forEach.call(text,function(ch){
    var sp=document.createElement('span');sp.className='char';sp.textContent=ch===' '?'\u00A0':ch;hm.appendChild(sp);
  });
  var chars=hm.querySelectorAll('.char');
  $('he1').classList.add('show');
  chars.forEach(function(c,i){setTimeout(function(){c.style.opacity=1;c.style.transform='none';},150+i*55);});
  setTimeout(function(){$('hs1').classList.add('show');},150+chars.length*55+150);
  setTimeout(function(){$('hc1').classList.add('show');},150+chars.length*55+500);
  setTimeout(function(){$('scrollHint').classList.add('show');},150+chars.length*55+900);
  observeReveals();
}
function finishIntro(){
  var intro=$('intro');
  if(intro.classList.contains('gone'))return;
  intro.classList.add('gone');document.body.classList.remove('locked');
  setTimeout(function(){intro.style.display='none';},1100);
  revealHero();
}
function runIntro(){
  var intro=$('intro');
  if(RM){finishIntro();return;}
  document.body.classList.add('locked');
  /* timed sequence with hard fallback */
  setTimeout(function(){$('intro1').classList.add('show');},400);
  setTimeout(function(){$('intro1').classList.remove('show');},3000);
  setTimeout(function(){$('intro2').classList.add('show');},3600);
  setTimeout(function(){$('intro2').classList.remove('show');},6400);
  setTimeout(finishIntro,7000);
  /* absolute safety net: never let the page stay locked */
  setTimeout(finishIntro,9000);
}
$('introSkip').addEventListener('click',finishIntro);

/* boot — start immediately, don't wait on slow resources */
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',runIntro);
else runIntro();
})();
