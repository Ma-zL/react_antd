import React from "react";
import { view as NotFound } from "modules/errorPages";

export const NotFounds = () => {
  return (
    <NotFound
      title="404"
      remind="Sorry, the page you visited does not exist"
      //   path="/login"
      type={404}
    />
  );
};

export default NotFounds;
