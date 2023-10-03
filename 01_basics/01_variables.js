const account_id = 12345
let account_email = 'tejmore2.tm@gmail.com'
var account_pass = '7096'
account_city = "Gandhinagar"


// account_id = 67890 // Not allowed Const Variable change


account_email = 'abc@gmail.com'
account_pass = '12232323'
account_city = "Surat"


// console.log('acount_id', account_id)
// console.log('Email===', account_email)
// console.log("=passs==", account_pass);
// console.log("=city==", account_city)




/*
   Preferred Not to use Var
   because of issue in block scope and functional scope
*/




console.table([account_id, account_email, account_pass, account_city])
