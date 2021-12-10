from sqlite3 import IntegrityError
from flask import request
from flask_restful import Resource
from crosslife.models.alunos import AlunoModel
from crosslife.models.schema import AlunoSchema
from marshmallow.exceptions import ValidationError
from flask_jwt_extended import jwt_required

class Alunos(Resource):
  def get(self):
    try:
      schema_obj = AlunoSchema()
      return [schema_obj.dump(aluno) for aluno in AlunoModel.find_all()]
    except Exception as erro:
      return {'ERRO:': f'{erro.__cause__}'}, 500

class Aluno(Resource):
  def put(self, id):
    try:
      schema_obj = AlunoSchema()
      args = schema_obj.load(request.json)
      aluno = AlunoModel.find(id)
      aluno.update(**args)
      aluno.save()
    except ValidationError as erro:
      lista_erros = [{key: value[0]} for key, value in erro.messages.items()]
      return  {'ERRO': lista_erros}, 422
    except Exception as erro:
      return {'ERRO:': f'{erro.__cause__}'}, 500

    return schema_obj.dump(aluno), 200

  @jwt_required()
  def post(self):
    try:
      schema_obj = AlunoSchema()
      args = schema_obj.load(request.json)
      aluno = AlunoModel(**args)
      aluno.save()
    except ValidationError as erro:
      lista_erros = [{key: value[0]} for key, value in erro.messages.items()]
      return  {'ERRO': lista_erros}, 422
    except IntegrityError:
      return {'ERRO': 'This user already exists in the bank'}, 422
    except Exception as erro:
      return {'ERRO:': f'{erro.__cause__}'}, 500

    return schema_obj.dump(aluno), 201

  def delete(self, id):
    try:
      aluno = AlunoModel.find(id)
      aluno.remove()
    except AttributeError:
      return {'ERRO': 'Usario não foi encontrado na base de dados'}, 404
    except Exception as erro:
      return {'ERRO:': f'{erro.__cause__}'}, 500

    return {}, 204


  