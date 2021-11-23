# Team Name: Knoteem: Shadman Rakib, David Chong
# SoftDev Pd2
# K19 - Using REST Apis to render templates
# 2021-10-20

from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission
import urllib.request
import json

app = Flask(__name__)    #create Flask object

@app.route("/")
def index():
    try:
        key_file = open("key_nasa.txt", "r")
        key = key_file.read()

        with urllib.request.urlopen('https://api.nasa.gov/planetary/apod?api_key='+key) as response:
           unparsed = response.read()
           data = json.loads(unparsed)
           return render_template('main.html', data = data) # Render the login template
    except:
        return "Error"

if __name__ == "__main__": #false if this file imported as module
    app.debug = True
    app.run()
