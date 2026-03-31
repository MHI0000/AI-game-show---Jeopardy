import random
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ai import generate_question

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

scores = []

with open("data/topics.json") as f:
    topics = json.load(f)

class Score(BaseModel):
    name: str
    score: int


@app.get("/question")
def get_question():
    topic = random.choice(topics)
    question = generate_question(topic)
    return {"question": question}


@app.post("/score")
def save_score(data: Score):
    scores.append({
        "name": data.name,
        "score": data.score
    })

    scores.sort(key=lambda x: x["score"], reverse=True)

    return {"status": "saved"}


@app.get("/leaderboard")
def leaderboard():
    return {"scores": scores[:10]}