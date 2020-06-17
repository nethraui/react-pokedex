import React, { Component } from 'react'

export default class NextPrev extends Component {
    render() {
        return (
            <div>
                <button type="button" class="btn btn-success m-2">Previous</button>
                <button type="button" class="float-right btn btn-success m-2">Next</button>
            </div>
        )
    }
}
