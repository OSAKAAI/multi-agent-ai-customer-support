from typing import List
from pydantic import BaseModel


class ChatRequest(BaseModel):
    message: str


class ProductResponse(BaseModel):
    slug: str


class ChatResponse(BaseModel):
    message: str
    products: List[ProductResponse] = []