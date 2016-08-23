from flask import Flask, request
import benchmark

app = Flask(__name__)

@app.route('/')
def root():
    return('FLASK SERVER')

@app.route('/api/algos', method=['POST'])
def run():
    print(request)
    print(params)
    return('ALGO API')

# @app.route('/bundle.js')

# url_for('assets', filename='style.css')
# url_for('assets', filename='bundle.js')

if __name__ == "__main__":
    app.run(port=int('8001'))
