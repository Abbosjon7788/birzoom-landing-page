import Navbar from "./components/navbar/Navbar";
import AboutPlatform from "./components/aboutPlatform/AboutPlatform";
import LessonOrder from "./components/lessonOrder/LessonOrder";
import TeamMembers from "./components/teamMembers/TeamMembers";
import ShareExperience from "./components/shareExperience/ShareExperience";
import MobileApps from "./components/mobileApps/MobileApps";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
    return (
        <div className="bg-gray-50">
            <Navbar/>
            <AboutPlatform/>
            <LessonOrder/>
            <TeamMembers/>
            <ShareExperience/>
            <MobileApps/>
            <AboutUs/>
        </div>
    );
}

export default App;
