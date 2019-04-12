import React, { Component } from 'react';
import QueryWrapper from "../QueryWrapper"
import organizationQuery from "./OrganizationQuery"
import Issue from "./issue"
import { render } from 'react-dom';

type OrganizationProps = {
  repositories: {nodes: Repository[]},
  login: string,
}

type Repository = {
  issues: {nodes: IssueProps[]},
  name: string,
}

export type IssueProps = {
  created_at: Date,
  url: string,
  state: string,
  title: string,
  author: {
    login: string
  }
}

class Organization extends Component<OrganizationProps> {
  renderIssue = (issues: Array<IssueProps>) => {
    return(
      issues.map(issue =>{
        return <Issue {...issue} />
      })
    )
  }
  
  render() {
    return (
      <div className="issueList">
        {this.renderIssue(this.props.repositories.nodes[0].issues.nodes)}
      </div>
    )
  }
}

type WrappedOrganizationProps = {
  // repositories: any,
  login: string,
  states: Array<string>
}

export default class extends Component<WrappedOrganizationProps> {
  render() {
    // const {repositories} = this.props
    const {login, states} = this.props

    return (
      <QueryWrapper query={organizationQuery} variables={{login, states}}>
        {({organization}) => { return <Organization login={login} {...organization} /> }}
      </QueryWrapper>
    )
  }
}
