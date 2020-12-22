

function CategoryItem(props){
  /* // TODO1
  return (
    <div className="category-item">
      <img src={props.image} />
      <p>{props.name}</p>
    </div>
  )
  // */
}

function List(){
  const [list, setList] = React.useState([]);

  /* // TODO2
  去拿資料再轉json檔
  React.useEffect(() => {
    fetch('./categories.json')
      .then((res) => res.json())
      .then((categories) => {
        console.log(categories);
        打完後更新list值
        setList(categories);
      })
  }, []);

  return (
    <div>
      <div className="category-wrap">
      {
        list.map((category)=> {
          return (
            <CategoryItem 
            產生的虛擬DOM就會有key
              key={category.id}
              name={category.name}
              image={category.image} />
          )
        })
      }
      </div>
    </div>
  )
  // */
  React.useEffect(() => {
    fetch('./categories.json')
      .then((res) => res.json())
      .then((categories) => {
        console.log(categories); 
        setList(categories); 
      })
  }, []);

  return (
    <div>
      <div className="category-wrap">
        {
          list.map((category) => {
            return (
              <CategoryItem
              key={category.id}
              name={category.name}
              image={category.image}/>
            )
          })
        }
      </div>
    </div>
  )
}

ReactDOM.render(
  <List />,
  document.getElementById('app')
);