from prompts.knowledge_prompt import build_knowledge_prompt
from services.llm_service import ask_llm


def get_knowledge(intent: str, message: str) -> str:
    """
    Generates a customer support response using Gemini.
    """

    prompt = build_knowledge_prompt(intent, message)

    try:
        return ask_llm(prompt)

    except Exception:
        return (
            "I'm sorry, I'm unable to retrieve the requested information "
            "at the moment. Please try again later."
        )