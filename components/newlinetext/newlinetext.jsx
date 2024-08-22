import { Fragment } from "react";

export default function NewLineText({ text }) {
  let newtext = text.split("\n");
  return newtext.map((t, index) => {
    if (index === newtext.length - 1) return t;
    return (
      <Fragment key={index}>
        {t}
        <br />
      </Fragment>
    );
  });
}
