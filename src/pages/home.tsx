import Body from "../components/body/body";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import "../styles/home.scss";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
