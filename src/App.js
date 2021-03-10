import React from "react";
import ChildComponent2 from "./03/ChildComponent2";
import DefaultPropsComponent from "./03/DefaultPropsComponent";
import ChildProperty from "./03/ChildProperty";
import ForceUpdateExample from './03/ForceUpdateExample';
import LifecyleExample from './03/LifecycleExample'
import './App.css';
import NewCounter from "./03/NewCounter";
import Counter from './03/Counter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 10 };
        this.resetCount = this.resetCount.bind(this);
        // this.state = { hasDestroyed: false };
    }
    resetCount() {
        this.setState(({ count }) => ({ count: count + 10 }))
        console.log(this.state.count);
    }
    componentDidMount() {
        // this.setState({ hasDestroyed: true })
    }
    render() {
        return (
            <div>
                <div><Counter count={ this.state.count } /></div>
                <div><NewCounter count={ this.state.count } /></div>
                <button onClick={ this.resetCount }>{ this.state.count + 10 }으로 초기화</button>
            </div>
            /*<div>
                {this.state.hasDestroyed? null : <LifecyleExample />}
            </div>*/
            // <div>
            //     <ForceUpdateExample />
            // </div>
            /*<div>
                <ChildProperty>
                    <div><span>자식노드</span></div>
                </ChildProperty>
            </div>*/
            /*<div>
                <DefaultPropsComponent />
            </div>*/
            /*<ChildComponent2
                objValue={{age: 20}}
                requiredStringValue="문자"
            />*/
            /*<div className="body">
                <ChildComponent
                booleanValue={true}
                numValue={1}
                arrayValue={[1, 2, 3]}
                objValue={{name: 'aaa', age: 30}}
                nodeValue={<h1>node</h1>}
                funcValue={() => {console.log('messea')}}/>
            </div>*/
        )
    }

}

export default App;