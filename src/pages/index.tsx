import Header from "@/components/Index/Header";
import PreviewBlock from "@/components/Index/PreviewBlock";
import AboutBlock from "@/components/Index/AboutBlock";
import Works from "@/components/Index/Works";
import Footer from "@/components/Index/Footer";


export default function Home() {
  return (
    <main>
      <Header/>
      <PreviewBlock/>
      <AboutBlock/>
      <Works/>
      <Footer/>
    </main>
  );
}
