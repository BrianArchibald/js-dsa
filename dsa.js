//              Frequency Counter example
// see if 2nd list has multiples of 2 of 1st list

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
// same([1,2,3,2,5], [9,1,4,4,11])


// Anagram problem
// are two lists anagrams

function anagram(first, second) {
    const lookup = {}
    for (let i = 0; i < first.length; i ++) {
        let letter = first[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    for (let i = 0; i < second.length; i ++) {
        let letter = second[i]
        if (!lookup[letter]) {
            console.log('in false')
            return false
        } else {
            lookup[letter] -= 1
        }
    }
    console.log(lookup)
    return true

}
// anagram('carr', 'arcr')

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }

  // Python Solution
  class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        lookup = {}
        for char in s:
            lookup[char] = lookup.get(char, 0) + 1
        for char in t:
            if char not in lookup:
                return False
            elif lookup[char] < 1:
                return False
            else:
                lookup[char] -= 1
        return True
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')


//    Multiple pointers  , need something that is SORTED!!
function zeroSum(arr) {
    let left = 0
    let right = arr.length - 1
    
    while (left < right) {
      let sum = arr[left] + arr[right]
      if (sum === 0) {
        return [arr[left], arr[right]]
      }
      if (sum > 0) {
        right++
      }
      else {
        left++
      }
     }
  }
  
//  console.log(zeroSum([-2, -1, 0, 1]))

// Unique Values
//  return how many unique values are in SORTED array  , Multiple pointers

function uniqueElements(arr){
  if(arr.length == 0) return 0
  let i = 0
  for(j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}


//   Sliding window  .......
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

///  same frequency of numbers in both inputs
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}


// One liner using Set
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
/////////////////////////////////////////////////////////////////////////
//  Multiple pointers
Given a sorted array and an average int , determine if there an average of a pair that adds up to the avg int 

function avgPair(arr, num){
  if (arr.length === 0){ return false }
  let left = 0
  let right = arr.length - 1
  while(left<right){
    let correct = arr[left] + arr[right] / 2 === num
    if(correct){
      return true
    }
    else if ( correct < num) {
      left++
    } else {
      right++
    }
  } return false

}

console.log(avgPair([1,2,3],2.5))


//  I string 1 a substring of string 2, multiple pointers

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}