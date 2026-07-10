from graph.state import GraphState
from agents.intent_agent import detect_intent
from agents.knowledge_agent import get_knowledge
from agents.ticket_agent import create_ticket


def intent_node(state: GraphState) -> GraphState:
    """
    LangGraph node responsible for intent detection.
    """

    intent = detect_intent(state["message"])

    state["intent"] = intent

    return state


def knowledge_node(state: GraphState) -> GraphState:
    """
    Executes the Knowledge Agent.
    """

    response = get_knowledge(
        intent=state["intent"],
        message=state["message"]
    )

    state["response"] = response

    return state

def ticket_node(state: GraphState) -> GraphState:
    """
    Executes the Ticket Agent.
    """

    response = create_ticket(state["intent"])

    state["response"] = response

    return state

