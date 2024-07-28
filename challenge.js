///Add Event Listners for Comments

let form = document.querySelector("#comment-form");
form.addEventListener("submit",(e)=>{

    e.preventDefault();
    let p = document.createElement("p");

    p.textContent=e.target.comment_input.value;
    let div = document.querySelector(".comments")
    div.appendChild(p)
    form.reset()
    })


/// Set the timer

var timer = function(){
    return setInterval(function(){
        var a = document.querySelector("#counter");
        var b= parseInt(a.innerText);
        a.innerText = b+1;

        // console.log(b)
    },
    1e3
)
}

interval = timer()

/// Set the minus button

let minusButton = document.querySelector("#minus");
minusButton.addEventListener("click",()=>{
    var a = document.querySelector("#counter");
    var b= parseInt(a.innerText);
    a.innerText = b-1

})

/// Set the plus button

let plusButton = document.querySelector("#plus");
plusButton.addEventListener("click",()=>{
    var a = document.querySelector("#counter");
    var b= parseInt(a.innerText);
    a.innerText = b+1
})



function _toConsumableArray(a){
    if(Array.isArray(a)){for(var b=0,c=Array(a.length);
        b<a.length;
        b++)c[b]=a[b];
        return c}return Array.from(a)
    }

/// Set the hearts button

let heartButton = document.querySelector("#heart");
heartButton.addEventListener("click",()=>{
    a = document.querySelector("#counter");
    b= parseInt(a.innerText);

    c= document.querySelector(".likes");
    d=void 0;
    if([].concat(_toConsumableArray(
        c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b)){d=document.querySelector('[data-num="'+b+'"]');
            var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}
                else(d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",
                c.appendChild(d)

})

/// Set the pause button

var playing=!0
let pauseButton = document.querySelector("#pause");
let commentForm=document.getElementsByTagName("form")[0];

pauseButton.addEventListener("click",()=>{

    playing?(playing=!1,clearInterval(interval),pauseButton.innerText="resume"):
    (playing=!0,interval=timer(),pauseButton.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).
                    forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}),
                    commentForm.addEventListener("submit",function(a){a.preventDefault();

                        var b=this.children[0],c=b.value;b.value="";var d=document.querySelector(".comments"),e=document.createElement("p");

                        e.innerText=c,
                        d.appendChild(e)


})


