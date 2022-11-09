const $video=document.querySelector('#video')
const $play=document.querySelector('#play')
const $pause=document.querySelector('#pause')
const $backward=document.querySelector('#backward')
const $forward=documentquerySelector('#forward')
$play.addEventListener ('click',handlePlay)
$pause.addEventListener ('click',handlePause)
$backward.addEventListener ('click',handleBackward)
$forward.addEventListener ('click',hangleForward)
function hanglePlay(){
    $video.play()
    $play.hidden=true
    $play.hidden=false
    console.log('clic en reproducir')
}