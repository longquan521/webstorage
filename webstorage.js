
//localstorage可永久保存
function saveStorage(id) {
    var target = document.getElementById(id);
    var str = target.value;
    localStorage.setItem("message", str)
    // 或者localstorage.message = str;
}

function loadStorage(msg) {
    var target = document.getElementById(msg);
    var msg = localStorage.getItem("message");
    // 或者 var msg = localstorage.message;
    target.innerHTML = msg;
}

function removeStorage() {

    localStorage.removeItem("message");

}


// //sessionstorage关了就么了
// function saveStorage(id) {
//     var target = document.getElementById(id);
//     var str = target.value;
//     sessionStorage.setItem("message", str)
//     // 或者sessionstorage.message = str;
// }

// function loadStorage(msg) {
//     var target = document.getElementById(msg);
//     var msg = sessionStorage.getItem("message");
//     // 或者 var msg = sessionstorage.message;
//     target.innerHTML = msg;
// }
