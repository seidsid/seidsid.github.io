const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
function getNumber(sum=0){
    readline.question("Enter please --> ",(value)=>{
        if(value.toLowerCase()==="stop"){
            console.log(`Total sum ${sum}`);
            readline.close();
        }
        else{
            getNumber(parseInt(value)+sum);
        }
    });
}
getNumber();