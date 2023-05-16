function saveData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let numb = document.getElementById("number").value;
    let fname = document.getElementById("foodname").value;
    let addr = document.getElementById("addresss").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [] //getItem is to read data
    user_records.push({
        "name":name,
        "email":email,
        "numb":numb,
        "fname":fname,
        "addr":addr
    })
    localStorage.setItem("users",JSON.stringify(user_records));
    alert("order recieved");
}