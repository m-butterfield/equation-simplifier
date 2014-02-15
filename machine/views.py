from machine import app
from sympy.parsing.sympy_parser import parse_expr,\
    standard_transformations, implicit_multiplication_application
from flask import render_template, jsonify, request

transformations = standard_transformations + (implicit_multiplication_application,)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/simplify')
def simplify():
    expression = request.args.get('expression', '', type=str).replace('^', '**')
    if not expression:
        return jsonify(error=True)
    result = None
    try:
        result = str(parse_expr(expression,
                                transformations=transformations)).replace('**', '^')

    except:
        return jsonify(error=True)
    if not result:
        return jsonify(error=True)
    return jsonify(simplified_expr=result)
