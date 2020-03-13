import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAuthUserRequest } from "modules/userAuth";
import { localStorageUse } from "helpers/localStorageUse";
const Component = ({ fetchAuthUserRequest }) => {
  const [token] = localStorageUse("token");
  useEffect(() => {
    if (!token) return;

    fetchAuthUserRequest();
  }, [fetchAuthUserRequest, token]);
  return null;
};

const mapDispatchToProps = {
  fetchAuthUserRequest
};
export const UserAuthChecker = connect(null, mapDispatchToProps)(Component);
