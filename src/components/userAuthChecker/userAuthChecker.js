import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAuthUserRequest, setAuthUserInitial } from "modules/userAuth";
import { localStorageUse } from "helpers/localStorageUse";
console.log("autochecker user");

const Component = ({ fetchAuthUserRequest, setAuthUserInitial }) => {
  const [token] = localStorageUse("token");
  useEffect(() => {
    setAuthUserInitial();
    if (!token) return;

    fetchAuthUserRequest();
  }, [fetchAuthUserRequest, token]);
  return null;
};

const mapDispatchToProps = {
  fetchAuthUserRequest,
  setAuthUserInitial
};
export const UserAuthChecker = connect(null, mapDispatchToProps)(Component);
