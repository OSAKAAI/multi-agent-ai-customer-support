from agents.intent_agent import detect_intent


def process_message(message: str) -> str:
    """
    Process the user message and return the detected intent.

    Later this function will:
    - Call LangGraph
    - Invoke multiple AI agents
    - Generate the final response
    """

    intent = detect_intent(message)

    return intent