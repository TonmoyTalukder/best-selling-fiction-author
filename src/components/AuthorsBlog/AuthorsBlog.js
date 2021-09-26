import React, { useEffect, useState } from 'react';
import './AuthorsBlog.css';
import '../Author/Author';
import '../Budget/Budget';
import Author from '../Author/Author';
import Budget from '../Budget/Budget';

const AuthorsBlog = () => {
    const [authors, setAuthors] = useState([]);
    const [budget, setBudget] = useState([]);
    // facthing data from fake json file
    useEffect( () => {
        fetch('./authors.json')
        .then(res => res.json())
        .then(data => setAuthors(data));
        
    }, [])
    const handleAddToBudget = (author) => {
        console.log(budget);
        const newBudget = [...budget, author];
        setBudget(newBudget);
    }
    

    return (
        <div className="authors container-fluid px-0">
            <div className="authors-blog-container row g-2">
                <div className="authors-container col-9">
                    <h1>This is Author Blog. Total Authors: {authors.length}</h1>
                    <div className="container-fluid">
                        <div className="authors-container row g-3 d-flex justify-content-center">
                            {
                                authors.map(author => <Author
                                 author={author}
                                 handleAddToBudget={handleAddToBudget}
                                 key={author._id}
                                 >
                               

                                </Author>)    
                            }
                        </div>
                    </div>
                    
                </div>
                <div className="budget-container col-2">
                    <Budget budget={budget} ></Budget>
                </div>
            </div>
        </div>
    );
};

export default AuthorsBlog;