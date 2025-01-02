function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

Pre.defaultProps = {
  load: true,
};

Pre.propTypes = {
  load: Boolean,
};

export default Pre;
