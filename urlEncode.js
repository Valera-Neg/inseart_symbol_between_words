const urlEncode = function(text) {
const res = text.replace(/\s/g, "%20")
return res;
};

console.log(urlEncode("Valera Negovora"));
console.log(urlEncode(" Valera Negovora "));
console.log(urlEncode("blue is greener than purple for sure"));