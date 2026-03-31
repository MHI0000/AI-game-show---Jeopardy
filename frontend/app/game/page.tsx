"use client"

import { useEffect, useState } from "react"

type Question = {
  question: string
  options: string[]
  answer: string
  explanation: string
}

type Score = {
  name: string
  score: number
}

export default function Game(){

  const [question,setQuestion] = useState<Question | null>(null)
  const [score,setScore] = useState(0)
  const [topic,setTopic] = useState("general")
  const [time,setTime] = useState(10)
  const [leaderboard,setLeaderboard] = useState<Score[]>([])

  async function loadQuestion(){

    const res = await fetch(
      `http://127.0.0.1:8000/question?topic=${topic}`
    )

    const data = await res.json()

    setQuestion(data.question)

    setTime(30)
  }

  async function loadLeaderboard(){

    const res = await fetch(
      "http://127.0.0.1:8000/leaderboard"
    )

    const data = await res.json()

    setLeaderboard(data.scores)
  }

  async function saveScore(){

    const name = prompt("Enter your name")

    if(!name) return

    await fetch("http://127.0.0.1:8000/score",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name:name,
        score:score
      })
    })

    loadLeaderboard()
  }

  function choose(option:string){

    if(!question) return

    if(option === question.answer){
      alert("Correct!\n\n" + question.explanation)
      setScore(s=>s+1)
    }else{
      alert("Wrong!\n\nCorrect answer: " + question.answer + "\n\n" + question.explanation)
    }

    loadQuestion()
  }

  useEffect(()=>{
    loadQuestion()
    loadLeaderboard()
  },[topic])

  useEffect(()=>{

    const timer = setInterval(()=>{
      setTime(t=>t-1)
    },1000)

    return ()=>clearInterval(timer)

  },[])

  useEffect(()=>{

    if(time === 0){
      alert("Time's up!")
      loadQuestion()
    }

  },[time])

  return (

    <div style={{padding:"40px"}}>

      <h1>AI Game Show</h1>

      <h3>Score: {score}</h3>

      <p>Time Left: {time}</p>

      <hr/>

      {question && (

        <div>

          <h2>{question.question}</h2>

          {question.options.map(o => (

            <button
              key={o}
              onClick={()=>choose(o)}
              style={{display:"block",margin:"10px"}}
            >
              {o}
            </button>

          ))}

        </div>

      )}

      <hr/>

      <button onClick={saveScore}>
        Save Score
      </button>

      <h2>Leaderboard</h2>

      {leaderboard.map((p,i)=>(
        <div key={i}>
          {p.name} - {p.score}
        </div>
      ))}

    </div>

  )
}