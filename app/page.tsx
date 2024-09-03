import Header from "./components/Header";
import {
    MainCenter,
    MainSidebar,
    Mobilebar,
} from "./components/Main";

export default function Home() {
    return (
        <>
            <section className="flex sm:pt-3 sm:p-10 sm:py-5 w-full h-screen flex-col overflow-hidden">
                <Header />
                <main className="flex gap-5 h-full sm:py-5">
                    <MainSidebar />
                    <MainCenter />
                </main>
                <Mobilebar />
                <footer className="flex sm:hidden">
                    <span className="">
                        tiagohll © 2024
                    </span>
                </footer>
            </section>
        </>
    );
}
