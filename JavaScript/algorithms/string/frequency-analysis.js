function frequencyAnalysis(str) {
    var hash = {};
    for (var i = 0; i < str.length; i++) {

        if(!hash[str[i]]){
            hash[str[i]] = 1;            
        }
        else{
            hash[str[i]]++;
        }

    }
    // Include underscore to find the keys with max-min value
    
    console.log(hash);
}

frequencyAnalysis("kavitshah"); // {k: 1, a: 2, v: 1, i: 1, t: 1, s: 1, h: 2}