from typing import TypedDict


class GraphState(TypedDict):
    message: str
    intent: str
    response: str