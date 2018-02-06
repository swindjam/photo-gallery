import React from 'react';


export default ({routes, changeRoute}) => {

  var routeElements = routes().map(route => {
    return <a key={route.name} data-link={route.link} onClick={changeRoute}>{route.name}</a>;
  });

    return(
      <div>
        <ul>
          {routeElements}
          <li>
            <input type="search" placeholder="Search for a gallery" />
          </li>
        </ul>
      </div>
    );

};
