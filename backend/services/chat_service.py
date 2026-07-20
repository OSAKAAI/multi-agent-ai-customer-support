from graph.workflow import graph


def process_message(message: str):
    """
    Process a user message using the LangGraph workflow.
    """

    state = {
        "message": message,
        "intent": "",
        "response": "",
        "products": [],
    }

    result = graph.invoke(state)

    return result