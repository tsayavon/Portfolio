def start():
    # Declare characters
    wizard = "Wizard"
    elf = "Elf"
    human = "Human"

# Declare character's hp
    wizard_hp = 70
    elf_hp = 100
    human_hp = 150

# Declare characters damage
    wizard_damage = 150
    elf_damage = 100
    human_damage = 20

# Declare Dragon hp & damage
    dragon_hp = 300
    dragon_damage = 50

    print("✰✰ Welcome to the game ✰✰\n")
    print("1)   Wizard ")
    print("2)   Elf ")
    print("3)   Human ")

    character = input("Choose your character: ").lower()

    if character == "1" or character == "wizard":
        character = wizard
        my_hp = wizard_hp
        my_damage = wizard_damage
    elif character == "2" or character == "elf":
        character = elf
        my_hp = elf_hp
        my_damage = elf_damage
    elif character == "3" or character == "human":
        character = human
        my_hp = human_hp
        my_damage = human_damage
    else:
        print("\n- Unknown Character \n")
        return

    print("\nYou have chosen the character: ", character)
    print("\n- Health: ", my_hp)
    print("- Damage: ", my_damage, "\n")

    while True:

        dragon_hp -= my_damage
        print("The", character, "damaged the Dragon!")
        print("The Dragon's hitpoints are now: ", dragon_hp, "\n")
        if dragon_hp <= 0:
            print("The Dragon has lost the battle", "\n")
            play_again = input(
                "Do you want to play again? Type Yes or No: ").lower()
            break

        my_hp -= dragon_damage
        print("The Dragon strikes back at", character)
        print(f"The {character}'s hitpoints are now: {my_hp} \n")
        if my_hp <= 0:
            print("You have lost your battle! ", "\n")
            play_again = input(
                "Do you want to play again? Type Yes or No: ").lower()
            break

    if play_again == "1" or play_again == "yes":
        print(
            "\n")
        start()


start()
