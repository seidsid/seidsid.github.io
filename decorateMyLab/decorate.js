window.onload=function(){
    document.getElementById("bigger-btn").onclick=function(){
        document.getElementById("text-area").style.fontSize=parseInt(window.getComputedStyle(document.getElementById('text-area')).fontSize)+"pt";
    }
    document.getElementById("bling-radio").onchange=function(){
        let textArea=document.getElementById("text-area");
        if(this.checked){
            textArea.style.fontWeight="bold";
            textArea.style.color="green";
            textArea.style.textDecoration="underline";
        }
        else{
            textArea.style.fontWeight="normal";
            textArea.style.color="black";
            textArea.style.textDecoration="none";
        }
    }
}