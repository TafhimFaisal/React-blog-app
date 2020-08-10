import React from 'react';
import './App.css';
import NavBar from './components/partials/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blogs from './components/blog/Blogs';
import CreateBlog from './components/blog/CreateBlog';
import Dashboard from './components/dashboard/Dashboard';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup'
import Blog from './components/blog/Blog';

function App() {
  return (
      <Router>
         <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/"        component = {Blogs} />
              <Route path="/dashboard"     component = {Dashboard} />
              <Route path="/create-blog"   component = {CreateBlog} />
              <Route path="/sign-in"       component = {Signin} />
              <Route path="/sign-up"       component = {Signup} />
              <Route path="/create-blog"   component = {CreateBlog} />
              <Route path="/blog/:blog_id" component = {Blog} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;
