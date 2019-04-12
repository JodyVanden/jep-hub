import gql from "graphql-tag"

export default gql`
query RepoIssues ($states: [IssueState!]){
  organization(login: "rubysherpas") {
    repositories(first: 100) {
      nodes {
        name
        issues(first: 100, states: $states) {
          nodes {
            state
            url
            title
            createdAt
            author{
              login
            }
          }
        }
      }
    }
  }
}
`