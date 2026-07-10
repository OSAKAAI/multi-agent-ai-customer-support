import uuid


def create_ticket(intent: str) -> str:
    """
    Simulates creating a customer support ticket.
    """

    ticket_id = str(uuid.uuid4())[:8].upper()

    responses = {
        "refund_request": (
            f"Your refund request has been registered successfully. "
            f"Ticket ID: {ticket_id}"
        ),

        "cancel_order": (
            f"Your order cancellation request has been submitted. "
            f"Ticket ID: {ticket_id}"
        ),
    }

    return responses.get(
        intent,
        f"Support ticket created successfully. Ticket ID: {ticket_id}"
    )