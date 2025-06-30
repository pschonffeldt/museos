type AlertProp = {
  text: string;
};

const Alert = ({ text }: AlertProp) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>

      {text}
    </div>
  );
};

export default Alert;
