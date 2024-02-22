import PropTypes from "prop-types"
export default function Card(props)
{
    

    return(
    
            <div className="col-md-4 ">
    <span>{props.Type}</span>
    <h3>{props.Amount}</h3>
    <ul>
       {props.description.map((descriptions,index)=>(
        <li key={index}>{descriptions}</li>
       ))}
    </ul>
    <button className={props.Check?"btn bg-primary text-white":"btnDisabled"} >{props.button}</button>
    </div>
   
    );
    
}
Card.propTypes={
    Type:PropTypes.string,
    Amount:PropTypes.string,
    button:PropTypes.string,
    description:PropTypes.string,
    Check:PropTypes.bool,
    };