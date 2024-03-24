import Popular from "./Popular";
import { Tags } from "./Tags";
import { Single_post } from "./Single_article";
import "./Right.css"


  export function Right({ className }) {
    return (
      <div className={className}>
        <Single_post
          className={"popular"}
          src={"https://www.w3schools.com/w3images/avatar_g.jpg"}
          h1={"My Name"}
          p={
            "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
          }
        />
  
        <Popular className={"popularposts"} h1={"Popular Posts"} />
        <Tags className={"tags"} h1={"Tags"} />
      </div>
    );
  }
  