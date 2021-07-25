import Navbar from "./components/navbar/Navbar";
import AboutPlatform from "./components/aboutPlatform/AboutPlatform";
import LessonOrder from "./components/lessonOrder/LessonOrder";
import TeamMembers from "./components/teamMembers/TeamMembers";
import ShareExperience from "./components/shareExperience/ShareExperience";
import MobileApps from "./components/mobileApps/MobileApps";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";
import './styles/background-item.scss';

function App() {
    return (
        <div className="bg-gray-50 relative">
            <Navbar/>
            <AboutPlatform/>
            <LessonOrder/>
            <TeamMembers/>
            <ShareExperience/>
            <MobileApps/>
            <AboutUs/>
            <Footer/>
            <div className="bg-item absolute inset-0">
                <div className="w-10/12 mx-auto">
                    <div className="bg-item-8"/>
                    <div className="bg-item-1"/>
                    <div className="bg-item-2"/>
                    <div className="bg-item-3"/>
                    <div className="bg-item-4"/>
                    <div className="bg-item-5"/>
                    <div className="bg-item-6"/>
                    <div className="bg-item-7"/>
                    <div className="bg-item-9"/>

                </div>

            </div>
        </div>
    );
}

export default App;
