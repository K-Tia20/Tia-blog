function makeParticleStyle() {
  return {
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    delay: Math.random() * 5 + "s",
    duration: 5 + Math.random() * 5 + "s",
  }
}

document.addEventListener("nav", () => {
  const container = document.getElementById("particles")
  if (!container) return

  container.innerHTML = ""

  const dots = []

  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div")
    dot.className = "particle-dot animate-float"

    const s = makeParticleStyle()
    dot.style.left = s.left
    dot.style.top = s.top
    dot.style.animationDelay = s.delay
    dot.style.animationDuration = s.duration

    container.appendChild(dot)
    dots.push(dot)
  }

  const interval = setInterval(() => {
    for (const dot of dots) {
      const s = makeParticleStyle()
      dot.style.left = s.left
      dot.style.top = s.top
      dot.style.animationDelay = s.delay
      dot.style.animationDuration = s.duration
    }
  }, 200)

  window.addCleanup(() => {
    clearInterval(interval)
    container.innerHTML = ""
  })
})
