"use client"
import React, { useEffect, useRef, useState } from 'react'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const randomLetter = () => LETTERS[Math.floor(Math.random() * LETTERS.length)]

// On hover, each character in turn cycles through `scrambles` random A-Z
// letters before settling back to its real value, then the next one starts.
export default function ScrambleText({ text, as: Tag = 'p', scrambles = 4, speed = 30, scrambleColor = 'red', ...props }) {
  // `shown` is the settled (black) part and `scramble` the random letter after
  // it; the rest of the text is rendered invisibly so the element keeps its
  // size (and hover area) while the letters come in.
  const [shown, setShown] = useState(text)
  const [scramble, setScramble] = useState(null)
  const timer = useRef(null)

  const stop = () => clearTimeout(timer.current)

  useEffect(() => stop, [])

  const run = () => {
    stop()
    let index = 0
    let step = 0

    const tick = () => {
      // Spaces appear straight away — nothing to scramble there
      while (index < text.length && text[index] === ' ') index++
      if (index >= text.length) {
        setShown(text)
        setScramble(null)
        return
      }

      if (step < scrambles) {
        setShown(text.slice(0, index))
        setScramble(randomLetter())
        step++
      } else {
        setShown(text.slice(0, index + 1))
        setScramble(null)
        step = 0
        index++
      }
      timer.current = setTimeout(tick, speed)
    }

    setShown('')
    setScramble(null)
    timer.current = setTimeout(tick, speed)
  }

  return (
    <Tag onMouseEnter={run} {...props}>
      <span style={{ color: '#fff' }}>{shown}</span>
      {scramble && <span style={{ color: scrambleColor , width:"1px" }}>{scramble}</span>}
      <span style={{ visibility: 'hidden' }}>{text.slice(shown.length + (scramble ? 1 : 0))}</span>
    </Tag>
  )
}
