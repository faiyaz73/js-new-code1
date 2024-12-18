// Immidiately Invoked function expressions (IIFE)



(function B(){
        console.log("my data based connected")     

})();                                                  // this is IIFE


( () => {
    console.log("B data based connected")      
})();                                               // this is a IIEF for print




( (name) => {
    console.log(`my name is ${name}`)      
})("faiyaz")  