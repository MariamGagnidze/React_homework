import { Header } from "./Header"
import { Paragraph } from "./Paragraph"
import "./Heading.css";
export default function Heading(){
    return (
        <div className="heading">
           <Header value="MY BLOG"/> 
           <Paragraph value="Welcome to the blog of " span="unknown"/>
        </div>
    )
}
Heading()