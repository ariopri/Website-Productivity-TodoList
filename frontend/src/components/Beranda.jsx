
import Fitur from "./BerandaItem/Fitur";
import Footer from "./BerandaItem/Footer";
import SlideShow from "./BerandaItem/SlideShow";
import Testimoni from "./BerandaItem/Testimoni";
import NavigationBar from "./BerandaItem/NavigationBar";
const Beranda = () => {
    return (
        <>
            <NavigationBar />
            <SlideShow />
            <Fitur />
            <Testimoni />
            <Footer />
        </>
    );
};

export default Beranda;