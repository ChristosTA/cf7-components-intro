import CodingFactoryLogo from "./CodingFactoryLogo.tsx";


const Header = ()  => {
    return(
        <>
        <header className="bg-[#782024] fixed w-full">
         <div className="container mx-auto flex items-center justify-between px-4 py-2">
             <CodingFactoryLogo/>
             <a className="text-white hover:underline hover:underline-offset-4 " href="/">Home</a>
         </div>
        </header>
        </>
    )
}

export default Header;