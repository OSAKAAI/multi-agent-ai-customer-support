from services.llm_service import ask_llm


def detect_intent(message: str) -> str:
    """
    Uses Gemini to classify the user's intent.
    """

    prompt = f"""
You are an AI Intent Classification Agent.

Your job is to classify the customer's message into ONLY ONE of these intents:

- password_reset
- refund_request
- order_status
- account_update
- cancel_order
- general_query

Rules:
- Return ONLY the intent.
- Do not explain.
- Do not write full sentences.
- Output must be exactly one intent from the list.

Customer Message:
{message}
"""

    intent = ask_llm(prompt)

    return intent.strip()