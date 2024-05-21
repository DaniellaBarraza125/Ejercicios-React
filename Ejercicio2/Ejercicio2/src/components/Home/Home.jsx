
const Home = (props) => {

    console.log(props);
  return (
    <div>
        
            <p>Plato:{props.plato}</p>
            <p>{props.precio}</p>
        <p>Descripción: {props.descripcion}</p>
    </div>
    
  )
}

export default Home