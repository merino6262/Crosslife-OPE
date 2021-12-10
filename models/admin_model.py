from crosslife.extensions.database import db

class AdminModel(db.Model):
  __tablename__ = 'admin'
  id = db.Column(db.Integer, primary_key = True, autoincrement=True)
  user_name = db.Column(db.String(80))
  password = db.Column(db.String(80))

  def save(self):
    db.session.add(self)
    db.session.commit()

  @classmethod
  def auth(cls, user_name, password):
    return cls.query.filter(cls.password == password).filter((cls.user_name == user_name)).first()
