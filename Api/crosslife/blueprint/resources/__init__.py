from flask import Blueprint
from flask_restful import Api
from .aluno import Aluno, Alunos
from .admin import Auth, Logout
from flask_cors import CORS

bp = Blueprint('resource', __name__)
api = Api(bp)
CORS(bp)

api.add_resource(Alunos, '/alunos')
api.add_resource(Aluno, '/aluno', '/aluno/<int:id>')
api.add_resource(Auth, '/login')
api.add_resource(Logout, '/logout')

def init_app(app):
  app.register_blueprint(bp)