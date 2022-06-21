import pandas as pd
from flask import Flask, request
import flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/home', methods=['GET'])
def welcome():
    return "Welcome to Visual Studio Code Demo"


@app.route('/welcome/<user>', methods=['GET'])
def greetings(user):
    return "Hello " + user.capitalize()


if __name__ == '__main__':
    
    app.run('0.0.0.0', port=8081)
