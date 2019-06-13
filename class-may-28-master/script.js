function myworld(){
    var inputElement = document.querySelector('#fName');
    console.log(inputElement);
    var inputValue = document.querySelector('#fName').value;
     console.log(inputValue);
     var inputElement = document.querySelector('#lName');
    console.log(inputElement);
     var outputValue = document.querySelector('#lName').value;
     console.log(inputValue);
    var addInput = inputValue + ' ' + outputValue;

     var inptHeading = document.querySelector('h1 > span');
     console.log(inptHeading);
     inptHeading.innerHTML = addInput ;


    

}