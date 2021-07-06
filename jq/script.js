$(function(){
    const MAX_WIDTH=parseInt($("#circle-container").css("width"));
    const MAX_HEIGHT=parseInt($("#circle-container").css("height"));
    $("body").on("click",".circle",function(){
        let circle=$(this);
        if(circle.data("timerId")){
            //already animating
            //remove it
            clearInterval(circle.data("timerId"));
            circle.remove();
        }
        else{
            circle.data("timerId",setInterval(function(){
                increaseSize(circle);
            },circle.data("growthRate")));
        }
    });
    $("#start-btn").click(function(){
        let growthAmount=$("#growth-amount-input").val();
        let growthRate=$("#growth-rate-input").val();
        let number=$("#number-circles-input").val();
        let width=$("#width-input").val();
        let element=[];
        for(let i=0;i<number;i++){
            element.push(
                $("<div>",{
                    "class":"circle",
                    css:{
                        "width":width+"px",
                        "height":width+"px",
                        "background-color":COLORS[getRand(COLORS.length-1)],
                        "top":getRand(MAX_HEIGHT-width)+"px",
                        "left":getRand(MAX_WIDTH-width)+"px",
                        "border-radius":calculateBorderRadius(width)+"px"
                    }
                }).attr({"data-growth-amount":growthAmount})
            );
            element[i].attr("data-timer-id",setInterval(()=>increaseSize(element[i]),growthRate));
        }
        console.log(element);
        $("#circle-container").append(element);
    });
});
const COLORS=["#D32F2F","#AD1457","#4A148C","#283593","#0D47A1","#01579B","#006064","#004D40","#1B5E20","#33691E","#827717","#F57F17","#FF6F00","#E65100","#BF360C","#3E2723","#212121","#263238"];
//elelment is jquery object
function increaseSize(element){
    let newWidth=parseInt(element.css("width"))+element.data("growthAmount")+"px";
    let newBorderRadius=calculateBorderRadius(parseInt(newWidth))+"px";
    element.css({'width':newWidth,'height':newWidth,'border-radius':newBorderRadius});
}
function calculateBorderRadius(width){
    return Math.round(width/2);
}
function getRand(max){
    return Math.ceil(Math.random()*max);
}