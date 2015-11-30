/**
 * Created by Sam on 10/28/2015.
 */
var videoSections = dataArray();
var isPlaying = false;
var totalVideoPage = videoSections.length;
var numOfBrowser;

window.onload=function(){
    browserCheck();
    document.getElementsByClassName("pageNumber")[numOfBrowser].innerHTML = "1 / " + totalVideoPage;

    for(var i=0;i < totalVideoPage; i ++){
        var sectionObject = new Object();
        sectionObject = videoSections[i];
        var li = document.createElement('li');
        var strTitle;
        if(sectionObject.title.length>11){
            strTitle = sectionObject.title.substring(0,11)+"...";
        }else{
            strTitle = sectionObject.title;
        }
        var listNum = i +1;
        listNum = listNum + ". ";
        var liHtml =  "<div class='title_div_left'>";
        liHtml = liHtml + "<a title='";
        liHtml = liHtml + sectionObject.title;
        liHtml = liHtml + "' onclick='goPage(";
        liHtml = liHtml + sectionObject.time;
        liHtml = liHtml + ")'>";
        liHtml = liHtml + listNum + strTitle;
        liHtml = liHtml + "</a></div><div class='title_div_right'> ";
        liHtml = liHtml + sectionObject.showTime;
        liHtml = liHtml + " </div><div class='clear'></div>" ;
        li.innerHTML = liHtml;
        document.getElementById("listTitle").appendChild(li);
    }

};

var changeVideoImageSrc = function(time){
    for(var i=0;i < totalVideoPage; i ++){
        var firstSection = videoSections[i];
        if(firstSection.time == time){
            var imgUrl = "course/" + firstSection.image;
            document.getElementsByClassName("pptImageView")[numOfBrowser].src = imgUrl;
            document.getElementsByClassName("pageNumber")[numOfBrowser].innerHTML = i+1 + " / " + totalVideoPage;
            changeLiStyle(i);
            break;
        }
        if(i < totalVideoPage - 1){
            var tmpNum = i + 1 ;
            var secondSection = videoSections[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = "course/" + firstSection.image;
                document.getElementsByClassName("pptImageView")[numOfBrowser].src = imgUrl;
                document.getElementsByClassName("pageNumber")[numOfBrowser].innerHTML = tmpNum + " / " + totalVideoPage;
                changeLiStyle(i);
                break;
            }
        }else if(i == totalVideoPage - 1){
            var secondSection = videoSections[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = "course/" + firstSection.image;
                document.getElementsByClassName("pptImageView")[numOfBrowser].src = imgUrl;
                document.getElementsByClassName("pageNumber")[numOfBrowser].innerHTML = tmpNum + " / " + totalVideoPage;
                break;
            }
        }
    }
};

var goPage = function(index){
    var videoPlayer = document.getElementsByTagName("video")[0];
    if(!isPlaying){
        videoPlayer.play();
        videoPlayer.currentTime = index;
    }else{
        videoPlayer.currentTime = index;
    }
};

var timeUpdate = function(track){
    var currentTime = Math.floor(track.currentTime).toString();
    //var duration = Math.floor(track.duration).toString();
    changeVideoImageSrc(currentTime);
};

var changeLiStyle = function(val){
    //var obj_lis = document.getElementById("listTitle").getElementsByTagName("li");
    //for(m=0;m<obj_lis.length;m++){
    //    obj_lis[m].className="";
    //}
    //obj_lis[val].className = "set-li-color";
};


var browserCheck = function () {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
        document.getElementById("video-container").className="";
        document.getElementById("video-container").className="video-container";
        numOfBrowser = 0;
    }else{
        numOfBrowser = 1;
        document.getElementById("audio-container").className="";
        document.getElementById("audio-container").className="audio-container";
    }
};
