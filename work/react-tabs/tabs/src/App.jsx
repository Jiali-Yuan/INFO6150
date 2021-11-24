import { useState } from 'react';
import Tabs from './Tabs';
import './App.css';

const concepts = {
  'HTML': `
  HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. 
  Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior 
  (JavaScript).`,
  'CSS': `
  Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language 
  such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`,
  'JavaScript':`
  JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, 
  often just-in-time compiled and multi-paradigm. It has dynamic typing, prototype-based object-orientation and first-class functions.`,
  'React':`
  React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained 
  by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile 
  applications.`,
  'Web Development' : `
  Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing 
  a simple single static page of plain text to complex web applications, electronic businesses, and social network services.`
};

function App() {
  const [content] = useState(concepts);

  return (
    <div className="app">
      <Tabs entries={content}/>
    </div>
  );
}

export default App;
