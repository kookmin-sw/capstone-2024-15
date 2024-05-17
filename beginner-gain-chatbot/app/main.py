from fastapi import FastAPI, WebSocket, Response
from starlette.websockets import WebSocketDisconnect

from chatbot import get_chain
import asyncio
from pydantic import BaseModel

app = FastAPI()

# Initialize the chatbot chain
chatbot_chain = get_chain()

# Store connected clients
connected_clients = set()


class Message(BaseModel):
    content: str


def stream_responses_sync(generator, websocket):
    async def send_item(item):
        await websocket.send_text(item)

    for item in generator:
        asyncio.run(send_item(item))


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        try:
            data = await websocket.receive_text()
            generator = chatbot_chain.stream({"text": data})
            await asyncio.to_thread(stream_responses_sync, generator, websocket)
        except WebSocketDisconnect:
            break
