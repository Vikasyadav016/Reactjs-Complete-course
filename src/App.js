import logo from "./logo.svg";
// import "./App.css";
import Example1 from "./Components/Basic/Hooks/UseState/Example1";
import Timer from "./Components/Basic/Hooks/UseEffect/TimerWithUseEffect";
import ToggleComponent from "./Components/Basic/Hooks/UseState/ToggleOnOff";
import Factorial from "./Components/Logical/Factorial";
import FibonacciSequence from "./Components/Logical/FibonacciSequence";
import PalindromeChecker from "./Components/Logical/PalindromeChecker";
import CountVowels from "./Components/Logical/CountVowels";
import ReverseaString from "./Components/Logical/ReverseaString";

import "bootstrap/dist/css/bootstrap.min.css";
import AnagramChecker from "./Components/Logical/AnagramChecker";
import FizzBuzz from "./Components/Logical/FizzBuzz";
import SumOfDigits from "./Components/Logical/SumOfDigits";
import FindTheMissingNumber from "./Components/Logical/FindTheMissingNumber";
import RemoveDuplicates from "./Components/Logical/RemoveDuplicates";
import CheckForPrimeNumber from "./Components/Logical/CheckForPrimeNumber";
import ValidParentheses from "./Components/Logical/ValidParentheses";
import ReverseWordsInaString from "./Components/String/BeginnerLevel/ReverseWordsInaString";
import LongestCommonPrefixUsingSorting from "./Components/String/BeginnerLevel/LongestCommonPrefixUsingSorting";
import CrudOperationsUsingReduxInReact from "./Components/Redux/ReduxCompleteExample";
import ContextProviderExample from "./Components/ContextApi/ContextProvider";
import PassPtoC from "./Components/Basic/PassingDataFromParentToChildComponnet/ParentComponent";
import Component1 from "./Components/Basic/Props/Component1";
import RemoveDuplicate from "./Components/Logical/V1";
import TextEditor from "./Components/Editor/MainPageForEditor";
import TextEditor1 from "./Components/Editor/1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Example1 />
        <Timer />
        <ToggleComponent />
        <Factorial />
        <FibonacciSequence />
        <PalindromeChecker />
        <CountVowels />
        <ReverseaString />
        <AnagramChecker />
        <FizzBuzz />
        <SumOfDigits />
        <FindTheMissingNumber />
        <RemoveDuplicates />
        <CheckForPrimeNumber />
        <ValidParentheses />
        <ReverseWordsInaString />
        <LongestCommonPrefixUsingSorting />
        <CrudOperationsUsingReduxInReact />
        <ContextProviderExample />
        <PassPtoC />
        <Component1 />
        <RemoveDuplicate />
        <TextEditor /> */}
        <TextEditor1 />
      </header>
    </div>
  );
}

export default App;
