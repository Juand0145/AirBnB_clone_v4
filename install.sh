#!/bin/bash
sudo apt-get install -y python3-lxml
sudo pip3 install flask_cors
sudo pip3 install flasgger

sudo pip3 uninstall -y jsonschema
sudo pip3 install jsonschema==3.0.1

sudo pip3 install pathlib2
