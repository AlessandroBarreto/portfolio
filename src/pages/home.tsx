import Body from "../components/body";
import Footer from "../components/footer";
import Header from "../components/header";
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
