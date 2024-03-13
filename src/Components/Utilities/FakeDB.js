// use local storage to manage cart data
const addToDb = id => {
    let appliedJobs = getAppliedJobs();
    // add quantity
    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    
    localStorage.setItem('getAppliedJobs', JSON.stringify(appliedJobs));
}

const removeFromDb = id => {
    const appliedJobs = getAppliedJobs();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('getAppliedJobs', JSON.stringify(appliedJobs));
    }
}

const getAppliedJobs = () => {
    let appliedJobs = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('getAppliedJobs');
    if (storedCart) {
        appliedJobs = JSON.parse(storedCart);
    }
    return appliedJobs;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('getAppliedJobs');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobs,
    deleteShoppingCart
}
