import React, { Component } from 'react';
import { IssueProps } from './index'


class Issue extends Component<IssueProps> {
    render() {
      return (  
        <div>
            <span>Author: {this.props.author.login}</span> <br />
            <span>title: {this.props.title}</span> <br />
            {/* <span>created_at: {this.props.created_at}</span> <br /> */}
            <span>url: {this.props.url}</span> <br />
            <span>state: {this.props.state}</span> <br />
            <br />
        </div>
        )
    }
}

export default Issue;