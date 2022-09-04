import Styles from "./styles";

import image from "../../assets/caleb.jpg";
import { useCallback, useEffect, useState } from "react";


const Dashboard = () => {
  const [codeRef, setCodeRef] = useState<HTMLDivElement>();
  const [codeMsg, setCodeMsg] = useState<string>("");
  const [currWordIndex, setCurrWordIndex] = useState<number>(0);

  const words: string[] = [
    "I write code ...",
    // "Hire me ...",
    // "Hire me now!",
    "Thanks for coming to my TED talk."
  ]
  const contacts = [
    {
      url: "mailto:caleb@okai.pro",
      text: "caleb@okai.pro",
    },
    {
      url: "https://www.linkedin.com/in/caleb-okai-b316021b7/",
      text: "LinkedIn",
    },
    {
      url: "https://github.com/CalebOkai",
      text: "Github",
    },
  ]


  const initCodeRef = useCallback((node) => {
    if (node) setCodeRef(node)
  }, [])

  useEffect(() => {
    if (!codeRef) return;
    setTimeout(() =>
      printltrs(words[currWordIndex]),
      1000
    )
  }, [codeRef, currWordIndex])

  const printltrs = (word: string, index = 0) => {
    if (index < word.length) {
      setCodeMsg(prev => prev + word[index]);
      index += 1;
      setTimeout(function () {
        printltrs(word, index)
      }, 50);
    } else {
      setTimeout(function () {
        delLtrs(word)
      }, 1000);
    }
  }
  const delLtrs = (word: string) => {
    word = word.slice(0, -1);
    if (word) {
      setCodeMsg(word);
      setTimeout(function () {
        delLtrs(word)
      }, 20);
    }
    else {
      word = "";
      setCodeMsg(word);
      if (currWordIndex < words.length - 1)
        setCurrWordIndex(currWordIndex + 1)
      else
        setCurrWordIndex(0);
    }
  }


  return (
    <Styles>
      <section id="Profile">
        <div className="img-wrapper">
          <img src={image} alt="" />
        </div>
        <h1>Caleb Okai</h1>
        <div className="sub-text">
          <h3>Full Stack Developer</h3>
          <div>@</div>
          <a
            href="https://redbird.co"
            target="_blank"
            rel="noreferrer noopener"
          >
            Redbird Inc
          </a>
        </div>
      </section>

      <section id="Code">
        <div className="content" ref={initCodeRef} >
          <span>{"$ "}</span>{codeMsg}
        </div>
        <div className="cursor" />
      </section>

      <section id="Contact">
        <ol>
          {contacts.map((contact, index) =>
            <a
              href={contact.url}
              key={index}
              target="_blank"
              rel="noreferrer noopener"
            >
              {contact.text}
            </a>
          )}
        </ol>
      </section>

    </Styles>
  )
}

export default Dashboard;