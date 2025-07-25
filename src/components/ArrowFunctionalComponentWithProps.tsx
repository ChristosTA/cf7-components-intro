type Props = {
    title: string
    description: string;
}

// interface Props {
//     title: string
// }

const ArrowFunctionalComponentWithProps =({ title, description }: Props) => {
    return (<>
            <h1 className="text-center mt-12 text-xl font-bold">{title}</h1>;
            <p className="text-center text-gray-800">{description}</p>

        </>
        )
}

export default ArrowFunctionalComponentWithProps