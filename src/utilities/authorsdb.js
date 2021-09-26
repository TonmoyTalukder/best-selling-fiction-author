const addToDb = id => {
    const exists = getDb();
    let author_budget = {};
    if (!exists) {
      author_budget[id] = 1;
    }
    else {
      author_budget = JSON.parse(exists);
      if (author_budget[id]) {
        const newCount = author_budget[id] + 1;
        author_budget[id] = newCount;
      }
      else {
        author_budget[id] = 1;
      }
    }
    updateDb(author_budget);
  }
  
  const getDb = () => localStorage.getItem('author_budget');
  const updateDb = budget => {
    localStorage.setItem('author_budget', JSON.stringify(budget));
  }
  
  const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const author_budget = JSON.parse(exists);
      delete author_budget[id];
      updateDb(author_budget);
    }
  }
  
  const getStoredBudget = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheBudget = () => {
    localStorage.removeItem('author_budget');
  }
  
  export { addToDb, removeFromDb as deleteFromDb, clearTheBudget, getStoredBudget }