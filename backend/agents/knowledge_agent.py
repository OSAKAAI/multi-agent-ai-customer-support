def get_knowledge(intent: str) -> str:
    """
    Returns a predefined response based on the detected intent.
    """

    knowledge_base = {
        "password_reset": (
            "To reset your password, click 'Forgot Password' on the login page "
            "and follow the instructions sent to your registered email."
        ),

        "account_update": (
            "You can update your account details by visiting the Account Settings page."
        ),

        "order_status": (
            "You can check your current order status from the Orders section of your account."
        ),

        "general_query": (
            "How can I assist you today?"
        )
    }

    return knowledge_base.get(
        intent,
        "I'm sorry, I couldn't find information for your request."
    )