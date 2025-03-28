
import { useState } from "react";

const useForm = (initialState) => {

    const [form, setForm] = useState(initialState)
    const handleOnChange = e => {
        let { name, value, files, checked } = e.target;

        // toggle button for the status of the book
        if (name === "status") {
            value = checked ? "active" : "inactive"
        }

        if (name === "bookFile") {
            setForm({
                ...form,
                [name]: files[0]
            })
        } else {
            setForm(
                {
                    ...form,
                    [name]: value
                })
        }
    }
    return {
        form,
        setForm,
        handleOnChange
    }
}

export default useForm