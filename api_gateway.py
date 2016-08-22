import requests
from flask import Flask, request, redirect

ports = {
    'node': "8001",
    'flask': "8002",
    'static': "8003"
}

app = Flask(__name__)

@app.route('/')
def reroute():
    res = requests.get('http://localhost:' + ports['static']+ '/' )
    print(res)
    return res.content

@app.route('/<path:params>')
def root(params):
    if params == '':
        res = requests.get('http://localhost:' + ports['static']+ '/' )
        return res.content
    else:
        url = 'http://localhost:' + ports['static']+ '/' + params
        return redirect(url, code=302, Response=None)

# @app.route('/<path>')
# def get_static(path):
#     debugger
#     res = requests.get('http://localhost:' + ports['node']+ '/' + path )
#     print(res)
#     return res._content


#gunicorn
#tornado

if __name__  == "__main__":
    app.run()
