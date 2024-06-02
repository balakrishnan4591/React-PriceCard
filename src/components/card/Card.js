import React from "react";
import FaCheck from "../faCheck/FaCheck";
import FaXmark from "../faXmark/FaXmark";

function Card(props) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          {/* Title Start */}
          <h6 className="card-title" style={{ opacity: 0.6 }}>
            {props.off.offer.title}{" "}
          </h6>
          {/* Title End */}

          {/* Price Start */}
          <h1>${props.off.offer.amount}/month</h1>
          {/* Price End */}

          <hr></hr>

          {/* List Start */}
          <ul>
            <li style={{ opacity: props.off.offer.opacity[0] }}>
              <FaCheck isActive={props.off.offer.iconCheck[0]} />
              <FaXmark isActive={props.off.offer.iconXmark[0]} />
              <span> </span>
              {props.off.offer.userCount}
            </li>
            <li style={{ opacity: props.off.offer.opacity[1] }}>
              <FaCheck isActive={props.off.offer.iconCheck[1]} />
              <FaXmark isActive={props.off.offer.iconXmark[1]} />
              <span> </span>
              50GB Storage
            </li>
            <li style={{ opacity: props.off.offer.opacity[2] }}>
              <FaCheck isActive={props.off.offer.iconCheck[2]} />
              <FaXmark isActive={props.off.offer.iconXmark[2]} />
              <span> </span>
              Unlimited Public Projects
            </li>
            <li style={{ opacity: props.off.offer.opacity[3] }}>
              <FaCheck isActive={props.off.offer.iconCheck[3]} />
              <FaXmark isActive={props.off.offer.iconXmark[3]} />
              <span> </span>
              Community Access
            </li>
            <li style={{ opacity: props.off.offer.opacity[4] }}>
              <FaCheck isActive={props.off.offer.iconCheck[4]} />
              <FaXmark isActive={props.off.offer.iconXmark[4]} />
              <span> </span>
              Unlimited Private Projects
            </li>
            <li style={{ opacity: props.off.offer.opacity[5] }}>
              <FaCheck isActive={props.off.offer.iconCheck[5]} />
              <FaXmark isActive={props.off.offer.iconXmark[5]} />
              <span> </span>
              Dedicated Phone Support
            </li>
            <li style={{ opacity: props.off.offer.opacity[6] }}>
              <FaCheck isActive={props.off.offer.iconCheck[6]} />
              <FaXmark isActive={props.off.offer.iconXmark[6]} />
              <span> </span>
              Free Subdomain
            </li>
            <li style={{ opacity: props.off.offer.opacity[7] }}>
              <FaCheck isActive={props.off.offer.iconCheck[7]} />
              <FaXmark isActive={props.off.offer.iconXmark[7]} />
              <span> </span>
              Monthly Status Reports
            </li>
            <div class="d-grid gap-2 d-md-block">
              <button class="btn btn-primary" type="button">
                Button
              </button>
            </div>
          </ul>
          {/* List End */}
        </div>
      </div>
    </div>
  );
}
export default Card;
