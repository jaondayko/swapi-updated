import React from 'react';
import {FlatList, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { currCharacter, currCharProfile } from '../character/actions'

const charList = ({ characters, currCharacter }) => {
  <View>
    <Text>Characters</Text>
    {characters.map((s, i) => {
      <FlatList key={s.name} data={s.name}/>  
      })}
  </View>
};

const stateToProps = ({ characters }) => ({
  characters
})

export default connect(stateToProps)(charList);