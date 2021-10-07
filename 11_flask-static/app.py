# The Red Imposter | Daniel Sooknanan, Shadman Rakib, and Roshani Shrestha
# SoftDev
# K11: Some Things Never Change - Uses flask to serve fixie.html staticly
# 2021-10-07

# DEMO 
# basics of /static folder

from flask import Flask, send_from_directory
app = Flask(__name__) 

@app.route("/")       
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    # return "No hablo queso!"
    return send_from_directory('static', 'fixie.html')

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()