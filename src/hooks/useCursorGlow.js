export function useCursorGlow() {
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--gx', `${x}%`)
    e.currentTarget.style.setProperty('--gy', `${y}%`)
  }
  return { onMouseMove, className: 'cursor-glow' }
}
