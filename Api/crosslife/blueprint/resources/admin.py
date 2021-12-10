from msilib.schema import Error
from flask import request, jsonify
from flask_restful import Resource
from crosslife.models.admin_model import AdminModel
from crosslife.models.schema import AdminSchema
from flask_jwt_extended import create_access_token, jwt_required, get_jwt
from crosslife.models.revoked_token_model import RevokedTokenModel

class Auth(Resource):
  def post(self):
    try:
      schema_obj = AdminSchema()
      args = schema_obj.load(request.json)
      print()
      user = AdminModel.auth(**args)
      if user:
        token_access = create_access_token(identity=user.user_name)
        return {'Token': token_access}, 200
      return {'ERRO': 'incorrect user'}, 404
    except Exception as erro:
      return {'ERRO:': f'{erro.__cause__}'}, 500

class Logout(Resource):
  @jwt_required()
  def post(self):
    try: 
      jti = get_jwt()['jti']
      revoked_token = RevokedTokenModel(jti=jti)
      revoked_token.save()
      return {}, 204
    except Error as erro:
      return jsonify({'ERRO': erro.__cause__})
