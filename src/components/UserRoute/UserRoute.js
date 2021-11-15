import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const UserRoute = ({ children, ...rest }) => {
  const [myUpdate, setMyUpdate] = useState(false);
  const { user, admin } = useAuth();
  useEffect(() => {
    setTimeout(() => {
      setMyUpdate(true);
    }, 1000);
  }, []);
  return (
    <>
      {myUpdate && (
        <Route
          {...rest}
          render={({ location }) =>
            user.email && !admin ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/home",
                  state: { from: location },
                }}
              />
            )
          }
        />
      )}
    </>
  );
};

export default UserRoute;
