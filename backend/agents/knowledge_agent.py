from prompts.knowledge_prompt import build_knowledge_prompt
from services.llm_service import ask_llm


def get_knowledge(
    intent: str,
    message: str,
    products: list,
) -> str:
    """
    Generates a customer support response using Gemini.
    """

    prompt = build_knowledge_prompt(
        intent=intent,
        message=message,
        products=products,
    )

    try:
        return ask_llm(prompt)

    except Exception as e:
        print(f"Knowledge Agent Error: {e}")

        return (
            "I'm sorry, I couldn't retrieve the requested information at the moment. "
            "Please try again later."
        )