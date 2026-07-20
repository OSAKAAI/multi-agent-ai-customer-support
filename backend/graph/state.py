from typing import TypedDict, List


class GraphState(TypedDict):
    message: str
    intent: str
    response: str
    products: List[dict]