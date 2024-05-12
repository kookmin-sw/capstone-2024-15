from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from chatbot import get_chain, ChainInput
from typing import Optional
from fastapi.requests import Request

app = FastAPI()

# Initialize the chatbot chain
chatbot_chain = get_chain()

@app.post("/chatbot")
async def chat_with_bot(request: Request):
    try:
        data = await request.json()

        response = chatbot_chain.invoke(data)

        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
