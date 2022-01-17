# how-to :: DO THE THING
---
## Overview
Provision a digital ocean droplet and install ubuntu 20.04.3 and apache2.

### Estimated Time Cost: 20 min

### Prerequisites:

1. Create a new project from the digital ocean dashboard
1. Create a droplet with Ubuntu 20.04 LTS x64, desired plan, desired CPU, desired datacenter region. Make sure to use SSH keys for authentication.
1. Open up the control panel for the droplet.
1. Copy the ipv4.
1. Open your terminal, and ssh into the root user. 
    ```
    ssh root@your_server_ip 
    ```
1. Add a user
    ```
    adduser [INSERT USERNAME]
    ```
1. Add your new user to the sudo group
    ```
    usermod -aG sudo sammy
    ```
1. Set firewall to allow SSH connections
    ```
    ufw allow OpenSSH
    ```
1. Enable firewall
    ```
    ufw enable
    ```
1. Copy SSH keys
    ```
    rsync --archive --chown=[INSERT USERNAME]:[INSERT USERNAME] ~/.ssh /home/[INSERT USERNAME]
    ```
1. Edit the /etc/ssh/sshd_config file and replace `PermitRootLogin yes` with `PermitRootLogin no`
1. Restart SSH `sudo service ssh restart`
1. SSH into the new user
1. Update the package manager cache. `sudo apt update`
1. Install Apache2 `sudo apt install apache2`
1. Allow Apache in the firewall `sudo ufw allow in "Apache"`


### Resources
* [https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04)

---

Accurate as of (last update): 2021-mm-dd

#### Contributors:    
Shadman Rakib, pd2  
