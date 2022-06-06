import Header from "../components/Header";
import Slider from "../components/Slider";
import MainContents from "../components/Main_contents";
import MainContents2 from "../components/Main_contents_2";
import MainContents3 from "../components/Main_contents_3";
import SubContents from "../components/Sub_contents";
import Footer from "../components/Footer";

function Main() {
  return (
    <div>
      <Header />
      <Slider />
      <MainContents />
      <MainContents2 />
      <MainContents3 />
      <SubContents title={'NEW ARRIVALS'} />
      <SubContents title={'BEST'} />
      <Footer />
    </div>
  );
}

export default Main;
