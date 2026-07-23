
const c=document.getElementById('matrix');
const x=c.getContext('2d');
function r(){c.width=innerWidth;c.height=innerHeight}r();onresize=r;
const chars='01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const s=16, cols=Math.floor(innerWidth/s), drops=Array(cols).fill(1);
setInterval(()=>{
x.fillStyle='rgba(0,0,0,.08)';x.fillRect(0,0,c.width,c.height);
x.fillStyle='#008cff';x.font=s+'px monospace';
for(let i=0;i<drops.length;i++){
let t=chars[Math.floor(Math.random()*chars.length)];
x.fillText(t,i*s,drops[i]*s);
if(drops[i]*s>c.height&&Math.random()>.975)drops[i]=0;
drops[i]++;
}
},35);
