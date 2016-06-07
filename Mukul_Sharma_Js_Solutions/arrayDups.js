function findDupsInArray(array) {
    var a = array || [];
    var dups = [];
    for (var i=0; i<a.length; i++) {
        //Check if another exists in array 
        if (a.lastIndexOf(a[i]) != i) {
            //Add to dups if not already added
            if (dups.lastIndexOf(a[i] == -1)) dups.push(a[i]);
        }
    }
    return dups;
}

//Test
console.log(findDupsInArray([1, 4, 4, 7, 8, 7, 10]));