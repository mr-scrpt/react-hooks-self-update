import React from "react";
import { Link } from "react-router-dom";
import { TagsSnippetContainer } from "components/tags";
import { AddToFavorite } from "components/addToFavorite";
import { Button } from "components/buttons";
import { dateFormater } from "helpers/dateFormater";

/* import s from "./feedSnippet.module.scss"; */
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
    author: { username, image },
  } = item;

  return (
    <div className={`${s.feed} ${s.feed_bottom}`}>
      <div className={s.feed__inner}>
        <div className={`${s.feed__user}`}>
          <div className={s.testbg}>1</div>
          <Link to={`/profile/${username}`}>
            <img
              src={`${
                image ? image : "https://dummyimage.com/100x100/abq/fre"
              }`}
              alt={`Аватар ${username}`}
              className={`img ${s.feed__avatar}`}
            />
          </Link>
          <div className={s.feed__userblock}>
            <Link
              className="author"
              to={`/profile/${username}`}
              className={s.feed__author}
            >
              {username}
            </Link>

            <div className={s.feed__date}>{dateFormater(createdAt)}</div>

            <div className={s.feed__likeButton}>
              <AddToFavorite
                favorited={favorited}
                favoritesCount={favoritesCount}
                slug={slug}
                dispatchToLikeToggle={dispatchToLikeToggle}
              />
            </div>
          </div>
        </div>

        <div className={s.feed__info}>
          <Link className={s.feed__titleBox} to={`/articles/${slug}`}>
            <span className={s.feed__title}>{title}</span>
          </Link>
          <p className={s.feed__description}>{description}</p>
          <div className={s.feed__bottom}>
            <TagsSnippetContainer tagsList={tagList} mix={s.feed__tagList} />
            <div className={s.feed__about}>
              <Button size="l" tag="a" to={`/articles/${slug}`}>
                Читать далее...
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
