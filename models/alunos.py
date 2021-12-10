from enum import unique
from crosslife.extensions.database import db

class AlunoModel(db.Model):
  __tablename__ = 'aluno'
  id = db.Column(db.Integer, primary_key = True, autoincrement=True)
  nome = db.Column(db.String(80))
  idade = db.Column(db.Integer)
  cpf = db.Column(db.String(11), unique=True)
  telefone = db.Column(db.String(11))
  email = db.Column(db.String(80))

  def save(self):
    db.session.add(self)
    db.session.commit()

  def update(self, nome, idade, cpf, telefone, email):
    self.nome = nome
    self.idade = idade
    self.cpf = cpf
    self.telefone = telefone
    self.email = email

  def remove(self):
    db.session.delete(self)
    db.session.commit()

  @classmethod
  def find_all(cls):
    return cls.query.all()

  @classmethod
  def find(cls, id):
    return cls.query.filter_by(id=id).first()

