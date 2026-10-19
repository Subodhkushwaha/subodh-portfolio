import { useEffect, useRef } from 'react'

// Animated network of dots that reacts to the mouse / finger.
export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const c = canvasRef.current
    const ctx = c.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: -999, y: -999 }
    let w = 0, h = 0, particles = [], raf = 0

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#3d4bff'

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      c.width = w * dpr
      c.height = h * dpr
      c.style.width = w + 'px'
      c.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(90, (w * h) / 15000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        r: Math.random() * 1.8 + 1,
      }))
      if (reduced) draw()
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      const color = accent()
      ctx.fillStyle = color
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (!reduced) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
        }
        ctx.globalAlpha = 0.6
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = p.x - b.x, dy = p.y - b.y
          const q = dx * dx + dy * dy
          if (q < 16900) {
            ctx.globalAlpha = (1 - q / 16900) * 0.3
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const mx = p.x - mouse.x, my = p.y - mouse.y
        const mq = mx * mx + my * my
        if (mq < 32400) {
          ctx.globalAlpha = (1 - mq / 32400) * 0.65
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = mouse.y = -999 }

    resize()
    if (!reduced) draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <>
      <div className="blobs" aria-hidden="true"><i /><i /><i /></div>
      <canvas id="bg" ref={canvasRef} aria-hidden="true" />
    </>
  )
}
