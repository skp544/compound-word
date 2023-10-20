# Approach of Largest compound word approach

- I Created a program using Javascript

- Step 1 - i imported two libraries which is

  - file system(fs) - which is used to work with files in our program if we want to use one
  - Readline - it used to read the file in efficint way

- Step 2 - Now I created a isCompundWord functions to check if the give word is compound word or not

  - We checking is compund word or not using for loop and it runs to end of the length and it checks value if the suffix and prefix is present or not and if suffix is not present it makes recursive call using suffix and checks in again if present or not

- we creating a async function to process input file

  - we creating first a set of array and reading a file line by line and trimming line and adding input file words in set

  - now we sorting words according the length
  - now finding the longest and second longest word using isCompoundWord function(checking if word is compound or not)

- Lastly getting a time taken by the program by calling the function and using then method
