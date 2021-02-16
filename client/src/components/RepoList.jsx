import React from 'react';

const RepoList = ({ repos, isError, isSuccess, successMsg }) => {
  let style = {
    border: "1px solid black",
    width: "25px",
    margin: "3px",
    padding: "12px"
  }

 return (
    <div>
      <h4> Repo List Component </h4>
      {isError ? <h5 style={{color: "red"}}> User Not Found </h5> : null}
      {isSuccess ? <h5 style={{color: "green"}}> {successMsg} </h5> : null}
      <h5 style={{color: "green"}}>There are {repos.length} repos.</h5>
      <table>
        <thead>
          <tr>
            {repos[0] ?
              Object.keys(repos[0]).map((eachKey, index) => {
                return (
                  (eachKey !== '_id' && eachKey !== '__v' && eachKey !== 'updatedAt' && eachKey !== 'createdAt') ? <th style={style} key={index}>{eachKey}</th> :  null
                  )
              })

            : null}
          </tr>
        </thead>
        <tbody>
          {(repos.length > 0) ?
            repos.map((repo, index) => {
              return (
                <tr key={`${index + 399}`}>
                  <td style={style}>{repo.id}</td>
                  <td style={style}>{repo.repoName}</td>
                  <td style={style}><a href={repo.html_url} target="_blank">{repo.owner}</a></td>
                  <td style={style}><a href={repo.html_url} target="_blank">{repo.html_url}</a></td>
                </tr>
              )
            })
          : null}
        </tbody>
      </table>
    </div>
  )
}

export default RepoList;