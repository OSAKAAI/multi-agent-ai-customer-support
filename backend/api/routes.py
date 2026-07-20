from fastapi import APIRouter

from models.schemas import ChatRequest, ChatResponse, ProductResponse
from services.chat_service import process_message

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    result = process_message(request.message)

    return ChatResponse(
        message=result["response"],
        products=[
            ProductResponse(slug=product["slug"])
            for product in result["products"]
        ]
    )