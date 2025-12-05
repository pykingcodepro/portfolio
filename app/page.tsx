import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import MainBanner from "@/components/MainBanner";
import NavBar from "@/components/NavBar";
import ProjectsBanner from "@/components/ProjectsBanner";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainBanner />
      <AboutMe />
      <ProjectsBanner />
      <ContactMe />
      <Footer />
    </>
  );
}
