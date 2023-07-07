<!-- In this file ihv'e given some of the best avanced JS questions with their solutions and their description -->

Visit my LinkedIn Profile - www.linkedin.com/in/shivam-kumar-5732b2256


### 1. What's the output ? 
```javascript
let a = [1, 2, 3, 4, 5, 6];
var left = 0, right = 5;
var found = false;
var target = 5;
while(left <= right) {
   var mid = Math.floor((left + right) / 2);
   if(a[mid] == target) {
       found = true;
       break;
   }
   else if(a[mid] < target) {
       left = mid + 1;
   }
   else {
       right = mid - 1;
   }
}
if(found) {
   print("YES");
}
else {
   print("NO");
}
```

- A: `YES`
- B: `NO`
- C: `None Of the above`
- D: `Syntax Error`

<details><summary><a>Answer<a></summary>
<p>

#### Answer: A

The above code performs binary search to search for the target element of 5 in the given array. If it is found, it prints YES else NO.
<p>

### 2. What's the output ? 
```javascript
let s = "00000001111111";
let l = 0, r = s.length - 1, ans = -1;
while(l <= r) {
   var mid = Math.floor((l + r) / 2);
   if(s[mid] == '1') {
       ans = mid;
       r = mid - 1;
   }
   else {
       l = mid + 1;
   }
}
print(ans);
```
- A: `8`
- B: `7`
- C: `0`
- D: `1`

<details><summary><b>Answer<b></summary>
<p>

#### Answer: B

This code snippet shows one of the many applications of the binary search algorithm in Javascript. Here, we are binary searching for the index of the first occurrence of the character ‘1’ in the given string. When we get the character ‘1’ at the mid index, we store it as the answer and move to the left half which will have the first index of ‘1’ if it occurs. Else we move to the right half. So, the answer will be 7 (0-based indexing). 
