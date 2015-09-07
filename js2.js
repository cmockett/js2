var input = prompt("Enter a word!");
alert(input);
alert("Your character count is " + input.length);
alert("Your third character is " + input.charAt(2));
alert("Your word in lowercase is " + input.toLowerCase());
alert("Your word in Uppercase is " + input.toUpperCase());
alert("Here's an example of " + input + " in a sentence.");
alert("Here are the 2nd 3rd and 4th characters of " + input + ", " + input.substring(1, 4));