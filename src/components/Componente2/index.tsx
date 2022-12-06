import { useContext } from "react";
import { TestContext } from "../../providers/TestContext";
import { Component3 } from "../Componente3"

export const Component2 = () => {
    const { teste1 } = useContext(TestContext);

    console.log('Component 2');
   
    return(
        <>
            <h1>Componente 2 = {teste1}</h1>
            <Component3 />
        </>
    )
}