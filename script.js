function showOutput(output){
    document.getElementById("output").innerHTML=output;
}

function clearoutput(){
    document.getElementById("output").innerHTML="";
}
// get Name of today using if else statement 
// function ifelsestatement(){
//     var now=new Date();
//     var today=now.getDay();
//     if (today===0) {
//         alert("It's Sunday"showOutput
//     }
//     else if (today===1) {
//         alert("It's Monday");
        
//     }
//     else if (today===2) {
//         alert("It's Tuesday");
        
//     }
//     else if (today===5) {
//         alert("It's Friday");
        
//     }
//     else{
//         alert("It's some other day")
//     }
//     showOutput(today)
// }

function ifelsestatement(){
    var now=new Date();
    var today=now.getDay();
    if (today===0) {
        showOutput("It's Sunday");
        
    }
    else if (today===1) {
        showOutput("It's Monday");
        
    }
    else if (today===2) {
        showOutput("It's Tuesday");
        
    }
    else if (today===5) {
        showOutput("It's Friday");
        
    }
    else{
        showOutput("It's some other day")
    }
    
}

// get Name of today using switch statement 
function switch1(){
    var now=new Date();
    var today=now.getDay();
    switch (today) {
        case 0:
            showOutput("It's Sunday");
            break;
            case 1:
            
        showOutput("It's Monday");
            break;
            case 2:
                showOutput("It's Tuesday");
            break;
            case 5:
                showOutput("It's Friday");
            break;
            
    
        default:
            showOutput("It's some other day");
    }
}

// keep asking Name
function askingname(){
    do {
        var name= prompt("Please enter your name")
        console.log(name)        
    } while (name=== null || name.length<3 || name===" ");
    showOutput(name)
}