import ListItem from './Components/ListItem';
import './App.css';

function App() {
  return (
    <div>
      <ul>
        <ListItem itemCount="10">1</ListItem>
        <ListItem itemCount="20">2</ListItem>
        <ListItem itemCount="30">3</ListItem>
        <ListItem itemCount="40">4</ListItem>
        <ListItem itemCount="50">5</ListItem>
        <ListItem itemCount="60">6</ListItem>
      </ul>
      <p>This is paragraph</p>
    </div>
  );
}

export default App;
