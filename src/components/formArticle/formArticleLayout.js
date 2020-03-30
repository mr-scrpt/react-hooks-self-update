import React from "react";

import { FormErrorServer } from "components/formErrorServer";
import { ShowErrors } from "components/showErrors";
import { ShowLoading } from "components/showLoading";
import { FormArticle } from "components/formArticle";
export const FormArticleLayout = ({
  onSubmit,
  errorsServer,
  error,
  loading,
  initialValues = {}
}) => {
  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <FormErrorServer errors={errorsServer} />
            <ShowErrors errors={error} />
            <ShowLoading loading={loading} />
            <FormArticle onSubmit={onSubmit} initialValues={initialValues} />
          </div>
        </div>
      </div>
    </div>
  );
};
