import React, { Component } from "react"
import {NavLink} from "react-router-dom"

export default class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>

        <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
        <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
        <NavLink to="/blog" activeClassName="nav-link-active">Blogs</NavLink>

        {false ? <NavLink to="/add-blog">Add Blogs</NavLink>: ""}
      </div>
    )
  }
}