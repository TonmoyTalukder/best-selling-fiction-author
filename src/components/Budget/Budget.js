import React from 'react';
import Names from '../Names/Names';
import './Budget.css';

const Budget = (props) => {
    console.log(props);
    const {budget} = props;
    let totalQuantity = 0;
    let total = 0;
    let Name=0;
    for(const author of budget){
        if(!author.quantity){
            author.quantity = 1;
        }
            total = total + author.total_books;
        totalQuantity = totalQuantity + author.quantity;

        
    }
    
   
    
   


    return (
        <div className="budget">
            <div className="title">
            <h3>Selected Authors Summary</h3>
            </div>
            <div className="text">
            <h5>Authors added: <span className="text-danger">{totalQuantity}</span></h5>
            <br />
            <p>Total Books: <span className="text-danger">{total.toFixed(1)}</span></p>
            <p> Selected Aurthor Name :
            {
        budget.map(author =><Names 
        name={author.name}>
    
        </Names>)
    }

            </p>
            </div>
           
           
        </div>
    );
};


export default Budget;