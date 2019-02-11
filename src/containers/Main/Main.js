import React, { Component } from 'react'
import classes from './Main.module.css';

import axios from '../../axios-persons'

import PersonList from '../../components/PersonList/PersonList'

class Main extends Component {

  state = {
    personList: []
  }

  componentDidMount () {
    // TODO: Limit amount using query params
    axios.get('/persons.json')
    .then(res => {
      const personsData = []
      for (let key in res.data) {
        personsData.push({
          ...res.data[key],
          id: key
        })
      }
      this.setState({personList: personsData})
    })
    .catch(error => {
      throw error
    })
  }

  render () {

    return (
      <>
        <div className={classes.Main}>
          <PersonList personList={this.state.personList}/>
        </div>
      </>
    )



  }



}

export default Main