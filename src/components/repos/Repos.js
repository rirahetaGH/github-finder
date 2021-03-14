import React from 'react'
import PropTypes from 'prop-types';
import RepoItem from 'components/repos/RepoItem'

const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id}></RepoItem>)
}

Repos.protoTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos;
