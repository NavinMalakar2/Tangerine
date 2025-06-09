import Hero from "./Hero";
import Navbar from "./Navbar";

const Logo = ()=>{
        return(
            <>
                <div className="w-screen h-screen bg-[url('https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
                        <Navbar/>
                        <Hero/>
                </div>
            </>
        );
}

export default Logo;

