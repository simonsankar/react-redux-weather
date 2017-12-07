import React from 'react';

const Header = () => (
  <div>
    <div className="clearfix">
      <nav>
        <ul className="nav nav-pills pull-right">
          <li role="presentation"><a href="/">Repo</a></li>
          <li role="presentation"><a href="/">Github</a></li>
          <li role="presentation"><a href="/">Email</a></li>
        </ul>
      </nav>
      <h4 className="text-muted">React Simple Forecast</h4>
    </div>
    <hr/>
  </div>
);

export default Header;