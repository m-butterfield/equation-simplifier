from sqlalchemy import Column, Text, Integer
from machine.database import Base

class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    title = Column(Text, nullable=False)
    email = Column(Text, nullable=False)

    def __init__(self, title=None, content=None):
        self.title = title
        self.content = content

    def __repr__(self):
        return '<Post %r>' % (self.title)
