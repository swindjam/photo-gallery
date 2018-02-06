import React from 'react';
import PageNotFound from './PageNotFound';


export function routes() {
  return [
    {
      link: '/',
      name: 'Home'
    },
    {
      link: 'browse',
      name: 'Browse'
    },
    {
      link: 'gallery',
      name: 'Gallery'
    }
  ];
}
