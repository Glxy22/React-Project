


    interface Props{
        children : ReactNode;
        onClose : () => void;

    }
    const Alert = ({children, onClose}: Props) => {
  return (
    <>
    <div className="alert alert-primary alert-dismissible">{children}
    <button type="button" className="btn-close" onClick= {onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    {/* <button type="button" className="btn btn-primary">Primary</button> */}
    </>
  )
}



export default Alert