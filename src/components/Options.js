import React from 'react'
import Option from './Option.js'

const Options = (props) => {
    return (
        <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your options</h3>
          <button onClick={props.handleDeleteOptions} className="button button--link">Remove All</button>
        </div>
          {props.options.length === 0 && <p className="widget__message">Please Add an option to get started!</p>}
          {
            props.options.map((option, index) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}
            count ={index + 1} />)
          }
        </div>
      );
  }

  export default Options;