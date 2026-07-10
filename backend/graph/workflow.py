from langgraph.graph import StateGraph, START, END

from graph.state import GraphState
from graph.nodes import (
    intent_node,
    knowledge_node,
    ticket_node,
)


def route_by_intent(state: GraphState) -> str:
    """
    Decide which node to execute based on the detected intent.
    """

    knowledge_intents = {
        "password_reset",
        "account_update",
        "order_status",
        "general_query",
    }

    ticket_intents = {
        "refund_request",
        "cancel_order",
    }

    if state["intent"] in knowledge_intents:
        return "knowledge"

    if state["intent"] in ticket_intents:
        return "ticket"

    # Default route
    return "knowledge"


# Create the workflow
workflow = StateGraph(GraphState)

# Register nodes
workflow.add_node("intent", intent_node)
workflow.add_node("knowledge", knowledge_node)
workflow.add_node("ticket", ticket_node)

# Define graph flow
workflow.add_edge(START, "intent")

workflow.add_conditional_edges(
    "intent",
    route_by_intent,
    {
        "knowledge": "knowledge",
        "ticket": "ticket",
    },
)

workflow.add_edge("knowledge", END)
workflow.add_edge("ticket", END)

# Compile graph
graph = workflow.compile()