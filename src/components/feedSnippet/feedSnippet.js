import React from "react";
import { Link } from "react-router-dom";
import { TagList } from "components/tags/tagsList";
import { AddToFavorite } from "components/addToFavorite";
import { dateFormater } from "helpers/dateFormater";
import s from "./feedSnippet.module.css";

export const FeedSnippet = ({ item, dispatchToLikeToggle }) => {
  const {
    title,
    slug,
    createdAt,
    tagList,
    description,
    favorited,
    favoritesCount,
    author: { username, image }
  } = item;

  return (
    <div className="card">
      <div className={s.inner}>
        <div className="row">
          <div className={`col s3`}>
            <div className={`${s.user}`}>
              <Link to={`/profile/${username}`}>
                <img
                  src={`${
                    image ? image : "https://dummyimage.com/100x100/abq/fre"
                  }`}
                  alt={`Аватар ${username}`}
                  className={`responsive-img`}
                />
              </Link>
              <div className={s.username}>
                <Link
                  className="author"
                  to={`/profile/${username}`}
                  className={s.author}
                >
                  {username}
                </Link>
                <div className={s.date}>{dateFormater(createdAt)}</div>
              </div>
              <div className={s.likeButton}>
                <AddToFavorite
                  favorited={favorited}
                  favoritesCount={favoritesCount}
                  slug={slug}
                  dispatchToLikeToggle={dispatchToLikeToggle}
                />
              </div>
            </div>
          </div>
          <div className={`col s9 ${s.infoBlock}`}>
            <div className={s.info}>
              <Link className={s.title} to={`/articles/${slug}`}>
                <span className="">{title}</span>
              </Link>
              <p className={s.description}>{description}</p>
              <Link className="" to={`/articles/${slug}`}>
                Читать далее...
              </Link>
              <ul className={s.list}>
                <TagList tagList={tagList} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
