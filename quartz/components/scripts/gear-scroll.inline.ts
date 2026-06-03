const updateGearRotation = () => {
  const gear = document.getElementById("page-title-gear")
  if (!gear) return

  const rotation = window.scrollY * 0.1
  gear.style.transform = `rotate(${rotation}deg)`
}

document.addEventListener("nav", () => {
  updateGearRotation()
  window.addEventListener("scroll", updateGearRotation)

  window.addCleanup(() => {
    window.removeEventListener("scroll", updateGearRotation)
  })
})
