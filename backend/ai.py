import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def generate_question(topic):

    prompt = f"""
Generate a trivia question about {topic}.

Return JSON:

{{
 "question": "",
 "options": ["", "", "", ""],
 "answer": ""
 "explanation": ""
}}
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash-lite",
            contents=prompt,
            config={
                "response_mime_type": "application/json",
            }
        )
        return json.loads(response.text)

    except Exception as e:

        print("API call error error:", e)

        # fallback question so API still works
        return {
            "question": "What is 1 + 1? (Default question when too heavy request)",
            "options": [
                "0",
                "1",
                "2",
                "3"
            ],
            "answer": "2",
            "explanation": "By defenition, 1 + 1 = 2."
        }