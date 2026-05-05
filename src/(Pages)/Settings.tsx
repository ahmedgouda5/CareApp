import ProfileInfo from "../components/Seetings/ProfileInformation";
import PharmacyInformation from "../components/Seetings/PharmacyInformation";
import Preferences from "../components/Seetings/Preferences";

const Settings = () => {
  return (
    <div className="space-y-4">
      <ProfileInfo />
      <PharmacyInformation />
      <Preferences />
    </div>
  );
};

export default Settings;
