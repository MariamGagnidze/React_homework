import React from 'react';
import Article from './Article';
import './Left.css';

export function Left({ className }) {
  return (
    <div className={className}>
      <Article
        className="article"
        img="https://www.w3schools.com/w3images/woods.jpg"
        headingg="headingg"
        titleHeading="TITLE HEADING"
        title="Title description"
        date="April 7, 2014"
        paragraph="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
        bttn="bttn"
        buttonValue="READ MORE »"
        count="0"
      />

      <Article
        className="article"
        img="https://www.w3schools.com/w3images/bridge.jpg"
        headingg="headingg"
        titleHeading="BLOG ENTRY"
        title="Title description"
        date="April 2, 2014"
        paragraph="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
        bttn="bttn"
        buttonValue="READ MORE »"
        count="2"
      />
    </div>
  );
}
