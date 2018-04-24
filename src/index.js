// /* eslint react/jsx-filename-extension: off */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import 'bootswatch/superhero/bootstrap.css';
// import Layout from './components/Layout';
// import { HCIM, MarkdownPage, Projects, Blogs, PageNotFound } from './pages';
// import Entry from './pages/Entry';
// import { pathPrefix } from './config';
// import './index.css';
//
// const App = () => (
//   <BrowserRouter>
//     <Layout>
//       <Switch>
//         <Route path={`${pathPrefix}/`} exact component={Entry} />
//         <Route path={`${pathPrefix}/vis/hcim`} component={HCIM} />
//         <Route path={`${pathPrefix}/projects/:name`} component={MarkdownPage('project')} />
//         <Route path={`${pathPrefix}/projects`} exact component={Projects} />
//         <Route path={`${pathPrefix}/blogs/:name`} component={MarkdownPage('blog')} />
//         <Route path={`${pathPrefix}/blogs`} exact component={Blogs} />
//         <Route component={PageNotFound} />
//       </Switch>
//     </Layout>
//   </BrowserRouter>
// );
//
// ReactDOM.render(<App />, document.getElementById('root'));
// if (module.hot) {
//   module.hot.accept(App, () => {
//     ReactDOM.render(<App />, document.getElementById('root'));
//   });
// }
console.log('test');
