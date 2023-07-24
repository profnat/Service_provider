import web_Head from "../head";
import web_Header from "../header";
import Web_Footer from "../footer";

export default function web_Layout(){
    return (
        <>
            <Web_Head title={ title } content={ content } />
            <main>
                <Web_Header />
                <section className="">
                    { child }
                </section>
                <Web_Footer />
            </main>
        </>
    );
}