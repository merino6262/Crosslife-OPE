from crosslife.models.revoked_token_model import RevokedTokenModel
from flask_jwt_extended import JWTManager

jwt= JWTManager()

@jwt.token_in_blocklist_loader
def verifica_blacklist(self, token):
    jti = token['jti']
    return RevokedTokenModel.is_jti_blacklisted(jti)

@jwt.revoked_token_loader
def token_de_acesso_invalido(jwt_header, jwt_payload):
    return {'ERRO': 'You have been logged out.'}, 401 

def init_app(app):
  jwt.init_app(app)
  

  