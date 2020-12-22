
function Clock() {
  
  /* // TODO
  和生命週期有關出生
  React.useEffect(() => {
    console.log('componentDidMount')
    死亡在這段
    return () => {
      console.log('componentWillUnmount');
    }
  }, []);
  // */
  React.useEffect(() => {
    console.log('componentDidMount')
    return () => {
      console.log('componentWilUnmount');
    }
  }, []);
  

  return (
    <div className="my-component">
      <h2>react useEffect</h2>
    </div>
  )
}
