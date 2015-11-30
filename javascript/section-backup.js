/**
 * Created by Sam on 10/28/2015.
 */
var videoSections = dataArray();
var isPlaying = false;
var myVideo = document.getElementById("video_player");
var totalVideoPage = videoSections.length;

window.onload=function(){
    document.getElementById("pageNumber").innerHTML = "1 / " + totalVideoPage;
    for(var i=0;i < totalVideoPage; i ++){
        var sectionObject = new Object();
        sectionObject = videoSections[i];
        var li = document.createElement('li');
        var liHtml = "<div style='float: left; '>";
        liHtml = liHtml + "<img src='images/icon_title.png'  width='28px' height='28px' align='absmiddle'></div>";
        liHtml = liHtml + "<div class='div_left'><a title='sss' onclick='goPage(";
        liHtml = liHtml + sectionObject.time;
        liHtml = liHtml + ")'>";
        liHtml = liHtml + sectionObject.title;
        liHtml = liHtml + "</a></div>";
        liHtml = liHtml + " <div class='clear'></div>" ;
        li.innerHTML = liHtml;
        document.getElementById("listTitle").appendChild(li);
    }
};

var changeVideoImageSrc = function(time){
    for(var i=0;i < totalVideoPage; i ++){
        var firstSection = videoSections[i];
        if(firstSection.time == time){
            var imgUrl = "course/" + firstSection.image;
            document.getElementById("imgView").src = imgUrl;
            document.getElementById("pageNumber").innerHTML = i+1 + " / " + totalVideoPage;
            break;
        }
        if(i < totalVideoPage - 1){
            var tmpNum = i + 1 ;
            var secondSection = videoSections[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = "course/" + firstSection.image;
                document.getElementById("imgView").src = imgUrl;
                document.getElementById("pageNumber").innerHTML = tmpNum + " / " + totalVideoPage;
                break;
            }
        }else if(i == totalVideoPage - 1){
            var secondSection = videoSections[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = "course/" + firstSection.image;
                document.getElementById("imgView").src = imgUrl;
                document.getElementById("pageNumber").innerHTML = tmpNum + " / " + totalVideoPage;
                break;
            }
        }
    }
};

var goPage = function(index){
    if(!isPlaying){
        myVideo.play();
        myVideo.currentTime = index;
    }else{
        myVideo.currentTime = index;
    }
};

var timeUpdate = function(){
//    console.log("time updating");
    var cTime = parseInt(myVideo.currentTime);
    changeVideoImageSrc(cTime);
};
