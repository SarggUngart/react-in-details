import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {

  return (
    <div className="App">
      <PageTitle title={'this is app'}/>
      <Rating value={5}/>
      <Accordion title={'My list'} collapsed={false}/>
      <Rating value={4}/>
      <Accordion title={'My stuff'} collapsed={true}/>
    </div>
  );
}

type PageTitleType = {
  title: string
}

function PageTitle(props: PageTitleType) {
  return <h2>{props.title}</h2>
}

export default App;
