import React, { Component } from 'react'

import PersonBox from './PersonBox/PersonBox'

import axios from '../../axios-persons'

import classes from './PersonList.module.css'

class PersonList extends Component {

  render() {

    console.log(this.props.personList)

    const persons = this.props.personList.map(person =>
      <PersonBox
        key={person.id}
        imageUrl={person.imageUrl}
        personId={person.id}
      />
    )

    return (
      <div className={classes.PersonList}>
       {persons}
      </div>
    )

  }
}

export default PersonList