
//constructor optional
class Greeting {
    firstName: string;
    lastName: string;
    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

showGreeting() {
    const row2 = document.getElementById("r1c2");
    row2.innerHTML = "Hello " + this.firstName + " " + this.lastName + "."
    //console log helps to check if its working here
}
resetGreeting () {
    const row2 = document.getElementById("r1c2");
    row2.innerHTML = "r1c2";
}
}
const greeter = new Greeting("Brandon", "Peterson");


