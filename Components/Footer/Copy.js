import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear()
    return (
      <>
      <div className="text-center">
          &copy; CopyRight {year}. All Right Reserved
      </div>
      </>
    )
}

