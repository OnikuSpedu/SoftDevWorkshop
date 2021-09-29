# Shadman Rakib
# SoftDev
# HW - StI/O Weighted Random
# 2021-09-28

# My team used the DictReader function from the csv module 
# to create rows of dictionaries where the keys are 
# "Job Class" and "Percentage". We used the choices function
# from the random module to return a key from the dictionary
# using weighted probability. This implementation uses several
# functions to organize the code. None is returned when there
# is an error. I intended for it to act as "null" or "undefined"
# in other languages.

from csv import DictReader
from random import choices 

fileName = 'occupations.csv'

def generateOccupationDict():
    try:
        occ_dict = {}
        with open(fileName) as csvfile:
            reader = DictReader(csvfile)
            for row in reader:
                occ_dict[row['Job Class']] = float(row['Percentage']) #parse into float
        
        occ_dict.pop('Total')

        return occ_dict
    except FileNotFoundError:
        print('File "%s" does not exist' % (fileName))
        return None

def getWeightedRandomKeyFromDict(d):
    #use random.choices function to get random element on list using weights.
    #random.choices returns a list. we only want the value at index 0
    return choices(list(d.keys()), d.values(), k=1)[0]

def getWeightedRandomOccupation():
    # generates dict
    occ_dict = generateOccupationDict()

    if (occ_dict != None):
        result = getWeightedRandomKeyFromDict(occ_dict)
        return result
    else:
        return None

def main():
    result = getWeightedRandomOccupation()

    if (result != None):
        print(getWeightedRandomOccupation())

if __name__ == "__main__":
    main()