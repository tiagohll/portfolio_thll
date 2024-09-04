import Header from "./components/Header";
import {
    MainCenter,
    MainSidebar,
    Mobilebar,
} from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
            <section className="flex sm:pt-3 sm:p-10 sm:py-5 w-full h-screen flex-col overflow-hidden">
                <Header />
                <main className="flex gap-5 sm:h-[80vh] h-full sm:py-5 scroll-custom">
                    <MainSidebar />
                    <MainCenter />
                </main>
                <Mobilebar />
                <Footer />
            </section>
        </>
    );
}
