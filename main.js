document.addEventListener('DOMContentLoaded',function(){

document.getElementById('result').textContent = '00:00:00:0';

 //現在表示されている時間（ミリ秒換算）
let saveNum = 0;
//増加時間を格納する変数（ミリ秒換算）
let delta = 0; 
//ボタンを読み込む
let startButton = document.getElementById('btn1');
let stopButton = document.getElementById('btn2');
let resetButton = document.getElementById('btn3');
startButton.disabled = false;
stopButton.disabled = true;
resetButton.disabled = true;

//タイマー
startButton.addEventListener('click',function(){
  let d1 = new Date();
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
  let timer = window.setInterval(
    function(){
      let d2 = new Date();
      delta = d2.getTime() - d1.getTime() + saveNum;
      let msecNum = delta % 1000;
      let secNum= ("00"+((delta-msecNum)/1000)%60).slice(-2);
      let minNum =("00"+((delta-msecNum)-1000*secNum)/1000/60%60).slice(-2);
      let hourNum = ("00"+((delta-msecNum)-1000*secNum-1000*60*minNum)/1000/60/60).slice(-2);
      
      document.getElementById('result').textContent = hourNum+":"+ minNum + ":" + secNum +":" + Math.floor(msecNum/100);
     
    },100);

stopButton.addEventListener('click',function(){
  window.clearInterval(timer);
  startButton.disabled = false;
  stopButton.disabled = true;
  saveNum = delta ;

},false);

resetButton.addEventListener('click',function(){
  window.clearInterval(timer);
  document.getElementById('result').textContent="00:00:00:0";
  saveNum = 0;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
},false);

},false);

});