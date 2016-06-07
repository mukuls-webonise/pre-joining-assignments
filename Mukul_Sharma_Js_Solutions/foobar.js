for (var i=1; i<=100; i++) {
    var mod3 = i%3 === 0; // multiple of 3
    var mod5 = i% 5 === 0; //multiple of 5
    if(mod3 && mod5) { //check if multiple of 3 and 5 first
        console.log("foobar");
    } else if (mod3) {
        console.log("foo");
    } else if (mod5) {
        console.log("bar");
    } else {
        console.log(i);
    }
}