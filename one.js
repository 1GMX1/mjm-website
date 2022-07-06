window.addEventListener('load',()=>{'use strict';const spanAreaSpan=document.querySelector('.span-area>span');const logoLogoSize=document.querySelector('.logo>logo-size');const downloadBtn=document.querySelector('.download-btn');const downloadBtnTimer=document.querySelector('.download-btn-timer');const downloadBtnProgressTextArea=document.querySelector('.download-btn-progress-text-area');let countDownDate=new Date('Jul 31, 2022 23:59:59').getTime();let dateNow=new Date().getTime();let dateDiff=countDownDate-dateNow;let currentDateInSeconds=(dateDiff/1000);let durationDateInSeconds=(countDownDate/1000);let tweenCountDownDate=null;let isTweenCountDownDate=false;let curday=0,curhour=0,curmins=0,cursecs=0,durday=0,durhour=0,durmins=0,dursecs=0,labelsday=0,labelshour=0,labelsmins=0,labelssecs=0;isTweenCountDownDate===!0&&tweenCountDownDate.pause();if (dateDiff>0) {tweenCountDownDate = new Between(0, 1).loop('repeat').time(1000).on('start',()=>{isTweenCountDownDate=true;}).on('update',(v)=>{isTweenCountDownDate=!0,v>=1&&(dateNow=(new Date).getTime(),dateDiff=countDownDate-dateNow,currentDateInSeconds=dateDiff/1e3,durationDateInSeconds=countDownDate/1e3,curday=Math.floor(currentDateInSeconds/60/60/24),curhour=Math.floor(currentDateInSeconds/60/60%24),curmins=Math.floor(currentDateInSeconds/60%60),cursecs=Math.floor((currentDateInSeconds-60*curmins)%60),currentDateInSeconds<=0?(downloadBtnProgressTextArea.classList.remove("download-btn-progress-text-area-hidden"),downloadBtn.classList.add("hidden"),downloadBtn.addEventListener("mousedown",downloadBtnHidden,!1),curday="",curhour="",curmins=0,cursecs=0,cursecs>=10?cursecs=cursecs:cursecs<10&&(cursecs="0"+cursecs),curhour>0||curday>0?curmins>=10?curmins=curmins:curmins<10&&(curmins="0"+curmins):(curhour<=0||curday<=0)&&(curmins>=10?curmins=curmins:curmins<10&&(curmins=curmins)),curhour<10?curhour<=0?curday<=0?curhour="":curday>0&&(curhour="00:"):curhour>0&&(curday<=0?curhour+=":":curday>0&&(curhour="0"+curhour+":")):curhour>=10&&(curhour+=":"),curday<10?curday<=0?curday="":curday>0&&(curday+=":"):curday>=10&&(curday+=":")):currentDateInSeconds>=Math.floor(durationDateInSeconds)?(curday=Math.floor(durationDateInSeconds/60/60/24),curhour=Math.floor(durationDateInSeconds/60/60%24),curmins=Math.floor(durationDateInSeconds/60%60),cursecs=Math.floor((durationDateInSeconds-60*curmins)%60),cursecs>=10?cursecs=cursecs:cursecs<10&&(cursecs="0"+cursecs),curhour>0||curday>0?curmins>=10?curmins=curmins:curmins<10&&(curmins="0"+curmins):(curhour<=0||curday<=0)&&(curmins>=10?curmins=curmins:curmins<10&&(curmins=curmins)),curhour<10?curhour<=0?curday<=0?curhour="":curday>0&&(curhour="00:"):curhour>0&&(curday<=0?curhour+=":":curday>0&&(curhour="0"+curhour+":")):curhour>=10&&(curhour+=":"),curday<10?curday<=0?curday="":curday>0&&(curday+=":"):curday>=10&&(curday+=":")):(cursecs>=10?cursecs=cursecs:cursecs<10&&(cursecs="0"+cursecs),curhour>0||curday>0?curmins>=10?curmins=curmins:curmins<10&&(curmins="0"+curmins):(curhour<=0||curday<=0)&&(curmins>=10?curmins=curmins:curmins<10&&(curmins=curmins)),curhour<10?curhour<=0?curday<=0?curhour="":curday>0&&(curhour="00:"):curhour>0&&(curday<=0?curhour+=":":curday>0&&(curhour="0"+curhour+":")):curhour>=10&&(curhour+=":"),curday<10?curday<=0?curday="":curday>0&&(curday+=":"):curday>=10&&(curday+=":")),downloadBtnTimer.innerHTML=curday+curhour+curmins+":"+cursecs),dateDiff<=0&&(isTweenCountDownDate===!0&&tweenCountDownDate.pause(),downloadBtn.classList.remove("hidden"),downloadBtnProgressTextArea.classList.add("download-btn-progress-text-area-hidden"),downloadBtn.addEventListener("click",makeDownloadLinkForApp,!1),downloadBtn.removeEventListener("mousedown",downloadBtnHidden,!1));}).on('complete',()=>{isTweenCountDownDate=false;});downloadBtn.removeEventListener('click',makeDownloadLinkForApp,false);downloadBtn.addEventListener('mousedown',downloadBtnHidden, false);}else if(dateDiff<=0){if(isTweenCountDownDate===true){tweenCountDownDate.pause();};downloadBtn.classList.remove('hidden');downloadBtnProgressTextArea.classList.add('download-btn-progress-text-area-hidden');downloadBtn.removeEventListener('mousedown',downloadBtnHidden,false);downloadBtn.addEventListener('click',makeDownloadLinkForApp,false);};function makeDownloadLinkForApp(){const e=document.createElement("a");e.href="https://github.com/1GMX1/mjm-website/releases/download/v0.0.1/MJM.player.Setup.0.0.1.exe",e.download="MJM Setup 0.0.1.exe",e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)};function downloadBtnHidden(){downloadBtn.classList.add("hidden")};spanAreaSpan.addEventListener('click',()=>{window.open('https://'+(window.location.hostname).toString()+'/mjm-website','_self');},false);logoLogoSize.addEventListener('click',()=>{window.open('https://'+(window.location.hostname).toString()+'/mjm-website','_self');},false);},false);
