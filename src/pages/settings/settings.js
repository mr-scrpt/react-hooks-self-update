import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from 'contexts/currentUserContext';
import { SettingsForm } from 'components/settingsForm';
import { useFetch } from 'hooks';
import { Redirect } from 'react-router-dom';
import { ShowErrors } from 'components/showErrors';
import { ShowLoading } from 'components/showLoading';
export const Settings = () => {
  const [currentUserState, dispatchUser] = useContext(CurrentUserContext);
  const apiURL = `user`
  const [{ response, isLoading, error }, doFetch] = useFetch(apiURL);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
  //const [isAuthorized, setIsAuthorized] = useState(null);

  const [isLogout, setIsLogout] = useState(false);
  useEffect(() => {
    if (!isSubmit) return
    doFetch({
      method: "PUT",
      data: {
        user: currentUserState.currentUser
      }
    })
  }, [currentUserState.currentUser, doFetch]);

  useEffect(() => {
    if (!response) return;
    setIsSuccessfulSubmit(true)
  }, [response]);



  if (isSuccessfulSubmit) {
    return <Redirect to={'/'} />
  }

  if (isLogout) {
    return <Redirect to={`/`} />
  }


  return (
    <div className='settings-page'>
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <ShowLoading loading={isLoading} />
            <ShowErrors errors={error} />
            {
              !isLoading
              && !error
              && <SettingsForm
                user={currentUserState}
                dispatchUser={dispatchUser}
                setIsSubmit={setIsSubmit}
                setIsLogout={setIsLogout}
              />}
          </div>
        </div>
      </div>
    </div>
  )
}