
document.getElementById("icn").addEventListener("click",display_func);

function display_func(){
    let cnt = document.getElementById("ourul");
    cnt.style.display = 'flex';
    setTimeout(function(){
        cnt.style.opacity = 1;
        cnt.style.height = "150%";
    },10)

    let btn = document.getElementById("icn");
    btn.style.opacity = 0;

    let ev = document.getElementById("every_thing");
    ev.style.opacity = 0.7;

    let li = document.getElementById("lil1");
    li.style.display = 'flex';
    let li1 = document.getElementById("lil2");
    li1.style.display = 'flex';
    let li2 = document.getElementById("lil3");
    li2.style.display = 'flex';
    let li3 = document.getElementById("lil4");
    li3.style.display = 'flex';

    let hd = document.getElementById("logo");
    hd.style.opacity = 0.9;

    let ft = document.getElementById("footer");
    ft.style.opacity = 0.7;
}