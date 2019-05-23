# Next Portfolio

Creating a next js server side rendered react Portfolio project.

## package.json tips

in package.json you can speficy the port to start your next server side rendered react.

```
"scripts": {
    "dev": "next -p 3000"
  },

```

## npm packages

install the following for a next.js site

```
npm i react react-dom next

```


displays a loading progress bar between page loads.

```
npm i nprogress

```

go to cdnjs.com
search for the nprogress library

https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css

see Layout for implementing in Next.js



## Layout

To create the progress bar you need to add the cdn into the head of the page.

in Layout.js
```
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();
```

Then within the main <div>

```
<Head>
  <title>Title Name</title>
  <link 
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
  />
</Head>
```


## _document.js
Next Custom Page

direct access to html docuemnt like head and body for global use like SEO and CDN links



## Stateless Component Example

about.js
```
import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
  <Layout title="About">
    <Link href="/">
      <a>Home</a>
    </Link>
    <p>A kickass developer</p>
    <img src="/static/pitcrew.jpg" alt="pitcrew" height="200px"/>
  </Layout>
);

export default About;

```

## Client Rendered Stateful Compnonent
about.js
```
//client rendered stateful component

componentDidMount(){
  fetch('https://api.github.com/users/reedbarger')
    .then(res => res.json())
    .then(data => {
      this.setState({
        user: data
      });
    })
}

  ```