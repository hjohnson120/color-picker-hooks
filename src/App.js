import React, { useState } from 'react'

export default function App(props) {
  const [hue, updateHue] = useState(180)
  const [saturation, updateSaturation] = useState(50)
  const [lightness, updateLightness] = useState(50)

  console.log({ lightness })
  console.log({ saturation })
  console.log({ hue })

  const randomColor = () => {
    updateHue(Math.ceil(Math.random() * 360))
    updateSaturation(Math.ceil(Math.random() * 100))
    updateLightness(Math.ceil(Math.random() * 100))
  }
  console.log({ randomColor })
  return (
    <>
      <main
        style={{
          backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`
        }}
      >
        <h1>Colors are Fun!</h1>
        <section class="slider-box">
          <div>
            <input
              value={hue}
              onValueChange={e => updateHue(e.target.value)}
              onChange={e => updateHue(e.target.value)}
              type="range"
              min="0"
              max="360"
            />
            <label for="hue">H</label>
          </div>
          <div>
            <input
              value={saturation}
              onValueChange={e => updateSaturation(e.target.value)}
              onChange={e => updateSaturation(e.target.value)}
              type="range"
              min="0"
              max="100"
            />
            <label for="hue">S</label>
          </div>
          <div>
            <input
              value={lightness}
              onValueChange={e => updateLightness(e.target.value)}
              onChange={e => updateLightness(e.target.value)}
              type="range"
              min="0"
              max="100"
            />
            <label for="hue">L</label>
          </div>
        </section>
        <h1>
          HSL:{hue}/{saturation}%/
          {lightness}%
        </h1>
        <p>New Random Color Button</p>
        <button onClick={randomColor}>Select </button>
      </main>
    </>
  )
}
