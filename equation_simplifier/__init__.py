from flask import Flask

app = Flask(__name__)

import equation_simplifier.views

