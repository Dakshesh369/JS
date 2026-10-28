const accountId = 123456
let accountEmail = "ABC@gmail.com"
var accountPassword = "11223344"
accountCity = "Panipat"
let accountState;

// accountId = 2 // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

accountEmail = "XYZ@gmail.com"
accountPassword = "55667788"
accountCity = "karnal"

console.log(accountId); 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
