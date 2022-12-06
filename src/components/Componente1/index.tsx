import { useContext } from "react";
import { TestContext } from "../../providers/TestContext";
import { Component2 } from "../Componente2"

export const Component1 = () => {
    const { teste1, updateTeste1 } = useContext(TestContext);
    
    console.log('Component 1');

    return(
        <>
            <h1>Componente 1</h1>
            <button type="button" onClick={updateTeste1}>Alterar</button>

            <Component2 />
        </>
    )
}