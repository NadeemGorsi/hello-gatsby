import React from "react"
import jsPDF from "jspdf"
import leafletImage from "leaflet-image"

const PrintButton = ({ themap, label }) => (
  <button
    className="btn"
    onClick={(e) => {
      e.target.innerText = `    Pls, wait...    `
      const pdf = new jsPDF()
      leafletImage(themap, function (err, canvas) {
        const imgData = canvas.toDataURL()
        pdf.text("Welcome to this pdf file", 5, 10)
        pdf.addImage(imgData, "PNG", 5, 20)
        pdf.save(`the_maplet.pdf`)
      })
    }}
  >
    {label}
  </button>
)

export default PrintButton
