# how-to :: DEPLOY A FLASK APP USING APACHE2
---
## Overview
Guide to deploying Flask app USING Apache2

### Estimated Time Cost: 30 minutes

### Prerequisites:
- installed Apache2

## Instructions (Two Different Methods)

1. Install and enable Apache mod_wsgi module
   ```
   sudo apt-get install libapache2-mod-wsgi-py3 python-dev
   sudo a2enmod wsgi 
   ```
2. Create flask app folders in /var/www
   ```
   cd /var/www
   sudo mkdir [FLASK_APP_NAME]
   cd [FLASK_APP_NAME]
   sudo mkdir [FLASK_APP_NAME]
   cd [FLASK_APP_NAME]
   sudo mkdir static templates
   ```
3. Create __init__.py `sudo nano __init__.py` and paste the following content
   ```
   from flask import Flask
   app = Flask(__name__)
   @app.route("/")
   def hello():
   	return "Hello, I hate Digital Ocean!"
   if __name__ == "__main__":
   	app.run()
   ```
3. Install pip3 and python3
   ```
   sudo apt-get install python3-pip 
   ```
4. Install and activate the virtual environment
   ```
   sudo pip3 install virtualenv 
   sudo virtualenv [VENV_NAME]
   source [VENV_NAME]/bin/activate 
   ```
5. Install Flask
   ```
   sudo pip3 install Flask 
   ```
6. Test if you Flask app works
   ```
   sudo python3 __init__.py 
   ```
7. Create a WSGI file 
   ```
   cd /var/www/[FLASK_APP_NAME]
   ```
   ```
   sudo nano flaskapp.wsgi 
   ```
   ```
   #!/usr/bin/python
   import sys
   import logging
   logging.basicConfig(stream=sys.stderr)
   sys.path.insert(0,"/var/www/[FLASK_APP_NAME]/")

   from [FLASK_APP_NAME] import app as application
   application.secret_key = 'Add your secret key'
   ```
8. Create the apache config for the app
   ```
   sudo nano /etc/apache2/sites-available/[FLASK_APP_NAME].conf
   ```
   Paste the following and change servername to the droplet IP
   ```
   <VirtualHost *:80>
		ServerName mywebsite.com
		ServerAdmin admin@mywebsite.com
		WSGIScriptAlias / /var/www/[FLASK_APP_NAME]/flaskapp.wsgi
		<Directory /var/www/[FLASK_APP_NAME]/[FLASK_APP_NAME]/>
			Order allow,deny
			Allow from all
		</Directory>
		Alias /static /var/www/[FLASK_APP_NAME]/[FLASK_APP_NAME]/static
		<Directory /var/www/[FLASK_APP_NAME]/[FLASK_APP_NAME]/static/>
			Order allow,deny
			Allow from all
		</Directory>
		ErrorLog ${APACHE_LOG_DIR}/error.log
		LogLevel warn
		CustomLog ${APACHE_LOG_DIR}/access.log combined
   </VirtualHost>
   ```
9. Enable the virtual host for the app
   ```
   sudo a2ensite FlaskApp
   ```
10. Restart Apache2
   ```
   sudo service apache2 restart 
   ```
11. Go to your droplet's IPV4 in your browswer

### Resources
* https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-application-on-an-ubuntu-vps

---

Accurate as of (last update): 2022-01-19

#### Contributors:  
Shadman Rakib, pd2  
