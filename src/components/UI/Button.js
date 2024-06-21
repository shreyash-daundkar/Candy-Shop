import "./Button.css";

function Button(props) {
    const classes = 'button ' + props.class; 
    return (
        <button
        class={classes} 
        type={props.type}
        onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;