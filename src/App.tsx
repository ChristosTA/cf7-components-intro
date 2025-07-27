// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

import Layout from "./components/Layout.tsx";
// import Counter from "./components/Counter.tsx";
import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
import CounterWithReducer from "./components/CounterWithReducer.tsx";
import Todo from "./components/Todo/Todo.tsx";

// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {


  return (
    <>
        <Layout>
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title="is a Arrow Functional Component with propbs" description="This is a description"/>*/}
            {/*<ArrowFunctionalComponentWithPropsType title="is a Arrow Functional Component with propbs" description="This is a description"/>*/}
            {/*<CodingFactoryLogo />*/}
            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter/>*/}
            <NameChanger/>
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterAdvancedWithCustomHook/>*/}
            <CounterWithReducer />
            <Todo/>



        </Layout>
    </>
  )
}

export default App
