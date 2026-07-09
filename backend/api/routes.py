from fastapi import APIRouter

from models.schemas import ChatRequest, ChatResponse
from services.chat_service import process_message

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    intent = process_message(request.message)

    return ChatResponse(
        intent=intent
    )