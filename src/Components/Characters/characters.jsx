import "./characters.css"
import { Photo } from "../../fake";
export const Characters = () => {
  return (
    <div className="characters">
         <div className="chara">
              <p>الممثلين</p>
              <div className="photo">
                <ul>
                  {Photo.map((el, i) => (
                    <li key={i}>
                      <div className="image-photo">
                        <img src={el.image}></img>
                        <p>{el.name}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
    </div>
  )
}
