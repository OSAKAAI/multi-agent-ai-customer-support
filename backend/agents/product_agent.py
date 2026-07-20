import re
from knowledge_base.products import products


CATEGORY_KEYWORDS = {
    "mouse": "gaming-mouse",
    "mice": "gaming-mouse",
    "keyboard": "gaming-keyboards",
    "chair": "gaming-chairs",
    "laptop": "gaming-laptops",
    "headset": "gaming-headsets",
    "cabinet": "pc-cabinets",
    "case": "pc-cabinets",
    "mousepad": "mouse-pads",
    "mouse pad": "mouse-pads",
}


def extract_budget(query):
    match = re.search(r"(\d{4,6})", query)

    if match:
        return int(match.group())

    return None


def search_products(query: str):

    query = query.lower()

    budget = extract_budget(query)

    detected_category = None

    for keyword, category in CATEGORY_KEYWORDS.items():
        if keyword in query:
            detected_category = category
            break

    # 🚨 No product-related keyword found
    if detected_category is None:
        return []

    results = []

    for product in products:

        if product["category"] != detected_category:
            continue

        if budget is not None and product["price"] > budget:
            continue

        results.append(product)

    return results[:5]