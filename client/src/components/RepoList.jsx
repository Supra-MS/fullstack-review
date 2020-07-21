import React from 'react';

const RepoList = ({ repos }) => {
  let style = {
    border: "1px solid black",
    width: "25px",
    margin: "3px",
    padding: "12px"
  }

 return (
    <div>
      <h4> Repo List Component </h4>
      <h5 style={{color: "green"}}>There are {repos.length} repos.</h5>
      <table>
        <thead>
          <tr>
            {repos[0] ?
              Object.keys(repos[0]).map((eachKey, index) => {
                return (
                  (eachKey !== '_id' && eachKey !== '__v') ? <th style={style} key={index}>{eachKey}</th> :  null
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
                  <td style={style}>{repo.owner}</td>
                  <td style={style}>{repo.html_url}</td>
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