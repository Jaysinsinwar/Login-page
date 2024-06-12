function validate() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="Jaidev Singh"&& password=="jai12345") 
    {
        alert("Login Successfully");
        return false;
    }
    else 
    {
        alert("Login Failed");
    }
}