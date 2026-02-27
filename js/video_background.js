//javascript file to conditionaly load the sites background for screens with a resolution of 1024

function manageVideoBackground(){
    const video = document.getElementById('video_bkd');
    if (!video) return; //exit the video element is not present 
    if(window.innerWidth >= 1024){
        video.style.display = 'block'; show the video 

        //add video source if not already added
        if(!video.querySelector('source'));
        {
            const source = document.createElement('source');
            source.src = "../assets/video_bkgd.mp4"; //root relative path
            source.type = "video/mp4"
        }

    }
}