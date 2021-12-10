from crosslife.extensions.seralize import ma
from marshmallow import EXCLUDE, fields, validate
from .alunos import AlunoModel
from .admin_model import AdminModel

class AlunoSchema(ma.SQLAlchemyAutoSchema):
  class Meta:
    model = AlunoModel
    unknown = EXCLUDE

  nome = fields.Str(required=True, validate=validate.Length(min=1))
  idade = fields.Int(required=True, validate=validate.Range(min=6))
  cpf = fields.Str(required=True, validate=validate.Length(equal=11))
  telefone = fields.Str(required=True)
  email = fields.Email(required=True, validate=validate.Regexp(r'^[\w-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$'))

class AdminSchema(ma.SQLAlchemyAutoSchema):
  class Meta:
    model = AdminModel
    unknown = EXCLUDE
  
  user_name = fields.Str(required=True)
  password = fields.Str(require=True)
  