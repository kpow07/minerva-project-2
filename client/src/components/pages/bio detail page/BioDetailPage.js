import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import AnyoneDetail from "../../bio-cards/AnyoneDetail";

const BioDetailPage = function () {
  let navigate = useNavigate();
  let params = useParams();
  // console.log("Loading superhero id: ", { id });

  return (
    <div>
      <AnyoneDetail bioId={params.id} buttonLink={"/bio-edit/" + params.id} />
    </div>
  );
};

export default BioDetailPage;
