import React, { useState, useEffect, memo } from 'react'

export default function Pagea() {
  const [num, setNum] = useState(0)
  return (
    <div>
      Pagea {num}
      <div>
        <div>
          <button onClick={() => setNum(num + 1)}>change</button>
        </div>
        <MemoCompA></MemoCompA>
      </div>
    </div>
  )
}

type CompAType = {
  num: number
}

function CompA() {
  console.log('CompA')
  return <div>CompA</div>
}

const MemoCompA = memo(CompA)
