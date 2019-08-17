import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addSmurf} from '../actions'


class AddSmurf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: '',
            height: '',
            name: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
       this.props.addSmurf(this.state)
        this.setState({
            age: '',
            height: '',
            name: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' name='name' value={this.state.name} onChange={this.inputHandler} placeholder='name' />
                <input type='number' name='age' value={this.state.age} onChange={this.inputHandler} placeholder='age' />
                <input type="number" name='height' value={this.state.height} onChange={this.inputHandler} placeholder='height' />
                <button type='submit'>Add Smurf</button>
        </form>
        )
        
    }
    

}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {addSmurf : addSmurf})(AddSmurf)
