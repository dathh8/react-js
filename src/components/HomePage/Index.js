import Header from "../Header/Header";
// import React,{useState, useEffect, lazy, Suspense, Loader, Provider} from 'react';
// const Header = React.lazy(() => import('../Header/Header'));
import { Outlet, Link } from "react-router-dom";
const Index = () => {

    return(
        <>
          <Header/>
          <main> <Outlet /></main>
        </>
      )
}

export default Index;