import os

from dotenv import load_dotenv
from langchain_groq import ChatGroq

load_dotenv()


llm = ChatGroq(
    model="llama-3.1-8b-instant",
    groq_api_key=os.getenv("GROQ_API_KEY"),
    temperature=0,
)


def ask_llm(prompt: str) -> str:
    """
    Sends a prompt to the configured LLM and returns the response.
    """

    try:
        response = llm.invoke(prompt)
        return response.content

    except Exception as e:
        print(f"Groq Error: {e}")

        return (
            "I'm sorry, the AI service is temporarily unavailable. "
            "Please try again later."
        )