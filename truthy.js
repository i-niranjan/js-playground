const userEmail = "niranjan@sckonnect.com";

if (userEmail) {
  console.log("got user mail");
} else {
  console.log("Didnt got the user mail");
}
//Falsy Values

//false , 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy Values
//"0" , "false", " ", [], {}, function(){},

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("its empty");
}

// NULLISH COALESCING OPERATOR (??) : NULL UNDEFINED

let val1;
val1 = 5 ?? 10;
val1 = null ?? 22;
val1 = undefined ?? 20;
val1 = undefined ?? 10 ?? 15 ?? 20;
console.log(val1);

// Ternary Operator
//conditon ? true : false
