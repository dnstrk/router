import React from 'react'
import { useParams } from 'react-router-dom'

export default function CardPage() {
    const {id } = useParams()
  return (
    <div>
        {id}
        CardPage
    </div>
  )
}
