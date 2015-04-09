// Given
var endorsements = [
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue HTML' },
  { skill: 'css', user: 'Sue CSS' },
  { skill: 'css', user: 'Bill CSS' }
];
 
// Result
[
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
]; 

function transformData(endorsements) {
    
    var result = {};
    
    for(var i = 0; i < endorsements.length; i++ ){ 
        
        if ( result[endorsements[i].skill] ) {
             result[endorsements[i].skill].user.push(endorsements[i].user);
             result[endorsements[i].skill].count++;
        } else {
            result[endorsements[i].skill] = {};
            result[endorsements[i].skill].user = [];
            result[endorsements[i].skill].user.push(endorsements[i].user);
            result[endorsements[i].skill].count = 1;
        		// console.log(result);
        }   
    }

   Object.keys(result).map(function(value, index){
       return {'skill': value, 'user':result[value].user, 'count':result[value].count};    
   });
    
    return result;
}

console.log(transformData(endorsements));