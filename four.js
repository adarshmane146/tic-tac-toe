function CountVowels(str){
let count=0;
for(const char of str){
    if(char=='a'||char=='e'||char=='i'||char=='o'){
        count++;
    }
}
console.log(count);
}