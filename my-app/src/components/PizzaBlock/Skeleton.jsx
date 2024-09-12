import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="105" cy="133" r="88" />
    <circle cx="129" cy="150" r="13" />
    <rect x="9" y="247" rx="0" ry="0" width="201" height="26" />
    <rect x="7" y="298" rx="0" ry="0" width="201" height="68" />
    <rect x="8" y="385" rx="10" ry="10" width="72" height="26" />
    <rect x="98" y="385" rx="10" ry="10" width="107" height="26" />
  </ContentLoader>
);

export default Skeleton;
