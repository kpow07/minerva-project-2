import { useNavigate } from "react-router-dom";
import BioDirectoryComponent2 from "../../directories/BioDirectoryComponent2";

function MainBioGallery2({ bios }) {
  const navigate = useNavigate();

  function setSelectedBioId(id) {
    navigate("/bio-detail/" + id);
  }
  return (
    <div className="main-bio-list">
      <BioDirectoryComponent2
        title={"Famous women in STEM"}
        biosArray={bios}
        setSelectedBioId={setSelectedBioId}
      />
    </div>
  );
}
export default MainBioGallery2;
