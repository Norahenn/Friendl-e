from flask import Flask
from flask_restplus import Resource, Api

app = Flask(__name__)
api = Api(app)


# This should be in a namespace,
# This is merely for testing purposes
@api.route('/hey')
# Not sure what resource is used for, but it crashes the server if I remove it
class HelloWorld(Resource):
    # On get on the /hey route, will call this function
    def get(self):
        # To check if route actually works
        # Go to http://127.0.0.1:5000/hey to check once you did python path/app.py
        return {'Hi': 'John :)'}

if __name__ == '__main__':
    # Enabling debug mode will reload the server on each modification
    # DEV ENVIRONMENT ONLY
    app.run(debug=True)