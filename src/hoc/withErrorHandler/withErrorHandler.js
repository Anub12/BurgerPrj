import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aaux from '../Aaux/Aaux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount () {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            } );
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render(){
            return (
                <Aaux>
                    <Modal 
                        show={this.state.error}
                        clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                        It's Gonna Work Out Soon!!!
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aaux>
            );
        }
    }
}

export default withErrorHandler;