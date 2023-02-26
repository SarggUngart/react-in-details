import React from "react";

type AccordionPropsType = {
  title: string
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  return <>
    <AccordionHead title={props.title}/>
    <AccordionBody collapsed={props.collapsed}/>
  </>
}

type AccordionHeadPropsType = {
  title: string

}

function AccordionHead(props: AccordionHeadPropsType) {
  return <h3>{props.title}</h3>
}


type AccordionBodyPropsType = {
  collapsed: boolean
}


function AccordionBody(props: AccordionBodyPropsType) {
  if (props.collapsed) {
    return <ul>
    </ul>
  } else {
    return <ul>
      <li>Mike</li>
      <li>Bill</li>
      <li>Mary</li>
      <li>John</li>
    </ul>
  }

}
