import {useEffect, useState} from "react";

type formValues = {
    name: string,
    email: string,
    message: string,
}

type FormErrors = {
    name?: string,
    email?: string,
    message?: string,
}

const initialValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldFormWithValidation = () => {
    const [values, setValues] = useState<formValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<formValues | null>(null);
    const [ errors, setErrors ] = useState<FormErrors | null>(null);

    const validateForm = (values:formValues): FormErrors => {
        const errors: FormErrors = {};
        if (!values.name.trim()) {
            errors.name = "Name is Required";
        }
        if (!values.email.trim() ||
            !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/
            .test(values.email.trim()))
        {
            errors.email = "Email is Required";
        }
        if (values.message.length < 5) {
            errors.message = "Message is Required";
        }

        return errors;
    };

    useEffect(()=>{
        document.title = "MultiFieldFormWithValidation";
    }, [])

    const handleChange =
        (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {

        const {name, value} = e.target;

        setValues((prev)=> ({
            ...prev, [name] : value
        }));

        setErrors((prev)=> ({
            ...prev,
            [name]: undefined,
        }))


    };

    const handleClear = () =>{
        setValues(initialValues);
        setErrors(null);
        setSubmittedData(null);
    };

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();

        const validationErrors= validateForm(values);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmittedData(null);
            return;
        }

        setSubmittedData(values);
        console.log(values);
        setValues(initialValues);
        setErrors(null);
    };


    return(
        <>
            <div className="mx-auto max-w-sm mt-16 flex">
            <form onSubmit={handleSubmit} className="space-y-4 ">
                <div>
                    <input
                        name="name"
                        type="text"
                        value={values.name}
                        placeholder="Name"
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border"

                    />
                    {errors?.name && (
                        <p className="text-cf-dark-red">{errors.name}</p>
                    )}
                </div>
                <div>

                    <input
                        name="email"
                        type="text "
                        value={values.email}
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border"

                    />
                    {errors?.email && (
                        <p className="text-cf-dark-red">{errors.email}</p>
                    )}
                </div>
                <div>
                    <textarea
                        className="w-full px-4 py-2 rounded border"
                        name="message"
                        value={values.message}
                        placeholder="Type your message"
                        onChange={handleChange}

                    >
                    </textarea>
                    {errors?.message && (
                        <p className="text-cf-dark-red">{errors.message}</p>
                    )}
                </div>
                <div className="flex text-center  gap-4">
                    <button
                        type="submit"
                        className="bg-cf-dark-red text-white px-4 py-2 rounded">
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="bg-gray-200 text-cf-gray-700 px-4 py-2 rounded">
                        Clear
                    </button>
                </div>
                { submittedData && (
                    <div className="mt-5 border-t pt-4 space-y-2">
                        <h2 className="font-semibold">Submitted Data</h2>
                        <p><strong>Name:</strong>{submittedData.name}</p>
                        <p><strong>Email:</strong>{submittedData.email}</p>
                        <p><strong>Message:</strong>{submittedData.message}</p>
                    </div>
                )}
            </form>
            </div>
        </>
    )
}
export default MultiFieldFormWithValidation