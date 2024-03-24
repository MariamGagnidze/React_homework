import { Posts } from "./Posts";

export default function Popular(props) {
  const { className, h1 }= props
    return (
      <div className={className}>
        <h1>{h1}</h1>
        <Posts
          src={"https://www.w3schools.com/w3images/workshop.jpg"}
          h1={"Lorem"}
          p={"Sed mattis nunc"}
        />
        <Posts
          src={"https://www.w3schools.com/w3images/gondol.jpg"}
          h1={"Ipsum"}
          p={"Praes tinci sed"}
        />
        <Posts
          src={"https://www.w3schools.com/w3images/skies.jpg"}
          h1={"Dorum"}
          p={"Ultricies congue"}
        />
        <Posts
          src={"https://www.w3schools.com/w3images/skies.jpg"}
          h1={"Mingsum"}
          p={"Lorem ipsum dipsum"}
        />
      </div>
    );
  }