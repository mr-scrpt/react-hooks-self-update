import React from "react";
import { Link } from "react-router-dom";
import { TagList } from "components/tags/tagsList";
import { AddToFavorite } from "components/addToFavorite";
import { dateFormater } from "helpers/dateFormater";
import s from "./feedSnippet.module.scss";

export const FeedSnippet = ({ item, dispatchToLikeToggle }) => {
  const {
    title,
    slug,
    createdAt,
    tagList,
    description,
    favorited,
    favoritesCount,
    author: { username, image },
  } = item;

  return (
    <div className={s.feed}>
      <div className={s.inner}>
        <div className={`${s.user}`}>
          <Link to={`/profile/${username}`}>
            <img
              src={`${
                image ? image : "https://dummyimage.com/100x100/abq/fre"
              }`}
              alt={`Аватар ${username}`}
              className={`img ${s.avatar}`}
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
  );
};
