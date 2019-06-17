import React, {PureComponent, createRef} from 'react';
import Greeting from './Greeting';
import Boards from './Boards';
import './App.css';

class App extends PureComponent {
    ref = createRef();

    state = {
        scrollTop: 0
    };

    onScroll = () => {
        this.setState({scrollTop: window.pageYOffset || document.documentElement.scrollTop})
        console.log(this.state)
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        console.log('componentDidMount', this.ref.current.offsetHeight);
        this.setState({heightGreeting: this.ref.current.offsetHeight});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    render() {
        return (
            <>
                <Greeting ref={this.ref}/>
                <Boards active={this.state.scrollTop >= this.state.heightGreeting}/>
            </>
        );
    }
}

export default App;
