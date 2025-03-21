function Title(props: { text: string, size: string }) {
    const titleSize = {
      "giant": <h1>{props.text}</h1>,
      "large": <h2>{props.text}</h2>,
      "medium": <h3>{props.text}</h3>,
      "small": <h4>{props.text}</h4>
    };
     
    return titleSize[props.size] || <h4>{props.text}</h4>;
  }
  
  export default Title;