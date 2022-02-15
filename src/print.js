import _ from 'lodash'

export default function printMe() {

  console.log(_.join(['hehe','Wechat'],' '))
  console.log('I get called from print.js!');
  //cosnole.log('I get called from print.js!')
}