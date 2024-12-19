let isGay = 0;
function turnGay() {
    isGay = Math.floor(Math.random()*201)
    if (isGay == 0) {
        document.getElementById("status").innerHTML = "You are a confirmed homosexual";
        isGay = 0;
    } else {
        document.getElementById("status").innerHTML = "You are not a homosexual, yet";
        isGay = 0;
    }
}