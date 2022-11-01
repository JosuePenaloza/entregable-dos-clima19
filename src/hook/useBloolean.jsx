import { useState } from "react"

const useBoolean = (valor) => {

    const [boolean,setBoolean] = useState(valor);

    return {boolean, setBoolean}
}

export default useBoolean;