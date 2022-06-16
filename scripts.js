window.addEventListener('load', () => {
    const spanAreaSpan = document.querySelector('.span-area > span');
    const logoLogoSize = document.querySelector('.logo > logo-size');
    const downloadBtn = document.querySelector('.download-btn');
    const downloadBtnTimer = document.querySelector('.download-btn-timer');
    const downloadBtnProgressTextArea = document.querySelector('.download-btn-progress-text-area');
    var countDownDate = new Date('Jun 30, 2022 23:59:59').getTime();
    var dateNow = new Date().getTime();
    var dateDiff = countDownDate - dateNow;
    var currentDateInSeconds = (dateDiff / 1000);
    var durationDateInSeconds = (countDownDate / 1000);
    var tweenCountDownDate = null;
    var isTweenCountDownDate = false;
    if (isTweenCountDownDate === true) {
        tweenCountDownDate.pause();
    };
    if (dateDiff > 0) {
        tweenCountDownDate = new Between(0, 1)
        .loop('repeat')
        .time(1000)
        .on('start', () => {
            isTweenCountDownDate = true;
        })
        .on('update', (v) => {
            isTweenCountDownDate = true;
            if (v >= 1) {
                dateNow = new Date().getTime();
                dateDiff = countDownDate - dateNow;
                currentDateInSeconds = (dateDiff / 1000);
                durationDateInSeconds = (countDownDate / 1000);
                //console.log(dateDiff);
                curday = Math.floor(((currentDateInSeconds / 60) / 60) / 24);
                curhour = Math.floor(((currentDateInSeconds / 60) / 60) % 24);
                curmins = Math.floor((currentDateInSeconds / 60) % 60);
                cursecs = Math.floor((currentDateInSeconds - (curmins * 60)) % 60);
                //console.log(Math.floor(((((vdPrListHoverOffsetX) / vdPr.clientWidth) * (video.duration)) - (labelsmins * 60)) % 60));
                if ((currentDateInSeconds) <= 0) {
                    downloadBtnProgressTextArea.classList.remove('download-btn-progress-text-area-hidden');
                    downloadBtn.classList.add('hidden');
                    downloadBtn.addEventListener('mousedown', downloadBtnHidden, false);
                    curday = '';
                    curhour = '';
                    curmins = 0;
                    cursecs = 0;
                    if (cursecs >= 10) cursecs = cursecs; else if (cursecs < 10) cursecs = '0' + cursecs;
                    if (curhour > 0 || curday > 0) {
                        if (curmins >= 10) {
                            curmins = curmins;
                        }else if (curmins < 10) {
                            curmins = '0' + curmins;
                        };
                    }else if (curhour <= 0 || curday <= 0) {
                        if (curmins >= 10) {
                            curmins = curmins;
                        }else if (curmins < 10) {
                            curmins = curmins;
                        };
                    };
                    if (curhour < 10) {
                        if (curhour <= 0) {
                            if (curday <= 0) curhour = ''; else if (curday > 0) curhour = '00:';
                        }else if (curhour > 0) {
                            if (curday <= 0) curhour = curhour + ':'; else if (curday > 0) curhour = '0' + curhour + ':';
                        };
                    }else if (curhour >= 10) {
                        curhour = curhour + ':';
                    };
                    if (curday < 10) {
                        if (curday <= 0) {
                            curday = '';
                        }else if (curday > 0) {
                            curday = curday + ':';
                        };
                    }else if (curday >= 10) {
                        curday = curday + ':';
                    };
                }else if ((currentDateInSeconds) >= Math.floor(durationDateInSeconds)) {
                    curday = Math.floor(((durationDateInSeconds / 60) / 60) / 24);
                    curhour = Math.floor(((durationDateInSeconds / 60) / 60) % 24);
                    curmins = Math.floor((durationDateInSeconds / 60) % 60);
                    cursecs = Math.floor((durationDateInSeconds - (curmins * 60)) % 60);
                    if (cursecs >= 10) cursecs = cursecs; else if (cursecs < 10) cursecs = '0' + cursecs;
                    if (curhour > 0 || curday > 0) {
                        if (curmins >= 10) {
                            curmins = curmins;
                        }else if (curmins < 10) {
                            curmins = '0' + curmins;
                        };
                    }else if (curhour <= 0 || curday <= 0) {
                        if (curmins >= 10) {
                            curmins = curmins;
                        }else if (curmins < 10) {
                            curmins = curmins;
                        };
                    };
                    if (curhour < 10) {
                        if (curhour <= 0) {
                            if (curday <= 0) curhour = ''; else if (curday > 0) curhour = '00:';
                        }else if (curhour > 0) {
                            if (curday <= 0) curhour = curhour + ':'; else if (curday > 0) curhour = '0' + curhour + ':';
                        };
                    }else if (curhour >= 10) {
                        curhour = curhour + ':';
                    };
                    if (curday < 10) {
                        if (curday <= 0) {
                            curday = '';
                        }else if (curday > 0) {
                            curday = curday + ':';
                        };
                    }else if (curday >= 10) {
                        curday = curday + ':';
                    };
                }else {
                    //if (labelshour < 10) labelshour = '0' + labelshour + ':'; else if (labelshour >= 10) labelshour = labelshour + ':';
                    if (cursecs >= 10) cursecs = cursecs; else if (cursecs < 10) cursecs = '0' + cursecs;
                    if (curhour > 0 || curday > 0) {
                        if (curmins >= 10) {
                            curmins = curmins;
                        }else if (curmins < 10) {
                            curmins = '0' + curmins;
                        };
                    }else if (curhour <= 0 || curday <= 0) {
                        if (curmins >= 10) {
                            curmins = curmins;
                        }else if (curmins < 10) {
                            curmins = curmins;
                        };
                    };
                    if (curhour < 10) {
                        if (curhour <= 0) {
                            if (curday <= 0) curhour = ''; else if (curday > 0) curhour = '00:';
                        }else if (curhour > 0) {
                            if (curday <= 0) curhour = curhour + ':'; else if (curday > 0) curhour = '0' + curhour + ':';
                        };
                    }else if (curhour >= 10) {
                        curhour = curhour + ':';
                    };
                    if (curday < 10) {
                        if (curday <= 0) {
                            curday = '';
                        }else if (curday > 0) {
                            curday = curday + ':';
                        };
                    }else if (curday >= 10) {
                        curday = curday + ':';
                    };
                };
                downloadBtnTimer.innerHTML = curday + curhour + curmins + ':' + cursecs;
            };
            if (dateDiff <= 0) {
                if (isTweenCountDownDate === true) {
                    tweenCountDownDate.pause();
                };
                downloadBtn.classList.remove('hidden');
                downloadBtnProgressTextArea.classList.add('download-btn-progress-text-area-hidden');
                downloadBtn.addEventListener('click', makeDownloadLinkForApp, false);
                downloadBtn.removeEventListener('mousedown', downloadBtnHidden, false);
            };
        })
        .on('complete', () => {
            isTweenCountDownDate = false;
        });
        downloadBtn.removeEventListener('click', makeDownloadLinkForApp, false);
        downloadBtn.addEventListener('mousedown', downloadBtnHidden, false);
    }else if (dateDiff <= 0) {
        if (isTweenCountDownDate === true) {
            tweenCountDownDate.pause();
        };
        downloadBtn.classList.remove('hidden');
        downloadBtnProgressTextArea.classList.add('download-btn-progress-text-area-hidden');
        downloadBtn.removeEventListener('mousedown', downloadBtnHidden, false);
        downloadBtn.addEventListener('click', makeDownloadLinkForApp, false);
    };

    function makeDownloadLinkForApp() {
        const a = document.createElement('a');
        a.href = 'https://github.com/1GMX1/mjm-website/releases/download/v0.0.1/MJM.player.Setup.0.0.1.exe';
        a.download = 'MJM Setup 0.0.1.exe';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    function downloadBtnHidden() {
        downloadBtn.classList.add('hidden');
    };
    spanAreaSpan.addEventListener('click', () => {
        window.open('https://' + (window.location.hostname).toString() + '/mjm-website', '_self');
    }, false);
    logoLogoSize.addEventListener('click', () => {
        window.open('https://' + (window.location.hostname).toString() + '/mjm-website', '_self');
    }, false);
}, false);
