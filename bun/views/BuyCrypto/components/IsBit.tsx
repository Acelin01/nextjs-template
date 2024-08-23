'use client'
import React from 'react'
import { useIsBtc } from '../hooks/useIsBtc'

const CryptoForm = () => {
  const isBtc = useIsBtc()

  return (
    <div>
      {isBtc ? (
        <p>You are trading Bitcoin!</p>
      ) : (
        <p>You are trading another cryptocurrency.</p>
      )}
    </div>
  )
}

export default CryptoForm
