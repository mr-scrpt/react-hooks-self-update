import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAuthUserRequest } from "modules/userAuth";

const Component = ({ fetchAuthUserRequest }) => {
  useEffect(() => {
    fetchAuthUserRequest();
  }, [fetchAuthUserRequest]);
  return null;
};

const mapDispatchToProps = {
  fetchAuthUserRequest
};
export const UserAuthChecker = connect(null, mapDispatchToProps)(Component);
