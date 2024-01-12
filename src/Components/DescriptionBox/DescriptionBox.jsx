import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex quaerat, sunt consequuntur fugit harum recusandae rerum laudantium laboriosam esse perferendis sequi, placeat ad animi voluptatem? Saepe quisquam excepturi,
          repellat optio vero eveniet odio reiciendis sint repudiandae officiis quam mollitia!
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem quo aliquam ad iusto modi! Iure officiis nobis quos in sunt non, excepturi corrupti atque eligendi, consequatur fugit, debitis dolore!</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
