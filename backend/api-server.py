from flask import Flask
from flask import json


from flask import Flask
from flask import jsonify
from flask import request
import os
from flask import redirect, url_for
from werkzeug.utils import secure_filename
from flask import send_file, send_from_directory
from flask import jsonify, make_response
import sys
import magic


UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# POST to url:port/api/v1/login
# query parameters: username, password
@app.route('/api/v1/login', methods=['POST'])
def loin():
    username = request.args.get('username')
    password = request.args.get('password')
    print(username)
    print(password)
    return make_response(jsonify( username="123",
        email="1333",
        id="qs"), 200)

# POST to url:port/api/v1/problem
# query parameters: problem_id
@app.route('/api/v1/problem', methods=['POST'])
def handle_user_requset():
    problem = request.args.get('problem_id')
    soluton=""
    if int(problem) == 1:
        soluton = "1 problem solution"
    if int(problem)== 2:
        soluton = "2 problem solution"
    print(problem)
    return make_response(jsonify(solution=soluton), 200)


# POST to url:port/api/v1/file_upload
# body parameters: file(multipart/form-data)
@app.route('/api/v1/file_upload', methods=['POST'])
def handle_user_file_upload():
    if request.method == 'POST':
        file = request.files['file']
        print(file)
        if file:
            print(file.filename)
            # filename = secure_filename(file.filename)
            # print("saved file name:", filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
            return make_response(jsonify( success='ok'), 200)

# POST to url:port/api/v1/get_file
# body parameters: file(multipart/form-data)
@app.route('/api/v1/get_file', methods=['GET'])
def sendFile():
    return send_file('uploads\\filename.docx', mimetype='application/vnd.openxmlformats-officedocument.wordprocessingml.document', as_attachment=True)