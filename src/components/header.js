import React from 'react';

const Header = () => (
  <div>
    <div className="clearfix">
      <nav>
        <ul className="nav nav-pills pull-right">
          <li role="presentation"><a target="_blank" href="https://github.com/simonsankar/react-redux-weather">Repo</a></li>
          <li role="presentation"><a target="_blank" href="/https://github.com/simonsankar/">Github</a></li>
          <li role="presentation"><a target="_blank" href="mailto:sjsankar10@gmail.com">Email</a></li>
        </ul>
      </nav>
      <h4 className="text-muted">React Simple Forecast</h4>
    </div>
    <hr/>
  </div>
);

export default Header;