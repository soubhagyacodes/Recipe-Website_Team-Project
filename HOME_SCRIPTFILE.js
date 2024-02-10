function onchinese(){
    document.getElementById("india").setAttribute("style","display:none;");
    document.getElementById("china").setAttribute("style","display:grid;");
    document.getElementById("chinese").setAttribute("style"," color: darkorange;border: 1px solid grey;border-radius: 20px;padding:10px 0px;");
    document.getElementById("indian").removeAttribute("style")
    document.getElementById("moretxt").innerText="More Chinese Recipes..."
    document.getElementById("origin").setAttribute("href","Vivek Gautam (Roll No. 23554)/chinese cuisine.html")
}

function onindian(){
    document.getElementById("china").setAttribute("style","display:none;");
    document.getElementById("india").setAttribute("style","display:grid;");
    document.getElementById("indian").setAttribute("style"," color: darkorange;border: 1px solid grey;border-radius: 20px;padding:10px 0px;");
    document.getElementById("chinese").removeAttribute("style")
    document.getElementById("moretxt").innerText="More Indian Recipes..."
    document.getElementById("origin").setAttribute("href","Kunsh Mittal (Roll No. 23572)/index copy.html")
}

function onothers(){
    alert("Currently Unavailable")
}
