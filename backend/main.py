from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Multi-Agent AI Customer Support API Running!"
    }
