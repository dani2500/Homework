function getLarger(currId) {
    document.getElementById(currId).style.fontSize="large";
}

function lightCell() {
    //usual cells
    var tdLen=document.getElementsByTagName("td").length;
    for(i=0;i<tdLen;i++){
        const tmp=i;
        document.getElementsByTagName("td")[tmp].addEventListener("mouseover",function(){
            document.getElementsByTagName("td")[tmp].style.background="#9F9C99";
        })
        document.getElementsByTagName("td")[tmp].addEventListener("mouseout",function(){
            document.getElementsByTagName("td")[tmp].style.background="white";
        })
    }

    //just the upper menu
    var menuLen=4;
    for(i=0;i<menuLen;i++){
        const tmp2=i;
        document.getElementsByTagName("th")[tmp2].addEventListener("mouseover",function(){
            document.getElementsByTagName("th")[tmp2].style.background="#00539C";
        })
        document.getElementsByTagName("th")[tmp2].addEventListener("mouseout",function(){
            document.getElementsByTagName("th")[tmp2].style.background="#353942";
        })
    }

    //the numbers
    var thLen=document.getElementsByTagName("th").length;
    for(i=menuLen;i<thLen;i++){
        const tmp2=i;
        document.getElementsByTagName("th")[tmp2].addEventListener("mouseover",function(){
            document.getElementsByTagName("th")[tmp2].style.background="#9F9C99";
        })
        document.getElementsByTagName("th")[tmp2].addEventListener("mouseout",function(){
            document.getElementsByTagName("th")[tmp2].style.background="white";
        })
    }
}

function txtCounter(currId,upTo,printTo){
    CurrLen=document.getElementById(currId).value.length;
    document.getElementById(printTo).innerHTML=upTo-CurrLen+" Characters Left";
}

function goodBye() {
    document.addEventListener("mouseleave", function(event){
        if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
        alert("Goodbye");
    });
}


