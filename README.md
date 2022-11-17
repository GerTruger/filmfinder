# filmfinder
Ik heb toch het idee dat ik hier ergens iets niet goed doe .
Step 2: Iterate through all the movies in the movie list. That takes this function as an argument. First, you want to "convert" each movie into a complete <li> element(a Dom node) with a .map function. We then put it into a variable. The result from the .map function will be an array with <li> elements.
Step 3: In the .map function, for each movie, create a li and put the title of the movie as a string temporary in it. We will turn that later into an image.
Step 4: Outside the .map function: place a newly made array with <li> elements in the DOM by adding each li to the ul. Our suggestion: Use a .forEach loop.
Step 5: Check if you got a nice list with all the movie titles in it on your screen.
