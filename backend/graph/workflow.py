from langgraph.graph import StateGraph, START, END

from graph.state import GraphState
from graph.nodes import intent_node

workflow = StateGraph(GraphState)

workflow.add_node("intent", intent_node)

workflow.add_edge(START, "intent")
workflow.add_edge("intent", END)

graph = workflow.compile()