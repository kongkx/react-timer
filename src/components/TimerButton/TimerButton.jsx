import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './TimerButton.css'

const TimerButton = ({ className, buttonAction, buttonValue }) => (
  <div
    className={classNames('button-container', className)}
    onClick={() => buttonAction()}
  >
    <p className="button-value">{buttonValue}</p>
  </div>
)

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
}

export default TimerButton
