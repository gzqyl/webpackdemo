import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import printMe from './print.js'
//import MM from './mm.js'

import(/* webpackPreload: true */ 'md5').then(({default: md5})=>{

  //MM("cc")

  const element = document.createElement('div');
  element.innerHTML = md5("qq")

  document.body.appendChild(element)

})