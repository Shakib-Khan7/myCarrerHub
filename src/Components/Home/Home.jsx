import React, { createContext, useContext } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
export const Categories = createContext()


const Home = () => {
    const jobCategories = useLoaderData()
    return (
        <Categories.Provider value={jobCategories}>
            <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
        </Categories.Provider>
    );
};

export default Home;