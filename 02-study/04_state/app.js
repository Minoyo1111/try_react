/**
  放兩個 Counter Component
  一個 count 為 0
  另一個 count 為 1
 */

function Counter(props){
  /* // TODO
  var [count, setCount] = React.useState(0);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
    </div>
  );
  // */
  var [count, setCount] = React.useState(props.count);
  const atClick = () => {
    setCount(count + 1);
  }
  return(
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <button onClick={atClick}>+1</button>
    </div>
  );
};

ReactDOM.render(
  <div>
    <Counter count={0}/>
    <Counter count={1}/>
  </div>
  ,
  document.getElementById('app')
);