const Notification = props => {
  //  Write your code here.
  const {className, messageText} = props
  return <p className={'${className}'}>{messageText}</p>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1>Notifications</h1>
    <div>
      <div className='information-msg'>
        <img src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' />
        <Notification
          className='information'
          messageText='Information Message'
        />
      </div>
      <div className='success-msg'>
        <img src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png' />
        <Notification className='success' messageText='Success Message' />
      </div>
      <div className='warning-msg'>
        <img src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png' />
        <Notification className='warning' messageText='Warning Message' />
      </div>
      <div className='error-msg'>
        <img src='https://assets.ccbp.in/frontend/react-js/error-icon-img.png' />
        <Notification className='error' messageText='Error Message' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
