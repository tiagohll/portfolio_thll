import Footer from "../components/Footer";
import Header from "../components/Header";
import {
    MainSearch,
    MainSidebar,
    Mobilebar,
} from "../components/Main";

export default function Search() {
    return (
        <>
            <section className="flex sm:pt-3 sm:p-10 sm:py-5 w-full h-screen flex-col overflow-hidden">
                <Header />
                <main className="flex gap-5 sm:h-[80vh] h-full py-5">
                    <MainSidebar />
                    <MainSearch />
                </main>
                <Mobilebar />
                <Footer />
            </section>
        </>
    );
}
