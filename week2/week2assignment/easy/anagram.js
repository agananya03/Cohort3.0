function isAnagram(str1,str2){
    const arr1=str1.split("");
    const arr2=str2.split("");
    arr1.sort()
    arr2.sort()
    const string1=arr1.join("");
    const string2=arr2.join("");
    if(string1==string2)return true;
    else return false;
}
const y=isAnagram("harhi","arkih");
console.log(y);
module.exports=isAnagram