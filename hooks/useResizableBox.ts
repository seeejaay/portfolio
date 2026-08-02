import { useState, useEffect, useRef, useCallback } from "react"
import { ResizableBoxConstants } from "@/constants/resizableBox"

export function useResizableBox() {
  const [box, setBox] = useState({ x: 0, y: 0, w: 1000, h: 280 })
  const isDragging = useRef<boolean>(false)
  const currentCorner = useRef<string | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const startPos = useRef({ mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0 })
  const { MIN_W, MAX_W, MIN_H, MAX_H } = ResizableBoxConstants

  // 1. Single source of truth for the physical layout boundary

  const getMaxContainerWidth = useCallback(() => {
    if (typeof window === "undefined") return MAX_W

    // clientWidth ignores scrollbars, preventing off-screen bleeding
    const screenWidth = document.documentElement.clientWidth

    // Increased the subtraction buffer to respect your red CSS margins
    if (screenWidth < 768) return screenWidth - 64
    if (screenWidth < 1050) return screenWidth - 96
    return MAX_W
  }, [MAX_W])

  useEffect(() => {
    const handleResize = () => {
      setBox((prev) => ({
        ...prev,
        // Always grab the exact same layout boundaries the dragger uses
        w: getMaxContainerWidth(),
      }))
    }

    window.addEventListener("resize", handleResize)
    const timeoutId = setTimeout(handleResize, 0)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [getMaxContainerWidth])

  useEffect(() => {
    const contentElement = contentRef.current
    if (!contentElement) return

    const syncHeight = () => {
      const nextHeight = contentElement.scrollHeight

      setBox((prev) =>
        prev.h === nextHeight ? prev : { ...prev, h: nextHeight }
      )
    }

    syncHeight()

    if (typeof ResizeObserver === "undefined") {
      return
    }

    const observer = new ResizeObserver(syncHeight)
    observer.observe(contentElement)

    return () => {
      observer.disconnect()
    }
  }, [box.w])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !currentCorner.current) return

      const dx = e.clientX - startPos.current.mouseX
      const dy = e.clientY - startPos.current.mouseY

      let newX = startPos.current.x
      let newY = startPos.current.y
      let newW = startPos.current.w
      let newH = startPos.current.h

      // RIGHT
      if (currentCorner.current.includes("right")) {
        // Use our helper so it respects the red CSS borders perfectly
        const currentMaxWidth = getMaxContainerWidth()
        const maxAllowedWidth = currentMaxWidth - startPos.current.x

        newW = Math.min(
          maxAllowedWidth,
          Math.max(MIN_W, startPos.current.w + dx)
        )
      }

      // LEFT
      if (currentCorner.current.includes("left")) {
        const maxDx = startPos.current.w - MIN_W
        const minDx = Math.max(startPos.current.w - MAX_W, -startPos.current.x)

        const safeDx = Math.max(minDx, Math.min(dx, maxDx))

        newX = startPos.current.x + safeDx
        newW = startPos.current.w - safeDx
      }

      // BOTTOM
      if (currentCorner.current.includes("bottom")) {
        newH = Math.min(MAX_H, Math.max(MIN_H, startPos.current.h + dy))
      }

      // TOP
      if (currentCorner.current.includes("top")) {
        const maxDy = startPos.current.h - MIN_H
        const minDy = startPos.current.h - MAX_H
        const safeDy = Math.max(minDy, Math.min(dy, maxDy))

        newY = startPos.current.y + safeDy
        newH = startPos.current.h - safeDy
      }

      setBox({ x: newX, y: newY, w: newW, h: newH })
    }

    const handleMouseUp = () => {
      isDragging.current = false
      currentCorner.current = null
      document.body.style.cursor = "default"
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [MIN_W, MAX_W, MIN_H, MAX_H, getMaxContainerWidth])

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    corner: string
  ) => {
    e.preventDefault()
    isDragging.current = true
    currentCorner.current = corner
    startPos.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      x: box.x,
      y: box.y,
      w: box.w,
      h: box.h,
    }

    document.body.style.cursor =
      corner === "top-left" || corner === "bottom-right"
        ? "nwse-resize"
        : "nesw-resize"
  }

  const handleDoubleClick = () => {
    setBox({ x: 0, y: 0, w: 1000, h: 280 })
  }

  return { box, contentRef, handleMouseDown, handleDoubleClick }
}
