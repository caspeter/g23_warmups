function isPalindrome(word){
  return word.toLowerCase() === word.split('').reverse().join('').toLowerCase();
}

console.log(isPalindrome('yes'));
console.log(isPalindrome('sés'));
console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('My age is 0, 0 si ega ym.'));
console.log(isPalindrome('0_0 (: /-\ :) 0–0'));
console.log("U+00E9 and U+0065 U+00B4");
// https://github.com/gSchool/challenges/blob/master/Programming/is-palindrome.md
// http://sqa.stackexchange.com/questions/3558/what-are-the-test-cases-or-test-scenarios-for-palindrome
// Null string
// Empty string - is it a palindrome? Probably not, but naive algorithm would return positive result.
// Spacing and punctuation, as @dzieciou has noticed
// Zero-width diacritic marks introduce several tests:
//
// é (Latin small E with Acute Accent) can be represented in two ways, U+00E9 and U+0065 U+00B4, are they equal?
// Naive reversing U+0065 U+00B4 would ruin the character, so it has to be tested as well;é
// Finally, can é and e be considered same character, in terms of palindrome?
