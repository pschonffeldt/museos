type AlertProp = {
  text: string;
};

const Alert = ({ text }: AlertProp) => {
  return (
    <div className="alert alert-primary" role="alert">
      {text}
    </div>
  );
};

export default Alert;
