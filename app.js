let weather = prompt("Enter a Temperature ");
if(weather < 100){
    alert("Your weather temperature is less than 100");
    document.write("Your weather temperature is less than 100");
}

 else if(weather > 100){
    alert("Your weather temperature is greater  than 100");
    document.write("Your weather temperature is greater  than 100");
}

else if(weather == 100){
    alert("Your weather temperature is equal to 100");
    document.write("Your weather temperature is equal to 100");
}

else{
    alert("Enter a Number");
    document.write("Enter a Number");
}



// check user which value is greater 
document.write('</br>'+"Check  first value is greater than second value or Not");
alert("Check  first value is greater than second value or Not");

let num1 = +prompt("Enter a first Number");
let num2 = +prompt("Enter a second Number");

if(num1 > num2){
   alert( num1 +" is greater then "  +  num2);
   document.write('</br>'+ num1 +" is greater then "  +  num2);
}
else if(num2 > num1){
    alert( num2 +" is greater then "  +  num1);
    document.writeln( '</br>'+num2 +" is greater then "  +  num1);
}
else if(num1 == num2 ){
    alert(num1 + "is equal to " + num2);
    document.write('</br>'+num1 + "is equal to " + num2);
}
else{
    alert("Enter a Number");
    document.write('</br>'+"Enter a Number");
}




// Number divisible of 2
alert("Check Number Divisible by 2");
document.write('</br>'+"Check Number Divisible by 2");
let userinp = +prompt("Enter a Number");

if(userinp %2==0 ){
    alert(userinp + " is perfectly Divisible by 2");
    document.write('</br>'+userinp + " is Divisible by 2");
}
 else if(userinp %2!= 0 ){
    alert(userinp + " is Not Divisible by 2");
    document.write('</br>'+userinp + " is Not Divisible by 2");
}



// Number divisible by three
alert("Check Number Divisible by 3");
document.write('</br>'+"Check Number Divisible by 3");
let userinp1 = +prompt("Enter a Number");

if(userinp1 %3==0 ){
    alert(userinp1 + " is perfectly Divisible by 3");
    document.write('</br>'+userinp1 + " is Divisible by 3");
}
 else if(userinp1 %3!= 0 ){
    alert( userinp1 + " is Not Divisible by 3");
    document.write( '</br>'+userinp1 + " is Not Divisible by 3");
}



// Number divisible by three
alert("Check Number Divisible by 5");
document.write('</br>'+"Check Number Divisible by 5");
let userinp2 = +prompt("Enter a Number");

if(userinp2 %5==0 ){
    alert(userinp2 + " is perfectly Divisible by 5");
    document.write('</br>'+userinp2 + " is Divisible by 5");
}
 else if(userinp2 %5!= 0 ){
    alert(userinp2 + " is Not Divisible by 5");
    document.writeln('</br>'+userinp2 + " is Not Divisible by 5");
}
else{
    alert("Enter a Number");
            document.write('</br>'+"Enter a Number");
}






// Number divided by 2 show  remainder


alert("Number Divided by 2 Check Remaider");
document.write('</br>'+"Number Divided by 2 Check Remaider");
let userinp3 = +prompt("Enter a Number");

let remainder = userinp3 %2 ;

alert("remainder is "+ remainder);
document.write('</br>'+"remainder is "+remainder);






// Number divided by 3 show  remainder


alert("Number Divided by 3 Check Remaider");
document.write('</br>'+"Number Divided by 3 Check Remaider");
let userinp4 = +prompt("Enter a Number");

let remainder1 = userinp4 %3 ;

alert("remainder is "+remainder1);
document.write('</br>'+"remainder is "+remainder1);




// Number divided by 2 show  remainder


alert("Number Divided by 5 Check Remaider");
document.write('</br>'+"Number Divided by 5 Check Remaider");
let userinp5 = +prompt("Enter a Number");

let remainder2 = userinp5 %5 ;

alert("remainder is "+remainder2);
document.write('</br>'+"remainder is "+remainder2);

