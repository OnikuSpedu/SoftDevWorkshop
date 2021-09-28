# Workshop of Shadman Rakib
### SoftDev 2021-2022
import csv

rowsDict = []
occupationsDict = {}

with open('occupations.csv', newline='') as f:
    reader = csv.DictReader(f)
    for row in reader:
        rowsDict.append({"Job Class" :  row['Job Class'], "Percentage" : float(row['Percentage'])})
        occupationsDict[row['Job Class']] = float(row['Percentage'])
        
print(rowsDict)
print(occupationsDict)
