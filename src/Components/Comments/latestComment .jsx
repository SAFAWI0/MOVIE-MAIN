import "./latestComment.css";
import { Comments } from "../../fake";

export const LatestComment = () => {
  const latestComment = Comments[Comments.length - 1];

  return (
    <div className="latestComment">
      <div className="content-com">
        <div className="inf-user">
          <div className="comm">
            <p>{latestComment.name} </p>
            <span>{latestComment.comment}</span>
          </div>
          <img src={latestComment.image} className="avatar" alt="avatar"></img>
        </div>
      </div>
    </div>
  );
};
