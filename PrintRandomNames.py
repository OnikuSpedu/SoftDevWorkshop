from random import random

pd1 = ["person0", "person1"]
pd2 = ["person2", "person3"]

def printRandomName():
    if (random() > 0.5):
        print( pd1[int(random() * (len(pd1)))] )
    else:
        print( pd2[int(random() * (len(pd2)))] )
        
def main():
    printRandomName()

if __name__ == "__main__":
    main()
