import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnyoneDetail from "../../bio-cards/AnyoneDetail";
import CommentComponent from "../comments/CommentComponent";
import CommentForm from "../comments/CommentForm";
import TitleComponent from "../../title/TitleComponent";
import BioPageCardDiv from "../bio page/BioPageCardDiv";
import "../../bio-cards/Detail.style.css";

const BioDetailPage = function ({ user, setUser }) {
  const [bio, setBio] = useState();
  let userId = user?._id;
  let params = useParams();
  let bioId = params.id;

  useEffect(() => {
    const fetchBio = async () => {
      let fetchResult = await fetch("/api/get-bio/" + bioId);
      let fetchedBio = await fetchResult.json();
      setBio(fetchedBio);
    };
    if (bioId) {
      fetchBio();
    }
  }, [bioId]);

  // console.log("Loading superhero id: ", { id });

  return (
    <div>
      <TitleComponent title="Biography Detail" />
      <div className="profile-page-wrapper">
        <div className="michelle">
          <BioPageCardDiv
            bio={bio}
            bioId={bioId}
            userId={userId}
            user={user}
            setUser={setUser}
          />
          <AnyoneDetail bioId={bioId} buttonLink={"/bio-edit/" + bioId} />
        </div>
      </div>
      <CommentComponent mentorId={params.id} user={user} />
    </div>
  );
};

export default BioDetailPage;
