import logo from './logo.svg';
import './App.css';
//similar in look similar in data
//Friend Person are components making by us
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New component. yay</h5>
      <p>rock mama react mama</p>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}
//function is nothing but component or html
//div dile class add kora jabe
 function Person(){
   return (
     <div className="person">
       <h1>Sakib Al Hasan</h1>
       <p>Profession:Cricket</p>
     </div>
   )
 }

// function Person(){
//   return (
//     <>
//       <h1>Sakib Al Hasan</h1>
//       <p>Profession:Cricket</p>
//     </>
//   )
// }

function Friend(){
  return (
    <div className="container">
      <h3>Name:Ajay Devgan</h3>
      <p>job: maramari</p>
    </div>
  )
}
export default App;
