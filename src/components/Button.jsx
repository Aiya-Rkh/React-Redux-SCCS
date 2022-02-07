import React from "react";
import classNames from "classnames";

function Button({ onClick, className, outline, children }) {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames("button", className, {
          "button--outline": outline,
        })}
      >
        {children}
      </button>
    </>
  );
}
{
  /* <Box>
<IconButton size="large" color="inherit">
  <Badge color="error" badgeContent={cartCount}>
    <AddShoppingCart />
  </Badge>
</IconButton>
</Box> */
}
export default Button;
