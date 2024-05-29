import "./comment.css";
import { Comments } from "../../fake";
import { useAppStore } from "../../store";
import { formatDistanceToNow, parseISO } from "date-fns";
import { arSA } from "date-fns/locale";

export const Comment = () => {
  const { moreInf } = useAppStore();

  return (
    <div>
      {moreInf && (
        <div className="comment">
            <div className="image-cover">
          <img src={moreInf.image} />
          </div>
          {Comments.map((el, i) => (
            <div key={i} className="content-comm">
              <div className="set">
                <div className="inf-user">
                  <div className="name-date">
                  <span>
                    {formatDistanceToNow(parseISO(el.date), {
                      addSuffix: true,
                      locale: arSA,
                    })}
                  </span>
                    <p>{el.name}</p>
                  </div>
                  <div className="text-comm">
                    <span>{el.comment}</span>
                  </div>
                </div>
                <div className="image">
                  <img src={el.image} alt={el.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
