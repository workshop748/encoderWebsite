
//we are getting the entered text
var clickEnter =$("#enterBtn");
//console.log("test");
function cechTXT (Txt){
let txt_bool = typeof Txt.value==="number";
return txt_bool;

}
function ceaserCipher(plainText,key)
{
    let encyptedTxt ="";
    for(let i = 0;i<plainText.length;i++)
    {
        
    
        if(plainText[i]===" ")
        {
            i++;
        }
        let HoldLeter = plainText[i];
        let asciiValue = HoldLeter.charCodeAt(0);
        let shiftedAsciiValue=(asciiValue+key)%26;
        let encryptedLetter =String.fromCharCode(shiftedAsciiValue);
    
        encyptedTxt +=encryptedLetter;
        
    }
    return encyptedTxt;
}
console.log("test");
clickEnter.on('click',function(){
    console.log("test");
//this is the selector for 
var PlainText =$("input:Etxt").text();
console.log("test");
var Varry = cechTXT(PlainText);
if(Varry===true)
{
    alert("is a number");
}
else{
    alert("is not a number");
}

});

