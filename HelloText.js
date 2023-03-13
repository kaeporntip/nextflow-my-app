import { View, Text } from 'react-native'
import React from 'react'

//Arrow Function



const HelloText = (props) => {

let username = '';    

if(props.username == undefined) {
    username = 'you'
}  else {
    username = props.username
}
    
  return (
  <>
      <Text>Hello world</Text>
      <Text>Welcome {props.username} to my app</Text>
  </>
  )
}

export default HelloText