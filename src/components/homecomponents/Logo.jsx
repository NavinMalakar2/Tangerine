import Hero from "./Hero";
import Navbar from "./Navbar";

const Logo = ()=>{
        return(
            <>
                <div className="w-screen h-screen bg-[url('../../../public/img/backphoto.avif')] bg-cover bg-center ">
                        <Navbar/>
                        <Hero/>
                </div>
            </>
        );
}

export default Logo;

