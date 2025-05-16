import React, { createContext, useState } from 'react';
export const questoesContext = createContext({});
//childrens são as telas que a função recebe para realizar a consulta ou mudança dos valores
function QuestoesProvider({ children }) {

    const [questao1, setQuestao1] = useState(false)

    const [questao2, setQuestao2] = useState(false)

    const [questao3, setQuestao3] = useState(false)

    const [questao4, setQuestao4] = useState(false)

    const [questao5, setQuestao5] = useState(false)

    const [questao6, setQuestao6] = useState(false)

    const [questao7, setQuestao7] = useState(false)

    const [questao8, setQuestao8] = useState(false)

    const [questao9, setQuestao9] = useState(false)

    const [questao10, setQuestao10] = useState(false)



    return (
        <questoesContext.Provider value={{ questao1, setQuestao1 }}>
            {children}
        </questoesContext.Provider>
    )
}
export default QuestoesProvider;