function myFunction() {
    var value = document.getElementById("text lzx").value    
    if(value=="student"){
        location.replace("course details.html")
        return true
    }
    else if(value=="parent"){
        location.replace("index.html")
        return true
    }
    else{
        alert("Please enter student or parent")
    }
    }