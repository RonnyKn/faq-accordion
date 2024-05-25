import "./SingleFaq.css";
import { useState } from "react";
import MinusIcon from "../../assets/images/icon-minus.svg";
import PlusIcon from "../../assets/images/icon-plus.svg";

const SingleFaq = ({ faq }) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <>
      <div className="faq-body-questions">
        <p className="question" onClick={() => setIsExpand(!isExpand)}>
          {faq?.question}
        </p>
        <img
          onClick={() => setIsExpand(!isExpand)}
          src={isExpand === false ? PlusIcon : MinusIcon}
          alt={isExpand === false ? "icon_plus.svg" : "icon_minus.svg"}
        />
      </div>
      <div className="faq-body-answer">
        {isExpand === true && <p className="answer">{faq?.answer}</p>}
      </div>
    </>
  );
};

export default SingleFaq;
