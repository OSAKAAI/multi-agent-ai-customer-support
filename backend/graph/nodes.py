from graph.state import GraphState

from agents.intent_agent import detect_intent
from agents.knowledge_agent import get_knowledge
from agents.ticket_agent import create_ticket
from agents.product_agent import search_products


def intent_node(state: GraphState) -> GraphState:
    """
    Detects the user's intent.
    """

    intent = detect_intent(state["message"])

    state["intent"] = intent

    return state


def knowledge_node(state: GraphState) -> GraphState:
    """
    Executes the Knowledge Agent.
    Searches products before querying Gemini.
    """

    products = search_products(state["message"])

    state["products"] = products

    response = get_knowledge(
        intent=state["intent"],
        message=state["message"],
        products=products,
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