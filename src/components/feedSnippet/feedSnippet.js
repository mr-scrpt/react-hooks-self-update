import React from "react";
import { Link } from "react-router-dom";
import { TagList } from "components/tags/tagsList";
import { AddToFavorite } from "components/addToFavorite";
import { Button } from "components/buttons";
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
          <div className={s.userblock}>
            <Link
              className="author"
              to={`/profile/${username}`}
              className={s.author}
            >
              {username}
            </Link>

            <div className={s.date}>{dateFormater(createdAt)}</div>

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

        <div className={s.info}>
          <Link className={s.titleBox} to={`/articles/${slug}`}>
            <span className={s.title}>{title}</span>
          </Link>
          <p className={s.description}>{description}</p>
          <div className={s.bottom}>
            <ul className={s.list}>
              <TagList tagList={tagList} />
            </ul>
            <Button size="l" tag="a" to={`/articles/${slug}`}>
              Читать далее...
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
