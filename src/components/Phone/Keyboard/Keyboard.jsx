import React from 'react'
import Button from './Button/Button'

import './keyboard.scss'

export default function Keyboard() {
  return (
    <div className="keyboard">
      <div className="upper-buttons">
        <div className="button-row">
          <Button>—</Button>
          <Button>^</Button>
          <Button>—</Button>
        </div>
        <div className="button-row">
          <Button>c</Button>
          <Button>v</Button>
          <Button>h</Button>
        </div>
      </div>
      <div className="number-buttons">
        <div className="button-row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </div>
        <div className="button-row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
        </div>
        <div className="button-row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
        </div>
        <div className="button-row">
          <Button>*</Button>
          <Button>0</Button>
          <Button>#</Button>
        </div>
      </div>
    </div>
  )
}
