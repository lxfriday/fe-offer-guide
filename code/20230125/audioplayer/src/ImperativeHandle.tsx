import React, { useRef, useImperativeHandle, forwardRef } from 'react'

export default function ImperativeHandle() {
  const ref = useRef<{ focus(): void; getName(): void }>(null)
  return (
    <div>
      <FancyInput ref={ref} />
      <button onClick={() => ref.current?.focus()}>btn</button>
    </div>
  )
}

const FancyInput = forwardRef<{
  focus(): void
  getName(): void
}>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus()
    },
    getName() {},
  }))
  return <input ref={inputRef} />
})
