

document.getElementById("btn-expand").addEventListener("click", function(){
    document.getElementById("describe-expand").style.height = "5901px";
    document.getElementById("page").style.height = "7300px";
    document.getElementById("content").style.height = "4000px";
    document.getElementById("mist").style.height = "7320px";
    document.getElementById("btn-expand").style.display = "none";
    document.getElementById("btn-collapse").style.display = "block";
    
});

document.getElementById("btn-collapse").addEventListener("click", function(){
    document.getElementById("describe-expand").style.height = "700px";
    document.getElementById("page").style.height = "2100px";
    document.getElementById("content").style.height = "2000px";
    document.getElementById("mist").style.height = "2020px";
    document.getElementById("btn-expand").style.display = "block";
    document.getElementById("btn-collapse").style.display = "none";
});

