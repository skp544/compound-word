# Approach of Largest compound word approach

- I created a program using Javascript
- 
- I imported two libraries which is

  - file system(fs) - which is used to work with files in our program if we want to use one
  - Readline - it is used to read the file in an efficient way

- Now I created an isCompundWord function to check if the given word is a compound word or not

  - We check if a compound word is not using a for loop and it runs to the end of the length and checks the value of the suffix and whether the prefix are present or not if the suffix is not present it makes a recursive call using the suffix and checks in again if present or not

- we create an async function to process the input file

  - we first a set of arrays and read a file line by line and trim and add input file words in the set

  - now we sort words according to the length
  - now finding the longest and second longest word using the isCompoundWord function(checking if the word is compound or not)

- Lastly getting the time taken by the program by calling the function and using the method
