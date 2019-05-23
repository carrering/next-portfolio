import Link from 'next/link';
import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from './_error';


export default class About extends Component {

  // state object initially set to null for stateful component
  // state = {
  //   user: null
  // };

  //server rendered getInitialProps works with both stateful or stateless components
  //static method that exists in the About class our outside of it
  //stateless components don't have access to state
  static async getInitialProps(){
  const res = await fetch('https://api.github.com/users/carrering');
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();
  //    .then(res => res.json())
  //    .then(data => {
  //       console.log(data);
  //    });


     return { user: data, statusCode };
  }


  //client rendered stateful component

  // componentDidMount(){
  //   fetch('https://api.github.com/users/reedbarger')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         user: data
  //       });
  //     })
  // }

  render(){

    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

    return(
      <Layout title="About">
        <Link href="/">
          <a>Home</a>
        </Link>
        <p>{user.name} A kickass developer</p>
        <img src="/static/pitcrew.jpg" alt="pitcrew" height="200px"/>
        <br/>
        <img src={user.avatar_url} height="200px" alt="me"/>
      </Layout>
    );
  }
}
