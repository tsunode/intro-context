import { createContext, ReactNode, useState } from 'react';

interface ITestProviderProps {
    children: ReactNode
}

interface ITestContext {
    teste1: string;
    teste2: string;
    updateTeste1(): void
}

export const TestContext = createContext<ITestContext>({} as ITestContext);

export const TestProvider = ({ children }: ITestProviderProps) => {
    const [teste1, setTeste1] = useState('Teste 1');
    const [teste2, setTeste2] = useState('Teste 2');

    function updateTeste1() {
        setTeste1('Abacaxi');
    }

    return(
        <TestContext.Provider value={{ teste1, teste2, updateTeste1 }}>
            {children}
        </TestContext.Provider>
    )
};

// Abacaxi -> Abacaxi
// const teste = { teste1, teste2, updateTeste1 }
// setState({...teste})