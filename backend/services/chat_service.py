from graph.workflow import graph


def process_message(message: str) -> str:
    """
    Process the user message using the LangGraph workflow.
    """

    state = {
        "message": message,
        "intent": "",
        "response": ""
    }

    result = graph.invoke(state)

    return result["response"]