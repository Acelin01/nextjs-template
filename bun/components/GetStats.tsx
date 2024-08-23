'use client'

import { useGetStats } from "@/hooks/api"

export default () => {
  const data = useGetStats()

  return (
    <div>
      {data?.toString()}

    </div>
  )
}