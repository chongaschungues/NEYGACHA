'use strict';

/* ===== 📸 FOTOS DAS CARTAS — COLE OS LINKS AQUI =====
   Cole o link da imagem entre as aspas. Tem que ser o link direto da imagem
   (botão direito na foto > "Copiar endereço da imagem").
   Deixe '' para usar o desenho padrão (o "10"). */
const FOTOS={
  santos:'https://i.pinimg.com/564x/fe/cd/6d/fecd6d85713c063635905078575b98c2.jpg',        // Neymar Santos 2010
  barca:'https://images.ctfassets.net/3mv54pzvptwz/5zqIYfPe6IJyERhFCvCUs2/a1c7407ee3a30fc008cea5ba508f08dd/neymar2_reu.jpg',         // Neymar Barcelona 2015
  psg:'https://s2-ge.glbimg.com/DfzErhzjrEQV5OH9uiWt__TDE-k=/0x0:1470x1920/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/k/e/G6WmJbRcaSAYKDqLMjQQ/6715c1d51bded77bc38fcc2dd4bc3d0e5a2ff74cw.jpg',           // Neymar PSG 2022
  hilal:'https://conteudo.imguol.com.br/c/esporte/eb/2024/11/04/neymar-se-lamenta-apos-sentir-lesao-durante-jogo-entre-al-hilal-e-esteghlal-pela-champions-league-da-asia-1730750876946_v2_3x4.jpg',         // Neymar Al-Hilal
  olimp16:'https://i.pinimg.com/736x/f6/ba/ff/f6baffa844703abb3acea2c944dbcdba.jpg',       // Neymar Olimpíadas 2016
  santos11:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFEUoWZBKaODjY_mODmlNgHdyYmL7kX-jSvpPKCD8gGHuQovj2rak7zb1&s=10',      // Neymar Santos 2011
  barca16:'https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/Y5SZSYXRSVP7TCUGBOSFXRTV5Y.jpg?auth=8868306366de27426626a5474d19af2bed8eb88c2f899c0fe9cc7f6a5c72cec1&width=640&height=640',       // Neymar Barcelona 2016
  psg18:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamTR2QBHke7CF5GtviGMWkQxCFnJvS_oLHrH2lsneivGD5MM-umoDOGE&s=10',         // Neymar PSG 2017
  selecao21:'https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/685430789_122153588132991469_2462513944583657235_n.jpg?stp=dst-jpg_tt6&cstp=mx735x920&ctp=s640x640&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=3VL2q91iTYUQ7kNvwECan5v&_nc_oc=AdqiNgMVbq_J2unJbl-F_KrJRzK56Utqx3Q1y5dc3A3KUIMkX3h-CXeUG0WcIbElKZs&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=BiL_LXP-GPA5QCf1h4wr8w&_nc_ss=7b289&oh=00_AQR_-3WqRH1b2q7zD-i835MEGZ4RsqHyukG-Pj1Xw5bYLQ&oe=6AE84AC3',     // Neymar Seleção 2021
  barca13:'https://ogimg.infoglobo.com.br/in/11042463-2d9-131/FT1086A/2013-671644574-20131211192302212afp.jpg_20131211.jpg',       // Neymar Barcelona 2013
  barca17:'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/04/neymar-barcelona-psg-2017-e1776107289646.jpg?w=1200&h=1200&crop=1',       // Neymar Barcelona 2017
  selecao14:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWygy0jmDdKWKYAnxINUlh3vwQ_V1G3d4YA1lIsaMz0rc84jJNeTDCYCFL&s=10',     // Neymar Seleção 2014
  psg20:'https://static.gazetaesportiva.com/uploads/imagem/2020/02/01/000_1OM349.jpg',         // Neymar PSG 2020
  selecao22:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMVNKelKlTJ8Q6N6s8LEmOMTa7DLKIPvZRS9Od5wokg&s',     // Neymar Seleção 2022
  santos09:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZEOnuTk4mA9sEu0iEfRf-__U0LTT1pV9WBdoYmdVB-QA6hvHbPm5d9Ww&s=10',      // Neymar Santos 2009
  santos12:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNrrJpycLvcn_dGTeYfbGrn7QID2Vf-4Gkns7kUgtuFqfmyt8ngqDZVMo&s=10',      // Neymar Santos 2012
  santos13:'https://i.pinimg.com/736x/78/56/26/785626672e67236c0cd9006fdddea81a.jpg',      // Neymar Santos 2013
  santos26:'https://santistas.net/wp-content/uploads/2026/10/55597440872_ec89253232_k-e1792533175700-800x450.jpg',      // Neymar Santos 2025
  selecao18:'https://s2-ge.glbimg.com/4V2AkCHsVFDw-1kz7DLxCXp0VPk=/0x0:2363x1616/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/Q/u/cFxwuSTkaGMXI4I4pWsw/2018-07-02t151011z-1088169977-rc1d923d5a00-rtrmadp-3-soccer-worldcup-bra-mex.jpg',     // Neymar Seleção 2018
  selecao13:'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/95328830_3115863278639313_2369375011564683264_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1344&ctp=s640x640&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NCS9tm6vg5AQ7kNvwFgo7tf&_nc_oc=AdrrosfDn1nHeS7buSsTu0bCxaSdLMWt8cO_0Cvs3OdcsDhgUm0nGmD8-tbAgk8VnEU&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=RdXOTCd4G_FPIMZh9sM09Q&_nc_ss=7b289&oh=00_AQREpvuEIu6KfT-A2SE6itb2ttNSaLJ7PinI-4DhKWYSqA&oe=6B09F319',     // Neymar Seleção 2013
  barcaneyemessi:'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0619%2Fr558627_1296x729_16%2D9.jpg',         // Neymar e Messi
  psg21:'https://conteudo.imguol.com.br/c/esporte/fe/2021/04/13/neymar-durante-psg-x-bayern-pela-liga-dos-campeoes-1618343501475_v2_3x4.jpg',         // Neymar PSG 2021
  psg23:'https://conteudo.imguol.com.br/c/esporte/b7/2022/08/13/neymar-do-psg-comemora-gol-marcado-diante-do-rayo-vallecano-1660420189462_v2_3x4.jpg',         // Neymar PSG 2023
  camisa10:'https://conteudo.imguol.com.br/c/esporte/70/2026/07/07/neymar-lamenta-eliminacao-do-brasil-para-a-noruega-na-copa-do-mundo-1783395095571_v2_900x506.jpg',      // Neymar Camisa 10 (Mítica)
  puskas11:'https://conteudo.imguol.com.br/c/esporte/a8/2020/07/23/neymar-seguido-por-borges-comemora-gol-do-santos-contra-o-flamengo-em-2011-1595542220966_v2_3x4.jpg',      // Neymar Puskás 2011 (Mítica)
  secreto:'https://images.seattletimes.com/wp-content/uploads/2016/11/cf65d3a1b137468b9fe2b6bbd6ad8caa.jpg?d=780x538',       // Neymar Brasil 2016 (Secreta)
  verso:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbO0l2DiH59zCAnrtg4PCzUOMUEi7nnl21Uh25qOsqh6FQITFo3PzPDwdc&s=10'          // costas de todas as cartas (opcional)
};

/* ===== 🔊 SEUS ÁUDIOS — ESCOLHA AQUI (opcional) =====
   Já funciona sem arquivo nenhum: o navegador gera os efeitos e a música.
   Para usar os seus: crie a pasta "audio" ao lado do index.html, salve os arquivos
   (mp3, wav ou ogg) e escreva o caminho abaixo. Deixe '' para usar o som padrão. */
const AUDIO={
  musica:'music.mp3',   // música de fundo (toca em loop), ex.: 'audio/musica.mp3'
  click:'',    // botões e menu
  virar:'',    // carta virando
  acerto:'',   // par certo / rodada ganha
  erro:'',     // par errado
  moeda:'',    // farmar moeda
  giro:'',     // começo do giro
  comum:'', raro:'', epico:'', lendario:'', mitica:'', secreta:'',   // carta revelada, por raridade
  vitoria:'',  // fim de partida / recorde / tabuleiro limpo
  derrota:''   // acabou o tempo ou as vidas
};

/* ===== MOTOR DE SOM (não precisa mexer até a linha "FIM DO MOTOR DE SOM") ===== */
const Som=(()=>{
  const KEY='adultoNey.som',cfg={mus:true,sfx:true};
  try{Object.assign(cfg,JSON.parse(localStorage.getItem(KEY)))}catch(e){}
  let ctx,sfxG,musG,noise,el,tm,nxt=0,i=0;
  const arq={};

  /* botões 🎵 🔊 no canto da tela (criados aqui, com o próprio estilo) */
  document.head.insertAdjacentHTML('beforeend',`<style>
    .som{position:fixed;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:20;display:flex;gap:8px}
    .som .btn{background:var(--tinta);padding:.6em .8em;font-size:1.1rem;line-height:1}
    .som .off{opacity:.4;filter:grayscale(1)}
    .screen{padding-bottom:84px}
  </style>`);
  document.body.insertAdjacentHTML('beforeend',`<div class="som">
    <button id="btnMus" class="btn ghost" title="Música" aria-label="Música">🎵</button>
    <button id="btnSfx" class="btn ghost" title="Efeitos sonoros" aria-label="Efeitos sonoros">🔊</button></div>`);

  const init=()=>{                       // o navegador só libera áudio depois de um toque
    if(ctx)return;
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC)return;
    ctx=new AC();
    sfxG=ctx.createGain();sfxG.gain.value=.5;sfxG.connect(ctx.destination);
    musG=ctx.createGain();musG.gain.value=.2;musG.connect(ctx.destination);
    noise=ctx.createBuffer(1,ctx.sampleRate/2|0,ctx.sampleRate);          // ruído p/ "whoosh" e chimbal
    const d=noise.getChannelData(0);for(let k=0;k<d.length;k++)d[k]=Math.random()*2-1;
    for(const k in AUDIO)if(k!=='musica'&&AUDIO[k]){                      // pré-carrega seus arquivos
      const a=new Audio(AUDIO[k]);a.preload='auto';a.onerror=()=>delete arq[k];arq[k]=a;
    }
  };

  /* nota: frequência, duração, onda, volume, atraso, destino, frequência final */
  const t=(f,d,tipo='sine',v=.3,at=0,dest=sfxG,f2)=>{
    const o=ctx.createOscillator(),g=ctx.createGain(),s=ctx.currentTime+at;
    o.type=tipo;o.frequency.setValueAtTime(f,s);
    if(f2)o.frequency.exponentialRampToValueAtTime(f2,s+d);
    g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(v,s+.01);
    g.gain.exponentialRampToValueAtTime(.001,s+d);
    o.connect(g).connect(dest);o.start(s);o.stop(s+d+.02);
  };
  /* sopro filtrado (máx. 0.5s) */
  const r=(d,f,v=.3,at=0,dest=sfxG)=>{
    const s=ctx.currentTime+at,n=ctx.createBufferSource(),fl=ctx.createBiquadFilter(),g=ctx.createGain();
    n.buffer=noise;fl.type='bandpass';fl.frequency.value=f;
    g.gain.setValueAtTime(v,s);g.gain.exponentialRampToValueAtTime(.001,s+d);
    n.connect(fl).connect(g).connect(dest);n.start(s);n.stop(s+d);
  };
  const arp=(n,d,tipo,v,gap)=>n.forEach((f,k)=>t(f,d,tipo,v,k*gap));

  /* efeitos sintetizados (usados quando o caminho em AUDIO está vazio) */
  const S={
    click:()=>t(700,.05,'square',.12),
    virar:()=>{r(.18,2200,.35);t(300,.08,'triangle',.12,.1)},
    acerto:(c=1)=>arp([523,659,784].map(f=>f*(1+(c-1)*.1)),.16,'triangle',.3,.09),   // sobe de tom com o combo
    erro:()=>t(240,.3,'sawtooth',.2,0,sfxG,90),
    moeda:()=>{t(988,.06,'square',.12);t(1319,.25,'square',.12,.06)},
    giro:()=>{for(let k=0;k<10;k++)t(260+k*70,.08,'square',.09,k*.08)},
    comum:()=>t(440,.2,'triangle',.3),
    raro:()=>arp([523,659,784],.2,'triangle',.3,.1),
    epico:()=>{arp([392,523,659,784,1047],.22,'triangle',.3,.09);t(196,.8,'sawtooth',.08)},
    lendario:()=>{
      arp([523,659,784,1047],.3,'triangle',.3,.09);
      [1047,1319,1568,2093].forEach((f,k)=>t(f,1,'sine',.12,.4+k*.05));
      r(.5,7000,.12,.4);
    },
    mitica:()=>{
      arp([392,523,659,784,1047,1319],.3,'triangle',.3,.08);
      arp([196,262],.9,'sawtooth',.08,.12);
      r(.5,5000,.14,.45);
    },
    secreta:()=>{
      arp([784,988,1245,1568,1976,2489],.5,'sine',.16,.08);
      arp([392,494],1.2,'triangle',.15,.2);
      r(.5,9000,.14,.3);
    },
    vitoria:()=>arp([523,659,784,659,784,1047],.2,'square',.1,.12),
    derrota:()=>arp([392,349,311,262],.3,'sawtooth',.12,.18)
  };

  function sfx(nome,arg){
    if(!cfg.sfx)return;
    init();if(!ctx)return;
    if(ctx.state==='suspended')ctx.resume();
    if(arq[nome]){const a=arq[nome].cloneNode();a.volume=.8;a.play().catch(()=>{});return}
    if(S[nome])S[nome](arg);
  }

  /* música sintetizada: Lá menor (Am F C G), bumbo + baixo + arpejo + chimbal */
  const ACORDES=[[220,261.6,329.6],[174.6,220,261.6],[261.6,329.6,392],[196,246.9,293.7]];
  function passo(){
    while(nxt<ctx.currentTime+.25){
      const q=.27,at=nxt-ctx.currentTime,k=i%8,ac=ACORDES[(i/8|0)%4];
      if(k%4===0)t(150,.18,'sine',1,at,musG,45);               // bumbo
      if(k%2===0)t(ac[0]/2,q*1.6,'triangle',.9,at,musG);       // baixo
      t(ac[k%3]*2,q*.9,'square',.22,at,musG);                  // arpejo
      if(k%2===1)r(.05,7000,.5,at,musG);                       // chimbal
      nxt+=q;i++;
    }
  }
  function musica(on){
    clearInterval(tm);
    if(el)el.pause();
    if(!on||!ctx)return;
    if(AUDIO.musica){                                          // sua música (se o arquivo falhar, usa a padrão)
      if(!el){el=new Audio(AUDIO.musica);el.loop=true;el.volume=.4;el.onerror=()=>{el=null;AUDIO.musica='';musica(cfg.mus)}}
      el.play().catch(()=>{});
      return;
    }
    if(ctx.state==='suspended')ctx.resume();
    nxt=ctx.currentTime+.1;i=0;
    tm=setInterval(passo,60);
  }

  /* botões, desbloqueio no 1º toque e pausa quando a aba some */
  const ui=()=>[['btnMus','mus'],['btnSfx','sfx']].forEach(([id,k])=>{
    const b=document.getElementById(id);b.classList.toggle('off',!cfg[k]);b.setAttribute('aria-pressed',cfg[k]);
  });
  function alterna(k){
    cfg[k]=!cfg[k];
    try{localStorage.setItem(KEY,JSON.stringify(cfg))}catch(e){}
    ui();init();
    k==='mus'?musica(cfg.mus):sfx('click');
  }
  document.getElementById('btnMus').onclick=()=>alterna('mus');
  document.getElementById('btnSfx').onclick=()=>alterna('sfx');
  ui();

  const liberar=()=>{if(ctx)return;init();if(cfg.mus)musica(true)};
  ['click','keydown'].forEach(ev=>addEventListener(ev,liberar,true));

  document.addEventListener('visibilitychange',()=>{
    if(!ctx)return;
    if(document.hidden){ctx.suspend();if(el)el.pause()}
    else{ctx.resume();if(cfg.mus&&el)el.play().catch(()=>{})}
  });

  return{sfx};
})();
/* ===== FIM DO MOTOR DE SOM ===== */
const som=(n,a)=>Som.sfx(n,a);

/* ===== 🏆 EFEITO DE VITÓRIA (confete + título em tela cheia + som) ===== */
function telaVitoria(titulo='Vitória!',sub=''){
  som('vitoria');
  document.querySelector('.win')?.remove();
  const w=document.createElement('div'),cores=['#f0c860','#e5112b','#eef2ff','#4cc3ff','#3ddc84'];
  w.className='win';
  w.innerHTML=`<h2>${titulo}</h2><p>${sub}</p>`+Array.from({length:48},()=>
    `<i style="left:${Math.random()*100|0}%;--d:${(Math.random()*1.2).toFixed(2)}s;--t:${(2.4+Math.random()*1.6).toFixed(2)}s;--r:${Math.random()*360|0}deg;--c:${cores[Math.random()*cores.length|0]}"></i>`).join('');
  document.body.append(w);
  setTimeout(()=>w.remove(),4300);
}

/* ===== TABELA OFICIAL (chance de cada carta em %, soma = 100) =====
   Total por raridade: Comum 43%, Raro 30%, Épico 20%, Lendário 5%, Mítica 1,5%, Secreta 0,5%.
   Carta nova: copie uma linha, troque o id (único) e crie a mesma chave no bloco FOTOS. */
const CARDS=[
  {id:'santos',nome:'Neymar Santos 2010',clube:'SANTOS',over:95,raridade:'Épico',rar:'epico',chance:4,a:'#6b7280',b:'#0f172a',img:FOTOS.santos},
  {id:'barca',nome:'Neymar Barcelona 2015',clube:'BARCELONA',over:104,raridade:'Mítico',rar:'mitica',chance:0.75,a:'#004d98',b:'#a50044',img:FOTOS.barca},
  {id:'psg',nome:'Neymar PSG 2022',clube:'PSG',over:100,raridade:'Lendário',rar:'lendario',chance:2.5,a:'#0a1f5c',b:'#e5112b',img:FOTOS.psg},
  {id:'hilal',nome:'Neymar Al-Hilal',clube:'AL-HILAL',over:85,raridade:'Comum',rar:'comum',chance:4.3,a:'#0b3d91',b:'#5aa9ff',img:FOTOS.hilal},
  {id:'olimp16',nome:'Neymar Olimpíadas 2016',clube:'SELEÇÃO',over:107,raridade:'Mítico',rar:'mitica',chance:0.90,a:'#009c3b',b:'#002776',img:FOTOS.olimp16},
  {id:'santos11',nome:'Neymar Santos 2011',clube:'SANTOS',over:105,raridade:'Mítico',rar:'mitica',chance:4,a:'#6b7280',b:'#0f172a',img:FOTOS.santos11},
  {id:'barca16',nome:'Neymar Barcelona 2016',clube:'BARCELONA',over:103,raridade:'Lendário',rar:'lendario',chance:4,a:'#004d98',b:'#a50044',img:FOTOS.barca16},
  {id:'psg18',nome:'Neymar PSG 2018',clube:'PSG',over:103,raridade:'Mítica',rar:'mitica',chance:0.75,a:'#0a1f5c',b:'#e5112b',img:FOTOS.psg18},
  {id:'selecao21',nome:'Brasil 2021',clube:'BRASIL',over:102,raridade:'Lendário',rar:'lendario',chance:5,a:'#004d98',b:'#a50044',img:FOTOS.selecao21},
  {id:'barca13',nome:'Neymar Barcelona 2013',clube:'BARCELONA',over:102,raridade:'Lendário',rar:'lendario',chance:5,a:'#004d98',b:'#a50044',img:FOTOS.barca13},
  {id:'barca17',nome:'Neymar Barcelona 2017',clube:'BARCELONA',over:108,raridade:'Mítica',rar:'mitica',chance:0.75,a:'#004d98',b:'#a50044',img:FOTOS.barca17},
  {id:'selecao14',nome:'Neymar Seleção 2014',clube:'SELEÇÃO',over:103,raridade:'Lendário',rar:'lendario',chance:2.5,a:'#009c3b',b:'#002776',img:FOTOS.selecao14},
  {id:'psg20',nome:'Neymar PSG 2020',clube:'PSG',over:101,raridade:'Lendário',rar:'lendario',chance:5,a:'#0a1f5c',b:'#e5112b',img:FOTOS.psg20},
  {id:'selecao22',nome:'Neymar Seleção 2022',clube:'SELEÇÃO',over:99,raridade:'Épico',rar:'epico',chance:5,a:'#009c3b',b:'#002776',img:FOTOS.selecao22},
  {id:'santos09',nome:'Neymar Santos 2009',clube:'SANTOS',over:89,raridade:'Raro',rar:'raro',chance:4.3,a:'#6b7280',b:'#0f172a',img:FOTOS.santos09},
  {id:'santos12',nome:'Neymar Santos 2012',clube:'SANTOS',over:105,raridade:'Mítico',rar:'mitica',chance:4.3,a:'#6b7280',b:'#0f172a',img:FOTOS.santos12},
  {id:'santos13',nome:'Neymar Santos 2013',clube:'SANTOS',over:100,raridade:'Léndario',rar:'lendario',chance:4.3,a:'#6b7280',b:'#0f172a',img:FOTOS.santos13},
  {id:'santos26',nome:'Neymar Santos 2026',clube:'SANTOS',over:90,raridade:'Raro',rar:'raro',chance:4.3,a:'#6b7280',b:'#0f172a',img:FOTOS.santos26},
  {id:'selecao18',nome:'Neymar Seleção 2018',clube:'SELEÇÃO',over:100,raridade:'Épico',rar:'epico',chance:4.3,a:'#009c3b',b:'#002776',img:FOTOS.selecao18},
  {id:'selecao13',nome:'Neymar Seleção 2013',clube:'SELEÇÃO',over:105,raridade:'Mítico',rar:'mitica',chance:4.3,a:'#009c3b',b:'#002776',img:FOTOS.selecao13},
  {id:'barcaneyemessi',nome:'Neymar e Messi (2017)',clube:'BARCELONA',over:110,raridade:'Secreta',rar:'secreta',chance:4.3,a:'#0a1f5c',b:'#e5112b',img:FOTOS.barcaneyemessi},
  {id:'psg21',nome:'Neymar PSG 2021',clube:'PSG',over:104,raridade:'Mítico',rar:'mitica',chance:0.75,a:'#0a1f5c',b:'#e5112b',img:FOTOS.psg21},
  {id:'psg23',nome:'Neymar PSG 2023',clube:'PSG',over:99,raridade:'Épico',rar:'epico',chance:4,a:'#0a1f5c',b:'#e5112b',img:FOTOS.psg23},
  // ---- Mítica (1,5%) e Secreta (0,5%) ----
  {id:'camisa10',nome:'Neymar Camisa 10',clube:'SELEÇÃO',over:100,raridade:'Mítica',rar:'mitica',chance:0.75,a:'#009c3b',b:'#002776',img:FOTOS.camisa10},
  {id:'puskas11',nome:'Neymar Puskás 2011',clube:'SANTOS',over:101,raridade:'Mítica',rar:'mitica',chance:0.75,a:'#6b7280',b:'#0f172a',img:FOTOS.puskas11},
  {id:'secreto',nome:'Neymar Secreto',clube:'???',over:105,raridade:'Secreta',rar:'secreta',chance:0.5,a:'#3b1d6e',b:'#0a1230',img:FOTOS.secreto}
];
const CUSTO=100; // moedas por giro (10x = 10 × 100 = 1000)

const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};

/* ===== SAVE (moedas + coleção + recordes) no localStorage ===== */
const KEY='adultoNey.v1';
let save={coins:0,col:{},best:{tempo:0,vidas:0}};
try{Object.assign(save,JSON.parse(localStorage.getItem(KEY))||{})}catch(e){}
const persist=()=>{try{localStorage.setItem(KEY,JSON.stringify(save))}catch(e){}};

/* ===== CARTA (DOM) — flip 3D controlado pela classe .on =====
   Se a foto não for encontrada, a carta volta sozinha para o desenho padrão. */
function cardEl(c,up=false,badge=''){
  const d=document.createElement('div');
  d.className='flip'+(up?' on':'');d.tabIndex=0;
  d.innerHTML=`<div class="inner">
    <div class="face back">N<small>10</small>${FOTOS.verso?`<img src="${FOTOS.verso}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onerror="this.remove()">`:''}</div>
    <div class="face front ${c.rar}" style="--a:${c.a};--b:${c.b}">
      <div class="top"><b>${c.over}</b><small>OVER</small></div>
      <div class="art">${c.img?`<img src="${c.img}" alt="${c.nome}" onerror="this.outerHTML='<i>10</i>'">`:'<i>10</i>'}<span class="club">${c.clube}</span></div>
      <div class="info"><strong>${c.nome}</strong><em>${c.raridade}</em></div>
      ${badge?`<span class="badge">${badge}</span>`:''}
    </div></div>`;
  return d;
}
document.addEventListener('keydown',e=>{
  if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('flip')){e.preventDefault();e.target.click()}
});

/* ===== NAVEGAÇÃO ===== */
function go(id){
  som('click');stopMem();
  $$('.screen').forEach(s=>s.classList.toggle('on',s.id===id));
  if(id==='memoria')resetMem();
  if(id==='batalha')startBatalha();
  if(id==='giro'){$('#gStage').innerHTML='';renderGiro()}
  if(id==='colecao')renderColecao();
  scrollTo(0,0);
}
$$('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));

/* ===== 1. JOGO DA MEMÓRIA =====
   tempo: 60s (+10s a cada tabuleiro limpo) | vidas: 3 (erro = -1 vida)
   multiplicador: acertos seguidos x1 → x5, erro volta para x1 */
let M={};
function stopMem(){clearInterval(M.t);M.over=true}
function resetMem(){
  stopMem();
  $('#memSetup').hidden=false;$('#memGame').hidden=true;
  $('#memRes').textContent=`Recordes: Contra o Tempo ${save.best.tempo}, Ousadia e Alegria ${save.best.vidas}`;
}
$$('[data-mem]').forEach(b=>b.onclick=()=>startMem(b.dataset.mem));
function startMem(mode){
  som('click');stopMem();
  M={mode,score:0,combo:1,lives:3,time:60,first:null,lock:false,matched:0,over:false};
  $('#memSetup').hidden=true;$('#memGame').hidden=false;
  if(mode==='tempo')M.t=setInterval(()=>{M.time--;memHud();if(M.time<=0)endMem()},1000);
  board();memHud();
}
const PARES=6;   // cartas diferentes por tabuleiro (6 = 12 cartas na mesa)
function board(){
  const g=$('#memGrid');g.innerHTML='';M.matched=0;
  const set=shuffle([...CARDS]).slice(0,PARES);M.pares=set.length;
  shuffle([...set,...set]).forEach(c=>{const e=cardEl(c);e.dataset.id=c.id;e.onclick=()=>pick(e);g.append(e)});
}
function memHud(){
  $('#hA').textContent=M.mode==='tempo'?`⏱️ ${M.time}s`:`❤️ ${M.lives}`;
  $('#hB').textContent=`⭐ ${M.score}`;
  $('#hC').textContent=`🔥 x${M.combo}`;
}
function pick(e){
  const m=M;
  if(m.over||m.lock||e.classList.contains('on'))return;
  e.classList.add('on');som('virar');
  if(!m.first){m.first=e;return}
  const a=m.first;m.first=null;
  if(a.dataset.id===e.dataset.id){
    m.score+=100*m.combo;setTimeout(som,450,'acerto',m.combo);m.combo=Math.min(m.combo+1,5);
    a.classList.add('ok');e.classList.add('ok');
    if(++m.matched===m.pares){
      m.lock=true;setTimeout(som,900,'vitoria');
      setTimeout(()=>{if(m!==M||m.over)return;if(m.mode==='tempo')m.time+=10;board();m.lock=false;memHud()},1000);
    }
  }else{
    m.combo=1;m.lock=true;if(m.mode==='vidas')m.lives--;setTimeout(som,450,'erro');
    setTimeout(()=>{
      if(m!==M||m.over)return;
      a.classList.remove('on');e.classList.remove('on');m.lock=false;
      if(m.mode==='vidas'&&m.lives<=0)endMem();
    },850);
  }
  memHud();
}
function endMem(){
  if(M.over)return;
  stopMem();
  const rec=M.score>save.best[M.mode];
  if(rec){save.best[M.mode]=M.score;persist()}
  rec?telaVitoria('Novo recorde!',`${M.score} pontos`):som('derrota');
  $('#memSetup').hidden=false;$('#memGame').hidden=true;
  $('#memRes').textContent=`${M.mode==='tempo'?'Acabou o tempo!':'Acabaram as vidas!'} Você fez ${M.score} pontos${rec?' e bateu o recorde!':'.'}`;
}

/* ===== 2. BATALHA 1V1 LOCAL (5 rodadas, vence o maior Over) ===== */
let B={};
function startBatalha(){
  B={p:0,s:[0,0],r:1,max:5,c:[null,null],busy:false,done:false};
  $$('.place').forEach(p=>p.innerHTML='');
  $('#bDraw').textContent='Virar carta';
  bHud('Jogador 1, vire sua carta!');
}
function bHud(msg){
  $('#bRound').textContent=`Rodada ${B.r}/${B.max}`;
  $('#bScore').textContent=`Placar ${B.s[0]} x ${B.s[1]}`;
  $('#bMsg').textContent=msg;
  $$('.slot').forEach((s,i)=>s.classList.toggle('turn',!B.done&&i===B.p));
}
$('#bDraw').onclick=async()=>{
  if(B.busy)return;
  if(B.done)return startBatalha();
  const b=B,i=b.p;b.busy=true;
  const c=CARDS[Math.random()*CARDS.length|0],el=cardEl(c);
  b.c[i]=c;$(`#s${i} .place`).append(el);
  await sleep(80);if(b!==B)return;
  el.classList.add('on');som('virar');          // flip 3D
  await sleep(1000);if(b!==B)return;
  if(i===0){b.p=1;bHud('Jogador 2, sua vez!');b.busy=false;return}
  const x=b.c[0].over,y=b.c[1].over,w=x>y?0:x<y?1:-1;
  if(w>=0)b.s[w]++;
  if(b.r>=b.max){
    b.done=true;b.busy=false;$('#bDraw').textContent='Nova partida';
    b.s[0]===b.s[1]?som('comum'):telaVitoria('Vitória!',`Jogador ${b.s[0]>b.s[1]?1:2} é o campeão!`);
    bHud(b.s[0]===b.s[1]?'Fim de jogo: empate!':`Fim de jogo: Jogador ${b.s[0]>b.s[1]?1:2} é o campeão!`);
    return;
  }
  som(w<0?'click':'acerto');
  bHud(w<0?'Empate na rodada!':`Jogador ${w+1} venceu a rodada!`);
  await sleep(1800);if(b!==B)return;
  b.r++;b.p=0;b.c=[null,null];
  $$('.place').forEach(p=>p.innerHTML='');
  bHud('Jogador 1, vire sua carta!');
  b.busy=false;
};

/* ===== 3. GIRO OUSADO (economia + gacha) ===== */
function sortear(){                              // sorteio ponderado pelas chances da tabela
  let r=Math.random()*100,acc=0;
  for(const c of CARDS){acc+=c.chance;if(r<acc)return c}
  return CARDS[CARDS.length-1];
}
function renderGiro(){
  $('#saldo').textContent=save.coins.toLocaleString('pt-BR');
  $('#g1').disabled=save.coins<CUSTO;
  $('#g10').disabled=save.coins<CUSTO*10;
  const tx={};CARDS.forEach(c=>tx[c.raridade]=(tx[c.raridade]||0)+c.chance);   // soma por raridade
  $('#taxas').textContent='Taxas: '+Object.entries(tx).sort((a,b)=>b[1]-a[1]).map(([r,p])=>`${r} ${+p.toFixed(1)}%`).join(', ');
}
$('#farm').onclick=()=>{
  save.coins+=100;persist();renderGiro();som('moeda');
  const p=$('.coins');p.classList.remove('bump');void p.offsetWidth;p.classList.add('bump');
};
async function girar(n){
  const custo=n*CUSTO;
  if(save.coins<custo)return;
  save.coins-=custo;som('giro');
  const res=[];                                  // cada carta é sorteada individualmente
  for(let i=0;i<n;i++){
    const c=sortear();
    res.push({c,novo:!save.col[c.id]});
    save.col[c.id]=(save.col[c.id]||0)+1;        // vai direto para o Index
  }
  persist();renderGiro();
  const st=$('#gStage');st.innerHTML='';
  st.style.setProperty('--w',n>1?'clamp(76px,17vw,140px)':'min(62vw,260px)');
  const els=res.map(r=>{const e=cardEl(r.c,false,r.novo?'NOVA!':'');e.classList.add('wait');st.append(e);return e});
  await sleep(n>1?600:900);
  for(const [k,e] of els.entries()){
    e.classList.remove('wait');e.classList.add('on');
    const rar=res[k].c.rar;                      // jingle da raridade (no 10x, comum só faz "whoosh")
    setTimeout(som,350,n>1&&rar==='comum'?'virar':rar);
    if(n>1)await sleep(200);
  }
  if(!save.full&&Object.keys(save.col).length===CARDS.length){   // coleção completa
    save.full=1;persist();
    setTimeout(telaVitoria,1200,'Coleção completa!',`Você conquistou as ${CARDS.length} cartas`);
  }
}
$('#g1').onclick=()=>girar(1);
$('#g10').onclick=()=>girar(10);

/* ===== 4. INDEX (coleção) ===== */
function renderColecao(){
  const g=$('#idxGrid');g.innerHTML='';let n=0;
  CARDS.forEach(c=>{
    const q=save.col[c.id]||0;
    if(q){n++;const e=cardEl(c,true,'x'+q);e.onclick=()=>{e.classList.toggle('on');som('virar')};g.append(e)}
    else{const e=cardEl(c);e.classList.add('lock');g.append(e)}
  });
  $('#prog').textContent=`Coleção: ${n} de ${CARDS.length} cartas. Toque numa carta para virar.`;
}
$('#reset').onclick=()=>{
  if(confirm('Apagar moedas, coleção e recordes?')){save={coins:0,col:{},best:{tempo:0,vidas:0}};persist();renderColecao()}
};