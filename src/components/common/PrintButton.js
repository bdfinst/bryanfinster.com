import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const pxToInch = (px) => {
  return Math.floor(px / document.getElementById('docInch').offsetHeight)
}

const inchToPx = (mm) => {
  return document.getElementById('docInch').offsetHeight * mm
}

const range = (start, end) => {
  return Array(end - start)
    .join(0)
    .split(0)
    .map((val, id) => {
      return id + start
    })
}

export default ({ id, label }) => {
  const letterWidthInches = 8.5
  const letterHeightInches = 11

  return (
    <div className="tc mb4 mt2">
      {/*
    Getting pixel height in milimeters:
    https://stackoverflow.com/questions/7650413/pixel-to-mm-equation/27111621#27111621
  */}
      <div id="docInch" style={{ height: '1in' }} />

      <div
        onClick={() => {
          const input = document.getElementById(id)
          const width = input.offsetWidth
          const height = input.offsetHeight
          const inputHeightInches = pxToInch(input.offsetHeight)
          const letterHeightPx = inchToPx(letterHeightInches)
          const letterWidthPx = inchToPx(letterWidthInches)
          const numPages =
            inputHeightInches <= letterHeightInches
              ? 1
              : Math.floor(inputHeightInches / letterHeightInches) + 1
          console.log({
            width,
            height,
            inputHeightInches,
            letterHeightInches,
            letterHeightPx,
            letterWidthPx,
            numPages,
            range: range(0, numPages),
            comp: inputHeightInches <= letterHeightInches,
            inputHeightPx: input.offsetHeight,
          })

          html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')

            // Document of letterWidthInches wide and inputHeightInches high
            const pdf = new jsPDF({
              orientation: 'p',
              unit: 'in',
              format: [inputHeightInches + 1, letterWidthInches],
            })
            // if (inputHeightInches > letterHeightInches) {
            //   // elongated a4 (system print dialog will handle page breaks)
            //   pdf = new jsPDF('p', 'mm', [
            //     inputHeightInches + 16,
            //     letterWidthInches,
            //   ])
            // } else {
            //   // standard a4
            //   const pdf = new jsPDF()
            // }

            pdf.addImage(imgData, 'PNG', 10, 10, 4000, input.offsetHeight)
            pdf.save(`${id}.pdf`)
          })
        }}
      >
        {label}
      </div>
    </div>
  )
}
