import React, { useState } from "react";
import SHOP_DATA from "../../shop.data";
import "./Shop.scss";
import CollectionPreview from "../../components/Collection-Preview/CollectionPreview";

function Shop() {
  const [shopData] = useState(SHOP_DATA);

  return (
    <div className="shop">
      {shopData.map(({ id, ...otherCollections }) => {
        return <CollectionPreview key={id} {...otherCollections} />;
      })}
    </div>
  );
}

export default Shop;
