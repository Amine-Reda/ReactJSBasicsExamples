import "./App.css";
import ParentComponent from "./MethodeAsProps/ParentComponent";
import Binding from "./Binding/Binding";
import MLifeCycleA from "./MountingLifeCycle/MLifeCycleA";
import ULifeCycleA from "./UpdatingLifeCycle/ULifeCycleA";
import Fragment from "./Fragment/Fragment";
import Table from "./Fragment/Table";
import ParentComp from "./PureComponent/ParentComponent";
import RegComponent from "./PureComponent/RegComponent";
import RefsDemo from "./Ref/RefsDemo";
import FocusInput from "./RefClass/FocusInput";
import FRParenInput from "./ForwardingRefs/FRParenInput";
import PortalDemo from "./Portals/PortalDemo";
import Errors from "./ErrorBoundary/Errors";
import ClickCounter from "./HigherOrderComponents/ClickCounter";
import HoverCounter from "./HigherOrderComponents/HoverCounter";
import HoverCounterTwo from "./RenderProps/HoverCounterTwo";
import ClickCountertwo from "./RenderProps/ClickCountertwo";
import User from "./RenderProps/User";
import Counter from "./RenderProps/Counter";
import ComponentC from "./Hooks/useContext/ComponentC";
import { UserProvider } from "./Context/userContext";
import PostList from "./HttpAxios/PostList";
import PostForm from "./HttpAxios/PostForm";
import Hookcounter from "./Hooks/useState/Hookcounter";
import HookCounterTwo from "./Hooks/useState/HookCounterTwo";
import HookcounterThree from "./Hooks/useState/HookcounterThree";
import HookCounterFour from "./Hooks/useState/HookCounterFour";
import HookCounteOne from "./Hooks/useEffect/HookCounteOne";
import HookMouse from "./Hooks/useEffect/HookMouse";
import MouseContainer from "./Hooks/useEffect/MouseContainer";
import IntervalHookCounter from "./Hooks/useEffect/IntervalHookCounter";
import DataFetching from "./Hooks/FetchDataUseEffect/DataFetching";
import { ChannelContext, UserContext } from "./Hooks/useContext/createContext";
import CounterOne from "./Hooks/useReducer/CounterOne";
import CounterTwo from "./Hooks/useReducer/CounterTwo";
import CounterThree from "./Hooks/useReducer/Counterthree";
import ComponentF from "./Hooks/useContext/ComponentF";
import Demo from "./Hooks/useReducer&useContext/Demo";
import DataFetchingOne from "./Hooks/FetchDataUseReducer/DataFetchingOne";
import DataFetchingTwo from "./Hooks/FetchDataUseReducer/DataFetchingTwo";

function App() {
  return (
    <div className="App">
      {/*<Binding /> binding */}

      {/*<ParentComponent />  methode as props */}

      {/*<MLifeCycleA />  from MountingLifeCycle */}

      {/*<ULifeCycleA />  from UpdatingLifCycle  */}

      {/* <Fragment /> fragment exmple <Table />*/}

      {/*<ParentComp /> PureComponent just for class components*/}

      {/* <RefsDemo /> for normal html element */}

      {/*<FocusInput /> send ref from class to another */}

      {/*<FRParenInput />*/}

      {/*<PortalDemo />*/}

      {/*<Errors /> Error Boundary */}

      {/*<ClickCounter name="amine" />
         <HoverCounter name="amine" />  
         we can't send a props because it will sent to withCounter
          Components, we should add {...this.props} to OriginalComponents    */}

      {/*   <ClickCountertwo />
      <HoverCounterTwo />
      <User render={(isLioggedIn) => (isLioggedIn ? "amine" : "reda")} />
   
      <Counter
        render={(count, incrementCount) => (
          <ClickCountertwo count={count} incrementCount={incrementCount} />
        )}
       />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/*
      <UserProvider value="amine">
        <ComponentC  />
      </UserProvider>      step 1:Create the context
                           step 2:Provide a context value
                           step 3:Consume the context value  
      */}

      {/* <PostList />   axios.get 
          <PostForm />   axios.post
     */}

      {/*<Hookcounter />
      <HookCounterTwo />   /UseState
      <HookcounterThree />
      <HookCounterFour />
      */}

      {/*<HookCounteOne /> 
       <HookMouse />               /UseEffect
        <MouseContainer />
        <IntervalHookCounter />
      */}

      {/*<DataFetching />  FetchData with useEffect */}

      {/*
        <UserContext.Provider value={"amine"}>
          <ChannelContext.Provider value={"reda"}>  /UseContext
            <ComponentC />                          check componentsF that use context without Hooks(its hard)
          </ChannelContext.Provider>                check the compoenetE that use Hook
        </UserContext.Provider>
      */}

      {/*<CounterOne />  useReducer for state as number
       <CounterTwo /> useReducer for state as object     useReducer for managment local state
      <CounterThree /> use multiple reducer */}

      {/* <Demo />   useReducer&useContext to manage global state */}

      {/*  <DataFetchingOne /> fetch with  useState 
           <DataFetchingTwo /> fetch with useReducer   
           
           useState vs useReducer:
     type of state:   
                       Number,String,Boolean => useState is better  
                       Object Or Array => useReducer is better
                       
     Number of transaction(updating state):
                       One  or two => useState is better
                       Too many => useRducer  because you will use a lots of setState()  

     Related state transactions:
                       no relation bettwen states=>useState is better
                       yes -----------=> useReducer is better the code will be clear

      Businness logic :
                       no business logic (no business log between old value and new value ) => useState is better
                       ------------------(yes-------------------------------------------)    => useReducer is better
      Local vs Global:
                        local=>useState 
                        global=>useReducer    
                        beacaus fro global state useReducer you will pass just dipatch methode to update all states
                        but useState you will pass all parametre the you want update
           */}

           
    </div>
  );
}

export default App;
