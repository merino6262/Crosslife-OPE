from crosslife.extensions.database import db

class RevokedTokenModel(db.Model):
  __tablename__ = 'revoked_tokens'
  id = db.Column(db.Integer, primary_key = True, autoincrement=True)
  jti = db.Column(db.String(160), unique=True)

  def save(self):
    db.session.add(self)
    db.session.commit()

  @classmethod
  def is_jti_blacklisted( cls, jti):
    query = cls.query.filter_by(jti=jti).first()
    return bool(query)