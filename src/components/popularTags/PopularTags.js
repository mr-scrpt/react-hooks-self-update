import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { fetchTagsPopularRequest } from 'modules/tagsPopular';
import { PopularTagsLayout } from './PopularTagsLayout';

const Copmponent = ({ tagsList, loading, error, fetchTagsPopularRequest }) => {

  useEffect(() => {
    fetchTagsPopularRequest();
  }, [fetchTagsPopularRequest]);


  return <PopularTagsLayout tags={tagsList} isLoading={loading} error={error} />
}

const mapStateToProps = ({ tagsPopularStore }) => tagsPopularStore;
const mapDispatchToProps = {
  fetchTagsPopularRequest
}

export const PopularTags = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Copmponent);