//syntax error
//let add = (5 + 3
//console.log(add) 

//referen error

//type error

try {
    // code that might fail goes here
    let result = 10/0;
    console.log(result);
    undefinedFunction(); // this will cause error
    console.log("this will not run.");
}catch (error){
    // This runs only if something goes wrong
    console.log("An error occurred: " + error.message);
}

console.log("The progress continues here.");

try{
    let age = 25
    console.log(age.length())
}catch(error){
    console.log("An error occurred: " + error.message);
}

function loadUserData(userId) {
    console.log("Starting to load data...");
    try {
        if (!userId.startsWith("BAD")) {
            throw new Error("User ID must start with BAD");
        }
        console.log("Data loaded for user: " + userId);
    } catch (error) {
        console.log("Failed: " + error.message);
    } finally {
        console.log("Loading complete. Closing connection.") // ALWAYS runs
    }
}

loadUserData("BAD-1234");   // Date loaded for user: 5 -->  loading  complete.
//loadUserData(-1);// Failed: User ID must be... --> loading complete.