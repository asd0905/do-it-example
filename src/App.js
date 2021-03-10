import React from "react";
import ChildComponent2 from "./03/ChildComponent2";
import DefaultPropsComponent from "./03/DefaultPropsComponent";
import ChildProperty from "./03/ChildProperty";
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <ChildProperty>
                    <div><span>자식노드</span></div>
                </ChildProperty>
            </div>
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