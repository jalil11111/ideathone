document.getElementById("icn"),addEventListener("click",display_func);

function display_func(){
    let cnt = document.getElementById("ourul");
    cnt.style.display = 'flex';
    setTimeout(function(){
        cnt.style.opacity = 1;
        cnt.style.height = "1800px"
    },10)

    let btn = document.getElementById("icn");
    btn.style.opacity = 0;

    let ev = document.getElementById("every_thing");
    ev.style.opacity = 0.7;

    let hd = document.getElementById("logo");
    hd.style.opacity = 0.9;

    let ft = document.getElementById("footer");
    ft.style.opacity = 0.7;
}