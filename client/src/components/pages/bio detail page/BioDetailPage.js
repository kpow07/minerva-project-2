import React from "react";
import { useParams } from "react-router-dom";
import AnyoneDetail from "../../bio-cards/AnyoneDetail";
import CommentComponent from "../comments/CommentComponent";
import CommentForm from "../comments/CommentForm";

const BioDetailPage = function ({ user }) {
  // let navigate = useNavigate();
  let params = useParams();
  // console.log("Loading superhero id: ", { id });

  return (
    <div>
      <AnyoneDetail bioId={params.id} buttonLink={"/bio-edit/" + params.id} />
      <CommentComponent mentorId={params.id} user={user} />
    </div>
  );
};

export default BioDetailPage;
