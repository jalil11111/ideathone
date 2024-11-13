document.getElementById("icn").addEventListener("click", display_func);
document.getElementById("ricn").addEventListener("click", undisplay_func);

function display_func() {
    let cnt = document.getElementById("ourul");
    cnt.style.display = 'flex'; 
    setTimeout(function() {
        cnt.style.opacity = 1;  
        cnt.style.height = "100vh";
    }, 10);

    let btn = document.getElementById("icn");
    btn.style.opacity = 0;

    let ri = document.getElementById("ricn");
    ri.style.display = 'flex';

    let li1 = document.getElementById("lil1");
    li1.style.display = 'flex';
    let li2 = document.getElementById("lil2");
    li2.style.display = 'flex';
    let li3 = document.getElementById("lil3");
    li3.style.display = 'flex';
    let li4 = document.getElementById("lil4");
    li4.style.display = 'flex';

    let ev = document.getElementById("every_thing");
    ev.style.opacity = 0.7;

    let hd = document.getElementById("logo");
    hd.style.opacity = 0.9;

    let ft = document.getElementById("footer");
    ft.style.opacity = 0.7;
}

function undisplay_func() {
    let cnt = document.getElementById("ourul");
    cnt.style.opacity = 0;
    cnt.style.height = '0';

   
    setTimeout(function() {
        cnt.style.display = 'none';
    }, 500);

  
    let btn = document.getElementById("icn");
    btn.style.opacity = 1;

  
    let ri = document.getElementById("ricn");
    ri.style.display = 'none';
    let li1 = document.getElementById("lil1");
    li1.style.display = 'none';
    let li2 = document.getElementById("lil2");
    li2.style.display = 'none';
    let li3 = document.getElementById("lil3");
    li3.style.display = 'none';
    let li4 = document.getElementById("lil4");
    li4.style.display = 'none';

    
    let ev = document.getElementById("every_thing");
    ev.style.opacity = 1;

    
    let hd = document.getElementById("logo");
    hd.style.opacity = 1;

    let ft = document.getElementById("footer");
    ft.style.opacity = 1;
}
