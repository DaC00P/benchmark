import requests
from flask import Flask, request, redirect, json

ports = {
    'node': "8001",
    'flask': "8002",
    'static': "8003"
}

services = {
    'javascript': 'node',
    'python': 'flask'
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

@app.route('/api/algos', methods=['POST'])
def send():
    incoming_data = request.json
    test_params = incoming_data['lengthArr']
    responses = []
    for key, request_data in incoming_data.items():
        print(key, request_data)
        if key[0:4] != 'data':
            continue
        language = request_data['language']
        server = services[language]
        request_url = 'http://localhost:' + ports[server] + request.path
        outgoing_data = {'lengthArr': test_params, 'request_data': json.dumps(request_data)}
        res = requests.post(request_url, outgoing_data)
        responses.append(res)
        print(responses)
        return "DONE"
        
# @app.route('/api/algos', methods=['POST'])
# def send():
#     data = request.json
#     servers = {}
#     responses = []
#     for service, server in services.items():
#         servers[server] = False
#
#     print('servers', servers)
#
#     for key, params in data.items():
#         if key[0:4] == 'data':
#             language = params['language']
#             server = services[language]
#             servers[server] = True
#
#     print('servers', servers)
#
#     for server, send_status in servers.items():
#         if send_status == True:
#             url = 'http://localhost:' + ports[server] + request.path
#             res = requests.post(url, data)
#             responses.append(res)
#             print(responses)
#
#     print(request.json['data1'])
#     return "REDIRECTED"


# def requestParser(params):
#     request = {'flask': {}, 'node': {}}
#     python_request = {}
#     if params['data1']['language1'] == flask


#gunicorn
#tornado

if __name__  == "__main__":
    app.run()
