from flask import Flask, jsonify, request
from flask_cors import CORS

#importing files I wrote
from data import *

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app)

#This route will get the data for the map
@app.route('/getMapData', methods=['GET', 'POST'])
def route_one():
    data = Data()
    if request.method == 'POST':
        post_data = request.get_json()
        data.getMapData(post_data)
    return jsonify(3)

if __name__ == '__main__':
    app.run()
