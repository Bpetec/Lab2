//constructor optional
var Greeting = (function () {
    function Greeting(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeting.prototype.showGreeting = function () {
        var row2 = document.getElementById("r1c2");
        row2.innerHTML = "Hello " + this.firstName + " " + this.lastName + ".";
        //console log helps to check if its working here
    };
    Greeting.prototype.resetGreeting = function () {
        var row2 = document.getElementById("r1c2");
        row2.innerHTML = "r1c2";
    };
    return Greeting;
})();
//window.onload = () => {
var greeter = new Greeting("Brandon", "Peterson");
//}
