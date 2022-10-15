
var name = prompt("Enter your name: ");
var number = prompt("Enter your number: ");
var other = prompt("Enter another number: ");

var add = parseInt(number) + parseInt(other);

document.getElementById('name').innerHTML=name;
document.getElementById('number').innerHTML=number;
document.getElementById('add').innerHTML=add;