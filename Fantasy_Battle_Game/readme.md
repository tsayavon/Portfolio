Task 1
Set up your game variables: the game characters and their stats.

Declare three variables with the following names:

wizard, elf, human

As you do, set each of their values to a String with their display name, which is their name with the first letter capitalized.
Example: wizard = "Wizard"

Declare three variables, set to Integer values that indicate the hp of each character. (hp stands for hitpoints, which means remaining health.)

The hp of a wizard is 70
The hp of an elf is 100
The hp of a human is 150
Example: wizard_hp = 70

Declare three more variables having Integer values that indicate the damage of each character (how hard they hit).

The damage of a Wizard is 150
The damage of an Elf is 100
The damage of a Human is 20
Example: wizard_damage = 150

Also declare two variables that set the hp and damage for the Dragon - 300 hp and 50 damage.
Example: dragon_hp = 300

-----------------------------------------------------

Task 2
Prompt the player to choose from a list of options.

Show the player a list of options to choose from, using the print() function. You can use more than one print() function.
Use the input() function to prompt the user with the String: "Choose your character: ".
Assign the value returned from the input function to a variable named character.


Test Task 2
Run this code in the terminal, using the command:

python battlegame.py
This should be the result:


If you enter a choice, the program should simply end.

--------------------------------------------------------

Task 3
Set up infinite while loop to handle player choice.


Wrap all the code you created in Task 2 in an infinite while loop that uses the True condition. This will be similar to the example shown in the input function exercise.
Inside the while loop, below the code you wrote in Task 2, write a sequence of three if statements to handle the three options.

The first if condition should check if the answer equals "1", the second should check for "2", the third should check for "3".

In the body for each if statement:
Declare a variable named character and set its value using the variables for character names you declared in Task 1.
Example:
character = wizard

Then, declare two variables named my_hp and my_damage. Use two of the variables declared in Task 1 to set their values.
Example: If the player chose "1", then set:
my_hp = wizard_hp

End the body for each of these if statements with a break statement. Choosing a valid option means this while loop is finished, and we can break out of it.
To get past this point, the player must have given an input that was NOT 1, 2, or 3.

So, still inside the while loop, print "Unknown character".

Now, move in your editor to below and outside of the while loop. The rest of the code for this task should not be indented at all.
Use the print() function to display the chosen character, along with the character's hp and damage stats.



Test Task 3
Save and run your game in the terminal.
Try giving an invalid response. It should tell you "Unknown character" and repeat the options again, as shown below:

Now try giving a valid response, such as 1.
It should display the chosen character and its stats, then end the game, as seen below:

NOTE: If you somehow get stuck in an infinite loop without being able to end the game, you can type ctrl-c to stop your Python program.

----------------------------------------------------------------------------------

Task 4
Battle with the Dragon!

Below your existing code, begin a second infinite while loop, using the True condition.

Inside this loop, reduce the value of dragon_hp by the value of my_damage. To do this, you must set the value of dragon_hp to itself minus my_damage.
For example, if you had a variable x and a variable y, each holding a numeric value, and you wanted to reduce the value of x by y, you could use this code:

x = x - y     # This is just an example, don't try to use this in your actual code

Use print statements and the character and dragon_hp variables to show that your character damaged the dragon, and the dragon's current hitpoints. To begin with:
    print("The", character, "damaged the Dragon!")
    
If the dragon's hitpoints are zero or below, print that "The Dragon has lost the battle" and break out of the while loop.
Next, it's the dragon's turn to attack.

Set the value of my_hp to itself minus dragon_damage.

Use print statements and the character and my_hp variables to show that your character has been damaged by the dragon, and your character's current hit points.
If your character's hitpoints are zero or below, print that your character has lost the battle, and break out of the while loop.


Test Task 4
Save and run your code.
Test each option. Choosing "1" should result in:

Choosing "2" should result in:

Choosing "3" should result in:

Once you've made it this far, you have completed your Workshop Assignment. You can submit the code file at the bottom of this page.
If you have extra time, feel free to try out the bonus tasks below.

About the bonus tasks
Bonus tasks are not for extra points, and are not required. They are for you to try if you have time.


Bonus Task 1
Currently, the player only has the ability to choose their character by number: 1, 2, or 3. Also give the player the ability to choose a character by typing their name, e.g. "Wizard".



Bonus Task 2
Expanding on Bonus Task 2, let the user also be able to type the name in any case, such as "wizard", "WIZARD", or "WIZard", and still have it recognized as an acceptable option.


Bonus Task 3
Write code that will add a 4) option, such as "Orc". Initialize this character and its hitpoints and damage.


Bonus Task 4
Write code that will add an option to exit from the game entirely. Then, you must figure out a way to actually cause the game to exit when this option is chosen.


Bonus Task 5
Write code so that when the game is over, the player is asked if they want to play again. (Hint: You can use a loop within a loop.)
