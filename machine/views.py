from machine import app
from flask import render_template, jsonify, request

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/simplify')
def simplify():
    expression = request.args.get('expression', '', type=str)

    print expression

    if not expression:
        return jsonify(error=True)



    return jsonify(simplified_expr='result: ' + expression)
