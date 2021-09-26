import React from 'react';
// importing fonst awsome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Author.css';

// call from Authors
const Author = (props) => {
        // distructer
    const {name, picture, age, country, notable_work, estimated_sale, total_books} = props.author;
    const element = <FontAwesomeIcon icon={ faShoppingCart} />
//     Author card
    return (

            <div className="col-4 author mb-3 p-3 ">
                  <div className="card">
                     <img src={picture} className="card-img-top h-50 " alt="..."/>
                          <div className="card-body">
                               <h5 className="card-title text-danger">{name}</h5>
                               <ul className="list-group list-group-flush list">
                               <li className="list-group-item list">Age: {age}</li>
                                <li className="list-group-item list">Country: {country}</li>
                                <li className="list-group-item list">Notable Work: {notable_work}</li>
                                <li className="list-group-item list">Estimated Best Sale: ${estimated_sale}</li>
                                <li className="list-group-item list">Total Books: {total_books}</li>
                               </ul>
                               <br />
                                 <div className="card-body">
                                         {/* usinge btn */}
                                 <button href="#" className="btn btn-secondary" onClick={() => props.handleAddToBudget(props.author)}>{element} Add to Budget</button>
                                </div>
                            </div>

                    </div>


            </div>
        
    );
};
export default Author;