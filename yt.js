let sidemenu1 = document.querySelector(".sidemenu");
let sidemenu2 = document.querySelector(".sidemenu2");
let threeline = document.querySelector(".threeline");

let Status = "off";

let print =()=>{
    if(Status === "off"){
        sidemenu1.style.display=("none");
        sidemenu2.style.display=("inline-flex");
        Status=("on");
    }else{
        sidemenu1.style.display=("inline-flex");
        sidemenu2.style.display=("none");
        Status=("off")
    }

};
threeline.addEventListener("click" ,print);

