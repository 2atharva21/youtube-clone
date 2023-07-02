let api_key="AIzaSyD9aAhBqKJH0bh3NCbY_OMSwnXC_6veFbA";
let video_http="https://www.googleapis.com/youtube/v3/videos?";
fetch(video_http +new URLSearchParams({
    key:api_key,
    part:'snippet',
    chart:'mostpopular',
    maxResults:1,
    regioncode:'IN'
}))
.then(res =>res.json())
.then(data=>{
    console.log(data);
})