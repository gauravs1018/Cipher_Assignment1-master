// Q1 

const specialReverse = (str1,str2) => {
    var wordArray = str1.split(' ');
    var size = wordArray.length;
    for(var i = 0; i < size; i++)
    {
        if(wordArray[i][0] === str2)
        {
            var temp = wordArray[i].split('').reverse();
            wordArray[i] = temp.join('');
        }
    }

   return wordArray.join(' ');
}

console.log(specialReverse("word searches are super fun", "s"));


// Q2

const testJackpot = (params) => {
    if(params.map(p => p === params[0]).filter(a=>a).length = 4)
    {
        var res = "true";
    }
    if(params.map(p => p === params[0]).filter(a=>a).length != 4)
    {
        var res = "false";
    }
   return res; 
}

console.log(testJackpot(["@", "@", "@", "@"]));

// Q3

const removeDuplicates= (params) => {
    var uniqueArray = [];
    
    for(var i=0; i < params.length; i++)
    {
        if(uniqueArray.indexOf(params[i]) === -1) 
        {
            uniqueArray.push(params[i]);
        }
    }
    return ('[' + uniqueArray + ']');
}
console.log(removeDuplicates([1,0,1,0]));
console.log(removeDuplicates(["The","big","cat"]));
console.log(removeDuplicates(["John","Taylor","John"]));