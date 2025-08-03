import {useEffect, useState} from "react";

type formValues = {
    name: string,
    email: string,
    message: string,
}

const initialValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldForm = () => {
    const [values, setValue] = useState<formValues>(initialValues);

    const [submittedData, setSubmittedData] = useState<formValues | null>(null);

    useEffect(()=>{
        document.title = "MultiFieldForm";
    }, [])

    const handleChange =
        (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {

        const {name, value} = e.target;

        setValue((prev)=> ({
            ...prev, [name] : value
        }));


    };

    const handleClear = () =>{
        setValue(initialValues);
        setSubmittedData(null);
    };

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        setSubmittedData(values);
        console.log(values);
        setValue(initialValues);
    };


    return(
        <>
            <div className="mx-auto max-w-sm mt-16 flex">
            <form onSubmit={handleSubmit} className="space-y-4 ">
                <input
                    name="name"
                    type="text"
                    value={values.name}
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded border"
                    required
                />
                <input
                    name="email"
                    type="email"
                    value={values.email}
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded border"
                    required
                />
                <textarea
                    className="w-full px-4 py-2 rounded border"
                    name="message"
                    value={values.message}
                    placeholder="Type your message"
                    onChange={handleChange}
                    minLength={5}
                    required
                ></textarea>
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
export default MultiFieldForm