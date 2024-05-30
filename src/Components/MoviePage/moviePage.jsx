import "./moviePage.css";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { message } from "antd";
import { FaUsers } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import { Card } from "../Card/card";
import { Footer } from "../Footer/footer";
import { IoMdArrowBack } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { useAppStore } from "../../store";
import { Characters } from "../Characters/characters";
import { LatestComment } from "../Comments/latestComment ";

export const MoviePage = () => {
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { setIsOpenModal, setMoreInf } = useAppStore();
  const navigate = useNavigate();
 
  
  const getData = () => {
    var requestOptions = {
      method: "GET",
    };
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b6434bbf5557a52512008a50a1331ff7`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setValue(result);
        setMoreInf({
          budget: result.budget,
          runtime: result.runtime,
          origin_country: result.production_countries
            .map((country) => country.name)
            .join(", "),
          popularity: result.popularity,
          revenue: result.revenue,
          image: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
        });
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, [id]);

  const handleonclick = () => {
    messageApi.open({
      content: "الرجاء تسجيل الدخول",
    });
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handelIsBack = () => {
    navigate(-2);
  };
  const handelIsSave = () => {
    messageApi.open({
      content: "   تمت الحذف",
    });
    setIsSaved(!isSaved);
  };
  const handelNotSave = () => {
    messageApi.open({
      content: " تمت الاضافة بنجاح",
    });
    setIsSaved(!isSaved);
  };

  const handleIsOpen = () => {};

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

 

  return (
    <div className="categoriesPage">
     <h1>safaa</h1>
    </div>
  );
};
