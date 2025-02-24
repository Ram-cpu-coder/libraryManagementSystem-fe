
import { useState } from "react";

const useForm = (initialState) => {

    const [form, setForm] = useState(initialState)
    const handleOnChange = e => {
        const { name, value } = e.target;
    }
    return {
        form,
        setForm,
        handleOnChange
    }
}

export default useForm