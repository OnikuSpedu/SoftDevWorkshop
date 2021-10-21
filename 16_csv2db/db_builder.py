#Clyde "Thluffy" Sinclair
#SoftDev
#skeleton/stub :: SQLITE3 BASICS
#Dec 2020 -- The Time of the Rona

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events

#==========================================================


# < < < INSERT YOUR TEAM'S POPULATE-THE-DB CODE HERE > > >

courses = []

with open('courses.csv', newline='') as file:
    reader = csv.DictReader(file)
    for row in reader:
        code = row['code']
        mark = row['mark']
        id = row['id']

        courses.append({
            code: code,
            mark: mark,
            id: id
        })



command = "CREATE TABLE courses (code TEXT, mark INTEGER, id INTEGER PRIMARY KEY)"          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement

for course in courses:
    code = course['code']
    mark = course['mark']
    id = course['id']

    addCourseCommand = "INSERT INTO courses VALUES (%s, %s, %s);" % (code, mark, id)          # test SQL stmt in sqlite3 shell, save as string
    c.execute(addCourseCommand)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database
