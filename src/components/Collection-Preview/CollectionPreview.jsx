import React from "react";
import CollectionItem from "../Collection-Item/CollectionItem";
import "./CollectionPreview.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map(({ id, ...otherCollectionItem }) => {
            return <CollectionItem id={id} {...otherCollectionItem} />;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
