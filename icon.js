
document.getElementById("icn").addEventListener("click",display_func);
document.getElementById("ricn").addEventListener("click",undisplay_func)
function display_func(){
    let cnt = document.getElementById("ourul");
    cnt.style.display = 'flex';
    setTimeout(function(){
        cnt.style.opacity = 1;
        cnt.style.height = "1800px";
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
    let ri = document.getElementById("ricn");
    ri.style.display = 'flex';

    let hd = document.getElementById("logo");
    hd.style.opacity = 0.9;

    let ft = document.getElementById("footer");
    ft.style.opacity = 0.7;
}

function undisplay_func(){
    let cnt = document.getElementById("ourul");
    cnt.style.opacity = 0; 
    cnt.style.height = '0';  


    setTimeout(function() {
        cnt.style.display = 'none'; 
    }, 500); 

    let btn = document.getElementById("icn");
    btn.style.opacity = 1;

    let ev = document.getElementById("every_thing");
    ev.style.opacity = 1;  


    setTimeout(function() {
        document.getElementById("lil1").style.display = 'none';
        document.getElementById("lil2").style.display = 'none';
        document.getElementById("lil3").style.display = 'none';
        document.getElementById("lil4").style.display = 'none';
    }, 300);

    let ri = document.getElementById("ricn");
    ri.style.display = 'none';

    let hd = document.getElementById("logo");
    hd.style.opacity = 1;

    let ft = document.getElementById("footer");
    ft.style.opacity = 1; 

}