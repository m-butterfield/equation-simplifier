from flask import Flask

app = Flask(__name__)

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

import machine.views
from machine.database import db_session
