// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

// import Layout from "./components/Layout.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
// import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplePage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import UnControlledInput from "./components/UnControlledInput.tsx";
// import MultiFieldForm from "./components/MultiFieldForm.tsx";
// import MultiFieldFormWithValidation from "./components/MultiFieldFormWithValidation.tsx";
import MultiFieldFormWithZodValidation from "./components/MultiFieldFormWithZodValidation.tsx";
import MultiFieldFormWithReactHook from "@/components/MultiFieldFormWithReactHook.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import {useEffect} from "react";

// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {

// useEffect(() => {
//         const id: number = setInterval(()=> console.log("Tick"), 1000);
//         return () => clearInterval(id)
// }, []);


    // const url: string ="/api/v1/products";
    // fetch(url, {
    //     method: "POST",
    //     headers: {"content-type": "application/json" },
    //     body: JSON.stringify(payload)
    // })
    //     .then(res => {
    //         if (!res.ok) throw new Error(res.statusText);
    //         return res.json();
    //     }
    //     )
    //     .then(data => {})
    //     .catch(err => {})
    //
    //
    //
    // async  function fetchData(url, method = "GET", payload= null) {
    //     try {
    //         const options = {
    //             method,
    //             headers: { "Content-Type": "application/json" },
    //         };
    //         if(payload) option.body = JSON.stringify(payload);
    //         const res= await fetch(url, options);
    //         if(!res.ok) throw new Error(res.statusText);
    //
    //         return await res.json();
    //
    //
    //     }catch(err) {
    //         console.error(err);
    //     }
    //
    //
    // }

  return (
    <>
        {/*<Layout>*/}
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title="is a Arrow Functional Component with propbs" description="This is a description"/>*/}
            {/*<ArrowFunctionalComponentWithPropsType title="is a Arrow Functional Component with propbs" description="This is a description"/>*/}
            {/*<CodingFactoryLogo />*/}
            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterAdvancedWithCustomHook/>*/}
            {/*<CounterWithReducer />*/}
            {/*<Todo/>*/}

            {/*<OnlineStatus/>*/}

        {/*</Layout>*/}
        <BrowserRouter>
            {/*<Layout>*/}
                <Routes>
                    <Route element={<RouterLayout/>}>
                        {/*<Route index element={<HomePage />}/>*/}
                        {/*<Route index element={<FocusInput/>}/>*/}
                        <Route index element={<MultiFieldFormWithReactHook/>}/>
                        <Route path="users/:userId" element={<UserPage />}/>
                        <Route path="users" element={<UserPage />} />
                    </Route>
                    {/*<Route path="/" element={<HomePage/>}/>*/}
                    {/*<Route path="examples?">*/}
                    <Route path="examples" element={<RouterExamplesLayout/>}>
                        <Route index element={<ExamplePage/>}/>
                        <Route path="name-changer" element={<NameChangerPage/>}/>
                        <Route path="online-status" element={<OnlineStatusPage/>}/>
                        <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
                    </Route>


                    {/*<Route path="examples?/name-changer" element={<NameChangerPage/>}/>*/}
                    {/*<Route path="users/:usersId" element={<UserPage />}/>*/}
                    <Route path="users/:userId" element={<UserPage />}/>
                    <Route path="users" element={<UserPage />} />
                    {/*<Route path="files/*" element={<FilePage/> }/>*/}
                    <Route path="*" element={<NotFoundPage/>}/>

                </Routes>
            {/*</Layout>*/}
        </BrowserRouter>
    </>
  )
}

export default App
