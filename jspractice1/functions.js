function max(val1,val2){
    return val1>val2?val1:val2;
}
function maxOfThree(val1, val2, val3){
    return max(val1,max(val2,val3));
}
function isVowel(ch){
    ch=ch.toLowerCase();
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')return true;
    else return false;
}
function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

function multiply(arr){
    let product=1;
    for(let i=0;i<arr.length;i++){
        product*=arr[i];
    }
    return product;
}

function reverse(str){
    let ans="";
    for(let i=str.length-1;i>=0;i--){
        ans+=str[i];
    }
    return ans;
}
function findLongestWord(words){
    let maximum=0;
    for(let i=0;i<words.length;i++){
        maximum=max(maximum,words[i].length);
    }
    return maximum;
}
function filterLongWords(words,i){
    let result=[];
    for(let j=0;j<result.length;j++){
        if(words[i].length>i)result.append(words[i]);
    }
    return result;
} 

//js fiddle

function multiplyBy10(arr){
    return arr.map(x=>x*10);
}
function equalsTo3(arr){
    return arr.filter(a=>a==3);
}
function product(arr){
    return arr.reduce((acc,curr)=>acc*cur);
}
//test
console.log("expected 2"," found "+max(1,2));
console.log("expected 3"," found "+maxOfThree(1,2,3));
console.log("expected true"," found "+isVowel('E'));
console.log("expected 120"," found "+sum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
console.log("expected 120"," found "+multiply([1,2,3,4,5]));
console.log("expected dcba"," found "+reverse("abcd"));
console.log("expected 5"," found "+findLongestWord(["as","adg","Abrar"]));
