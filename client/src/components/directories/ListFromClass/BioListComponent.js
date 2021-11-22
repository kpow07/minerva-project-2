import { useEffect, useState } from "react";

const BioRow = ({
  firstName,
  lastName,
  description,
  canadian,
  onBioSelected,
}) => (
  <tr onClick={() => onBioSelected()}>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{description}</td>
    <td>{canadian}</td>
  </tr>
);

const BioListComponent = ({ setSelectedBioId }) => {
  const [bios, setBios] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching Bio Data!");
      let fetchResult = await fetch("/api/get-bio");
      let biosList = await fetchResult.json();
      setBios(biosList);
    }
    fetchData();
  }, []);
  ////////////
  ////////////
  function selectBio(id) {
    console.log("selectBio called on id: ", id);
    setSelectedBioId(id);
  }
  return (
    <div className="bios-list">
      <h2>Famous Bios List</h2>
      <table style={{ margin: "auto" }}>
        <thread>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Description</th>
            <th>Canadian</th>
          </tr>
        </thread>
        <tbody>
          {bios.map((bios, index) => {
            return (
              <BioRow
                key={index}
                onBioSelected={() => selectBio(bios._id)}
                firstName={bios.firstName}
                lastName={bios.lastName}
                description={bios.description}
                canadian={bios.canadian}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default BioListComponent;
