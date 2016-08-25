from flask import Flask, request, json, jsonify
import benchmark

app = Flask(__name__)

@app.route('/')
def root():
    return('FLASK SERVER')

@app.route('/api/algos', methods=['POST'])
def run():
    print(request.is_json)
    data = request.get_json(force=True)
    lengthArr = data['lengthArr']
    request_data = data['request_data']
    result = benchmark.handle_request(lengthArr, request_data)
    print("RESULT")
    print(result)
    # print(json.loads(data))
    # print(json.dumps(data))
    return result

if __name__ == "__main__":
    app.run(port=int('8002'))
