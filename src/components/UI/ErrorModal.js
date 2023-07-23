// ErrorModal (UI) component
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      {/* add the "onClick={props.onClick}" prop to the "backdrop" <div> if you want to close the modal on backdrop click */}
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Confirm</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
