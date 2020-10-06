import React from "react";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

function Product(props){

    function handelevote(){
        props.onVote(props.id);
    }

   

    return(
     <div className="item">
         <div className="image">
             <img src={props.imagurl}></img>
         </div>
         <div className="middle aligned content">
         <div className="header">
             <a onClick={handelevote}><ArrowDropUpIcon fontSize="large"/></a>
             <p className="vote">{props.votes}</p>
         </div>
         <div className="description">
             <a href={props.url}>{props.title}</a>
             <p>{props.description}</p>
         </div>
         <div className="extra">
            <span>Submitted by:</span>
            <span className="img"> <img  src={props.submiturl}/></span>
         </div>
         </div>
     </div>
    )
}

export default Product;