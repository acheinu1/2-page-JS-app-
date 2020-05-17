var access = document.getElementById("access");
var accessPic = document.getElementById("access-pic");
var peak = document.getElementById("peak");
var peakPic = document.getElementById("peakmilk-pic");
var windows = document.getElementById("Windows");
var windowsPic = document.getElementById("Windows-pic");

access.addEventListener("click", function(){
    if(accessPic.className ==="hide"){
     accessPic.className = " ";
    }
    else{accessPic.className="hide"}
})

peak.addEventListener("click", function(){
    // alert("meee")
    if(peakPic.className ==="hide"){
     peakPic.className = " ";
    }
    else{peakPic.className="hide"}
})

windows.addEventListener("click", function(){
    if(windowsPic.className ==="hide"){
     windowsPic.className = " ";
    }
    else{windowsPic.className="hide"}
})