from graph.state import GraphState
from agents.intent_agent import detect_intent


def intent_node(state: GraphState) -> GraphState:
    """
    LangGraph node responsible for intent detection.
    """

    intent = detect_intent(state["message"])

    state["intent"] = intent

    return state