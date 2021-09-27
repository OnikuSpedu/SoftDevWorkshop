# Shadman Rakib
# SoftDev
# CLSWRK - Student Name Printer
# 2021-09-22

from random import randrange

# List people for periods 1 and 2
pd1 = ["person0", "person1", "person2", "person3", "person4", "person5", "person6",
       "person7", "person8", "person9", "person10", "person11", "person12", "person13",
       "person14", "person15", "person16", "person17", "person18", "person19", "person20",
       "person23", "person24", "person25", "person26", "person27", "person28", "person29",
       "person30"]
pd2 = ["person31", "person32", "person33", "person36", "person37", "person38", "person39",
        "person40", "person41", "person42", "person43", "person44", "person45", "person46",
        "person47", "person48", "person49", "person50", "person51", "person52", "person53",
        "person54", "person55", "person56", "person57", "person58", "person59", "person60",
        "person61"]

def main():
    rand_period = randrange(2)
    if (rand_period == 0):
        print( pd1[randrange(len(pd1))] )
    else:
        print( pd2[randrange(len(pd2))] )

if __name__ == "__main__":
    main()
