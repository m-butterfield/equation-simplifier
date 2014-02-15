from machine import app
from flask import render_template, jsonify, request

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/simplify')
def simplify():
    expression = request.args.get('expression', '', type=str)
    return jsonify(simplified_expr='result: ' + expression)
