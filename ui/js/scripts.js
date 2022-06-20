function welcome(){

    url = "http://0.0.0.0:8081/home"
    $.ajax({
        url: url,
        headers: {
            "Content-Type": "application/json"
        },
        cache: false,
        type: 'GET',
        success: function(data) {
            document.getElementById("welcome-block").innerHTML = data;
        }
    })
}

function greet(){
    var inp = document.getElementById("text-box").value;

    url = "http://0.0.0.0:8081/welcome/"+inp
    $.ajax({
        url: url,
        headers: {
            "Content-Type": "application/json"
        },
        cache: false,
        type: 'GET',
        success: function(data) {
            document.getElementById("welcome-block").innerHTML = data;
        }
    })
}
