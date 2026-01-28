from flask import Flask
from .config import Config
from .extensions import db
from .models import User   

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)

    with app.app_context():
        db.create_all()   # 👈 CREA LA BD Y TABLAS

    return app
