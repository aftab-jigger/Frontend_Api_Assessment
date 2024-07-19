interface AlertProps {
  alertType?: string;
  text: string;
}

const Alert = ({ alertType = 'info', text }: AlertProps) => {
  return (
    <div className={`alert alert-${alertType}`} role='alert'>
      {text}
    </div>
  );
};
export default Alert;
