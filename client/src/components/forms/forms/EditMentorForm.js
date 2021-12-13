import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./FormStyles.css";
import FieldOfStudyCheckboxComponent from "../form fields/FieldOfStudyCheckBoxComponent";
import PersonalInfoComponent from "../form fields/PersonalInfoComponent";
import OtherAreasCheckboxComponent from "../form fields/OtherAreasCheckboxComponent";
import DescriptionBioResourceComponent from "../form fields/DescriptionBioResourceComponent";
import FormTitleComponent from "../form fields/FormTitleComponent";
import AdditionalCheckboxWithFieldComponent from "../form fields/AdditionalCheckboxWithFieldComponent"; //addition
import ImageUpload from "../form fields/FileUploadComponent";

function EditMentorForm() {
  const params = useParams();
  const id = params.id;

  const [firstName, setFirstName] = useState(""); //the first value is a variable and the setter is a fuction
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [science, setScience] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [mathematics, setMathematics] = useState(false);
  const [description, setDescription] = useState("");
  const [bio, setBio] = useState("");
  const [otherResources, setOtherResources] = useState("");
  const [other1, setOther1] = useState(false);
  const [other2, setOther2] = useState(false);
  const [other3, setOther3] = useState(false);
  const [other4, setOther4] = useState(false);
  const [other5, setOther5] = useState(false);
  const [other6, setOther6] = useState(false);
  const [other7, setOther7] = useState(false);
  const [other8, setOther8] = useState(false);
  const [other9, setOther9] = useState(false); //addition
  const [other10, setOther10] = useState(""); //addition
  const [other11, setOther11] = useState(false); //addition
  const [image, setImage] = useState(""); //addition

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:5001/get-mentor/${id}`);
      const data = await res.json();
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setCity(data.city);
      setProvince(data.province);
      setScience(data.science);
      setTechnology(data.technology);
      setEngineering(data.engineering);
      setMathematics(data.mathematics);
      setBio(data.bio);
      setDescription(data.description);
      setOtherResources(data.otherResources);
      setOther1(data.other1);
      setOther2(data.other2);
      setOther3(data.other3);
      setOther4(data.other4);
      setOther5(data.other5);
      setOther6(data.other6);
      setOther7(data.other7);
      setOther8(data.other8);
      setOther9(data.other9);
      setOther10(data.other10);
      setOther11(data.other11);
      setImage(data.image);
    };
    getData();
  }, []);

  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      const personalInfo = {
        firstName,
        lastName,
        city,
        province,
        email,
        science,
        technology,
        engineering,
        mathematics,
        description,
        bio,
        otherResources,
        other1,
        other2,
        other3,
        other4,
        other5,
        other6,
        other7,
        other8,
        other9, //addition
        other10, //addition
        other11, //addition
      };

      formData.append("fileProps", JSON.stringify(personalInfo));
      formData.append("image", image);

      const res = await fetch(`http://localhost:5001/api/add-mentor/${id}`, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        //1. clear form fields
        //2. navigate back to home page
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main-form">
      <FormTitleComponent title={"Edit Mentor Details"} />

      <PersonalInfoComponent
        values={{ firstName, lastName, email, city, province }}
        setters={{
          setFirstName,
          setLastName,
          setEmail,
          setCity,
          setProvince,
        }}
      />
      <FieldOfStudyCheckboxComponent
        values={{ science, technology, engineering, mathematics }}
        setters={{
          setScience,
          setTechnology,
          setEngineering,
          setMathematics,
        }}
      />
      <ImageUpload values={{ image }} setters={{ setImage }} />
      <DescriptionBioResourceComponent
        values={{ description, bio, otherResources }}
        setters={{ setDescription, setBio, setOtherResources }}
      />
      <OtherAreasCheckboxComponent
        values={{
          other1,
          other2,
          other3,
          other4,
          other5,
          other6,
          other7,
          other8,
        }}
        setters={{
          setOther1,
          setOther2,
          setOther3,
          setOther4,
          setOther5,
          setOther6,
          setOther7,
          setOther8,
        }}
      />
      <AdditionalCheckboxWithFieldComponent
        values={{
          other9,
          other10,
          other11,
        }}
        setters={{
          setOther9,
          setOther10,
          setOther11,
        }}
      />

      <input
        className="submit-button"
        type="button"
        value="SUBMIT"
        onClick={handleSubmit}
      />
    </div>
  );
}

/*
function EditMentorForm({
  existingValues,
  fetchedId,
  titleValue,
  buttonValue,
  onSave,
}) {
  //set the beginning state for all variables
  let params = useParams();
  let id = params.id;
  const [firstName, setFirstName] = useState(""); //the first value is a variable and the setter is a fuction
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [science, setScience] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [mathematics, setMathematics] = useState(false);
  const [description, setDescription] = useState("");
  const [bio, setBio] = useState("");
  const [otherResources, setOtherResources] = useState("");
  const [other1, setOther1] = useState(false);
  const [other2, setOther2] = useState(false);
  const [other3, setOther3] = useState(false);
  const [other4, setOther4] = useState(false);
  const [other5, setOther5] = useState(false);
  const [other6, setOther6] = useState(false);
  const [other7, setOther7] = useState(false);
  const [other8, setOther8] = useState(false);
  const [other9, setOther9] = useState(false); //addition
  const [other10, setOther10] = useState(""); //addition
  const [other11, setOther11] = useState(false); //addition
  const [image, setImage] = useState(""); //addition

  useEffect(() => {
    if (existingValues) {
      console.log(`FROM EDIT FORM EXISTING VALUES ${existingValues}`);
      setFirstName(existingValues.firstName);
      setLastName(existingValues.lastName);
      setEmail(existingValues.email);
      setCity(existingValues.city);
      setProvince(existingValues.province);
      setScience(existingValues.science);
      setTechnology(existingValues.technology);
      setEngineering(existingValues.engineering);
      setMathematics(existingValues.mathematics);
      setBio(existingValues.bio);
      setDescription(existingValues.description);
      setOtherResources(existingValues.otherResources);
      setOther1(existingValues.other1);
      setOther2(existingValues.other2);
      setOther3(existingValues.other3);
      setOther4(existingValues.other4);
      setOther5(existingValues.other5);
      setOther6(existingValues.other6);
      setOther7(existingValues.other7);
      setOther8(existingValues.other8);
      setOther9(existingValues.other9);
      setOther10(existingValues.other10);
      setOther11(existingValues.other11);
      setImage(existingValues.image);
    }
  }, [existingValues]); //this is called a guard, it will not touch the existing values unless the existing values are changed

  async function postData() {
    let formData = new FormData();
    //declare keys in personalInfo Object
    try {
      let newMentor = {
        firstName,
        lastName,
        city,
        province,
        email,
        science,
        technology,
        engineering,
        mathematics,
        description,
        bio,
        otherResources,
        other1,
        other2,
        other3,
        other4,
        other5,
        other6,
        other7,
        other8,
        other9, //addition
        other10, //addition
        other11, //addition
      };

      formData.append("fileProps", JSON.stringify(newMentor));
      formData.append("image", image);

      const res = await fetch(`http://localhost:5001/api/add-mentor/${id}`, {
        method: "PUT",
        body: formData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // console.log(data);
  //   await onSave(newMentor);
  //   console.log(`saving bio ${newMentor}`);
  // }

  //form title component:  you can set the name of the form here to be what you want
  //personal info component:  values and setters of those values are passed in here
  //field of study component: values and setters of those values are passed in here
  //Description bio resource component:     ""
  //Other Areas checkbox component:      ""
  //Submit button

  return (
    <div className="main-form">
      <FormTitleComponent title={"Edit Mentor Details"} />

      <PersonalInfoComponent
        values={{ firstName, lastName, email, city, province }}
        setters={{
          setFirstName,
          setLastName,
          setEmail,
          setCity,
          setProvince,
        }}
      />
      <FieldOfStudyCheckboxComponent
        values={{ science, technology, engineering, mathematics }}
        setters={{
          setScience,
          setTechnology,
          setEngineering,
          setMathematics,
        }}
      />
      <ImageUpload values={{ image }} setters={{ setImage }} />
      <DescriptionBioResourceComponent
        values={{ description, bio, otherResources }}
        setters={{ setDescription, setBio, setOtherResources }}
      />
      <OtherAreasCheckboxComponent
        values={{
          other1,
          other2,
          other3,
          other4,
          other5,
          other6,
          other7,
          other8,
        }}
        setters={{
          setOther1,
          setOther2,
          setOther3,
          setOther4,
          setOther5,
          setOther6,
          setOther7,
          setOther8,
        }}
      />
      <AdditionalCheckboxWithFieldComponent
        values={{
          other9,
          other10,
          other11,
        }}
        setters={{
          setOther9,
          setOther10,
          setOther11,
        }}
      />

      <input
        className="submit-button"
        type="button"
        value="SUBMIT"
        onClick={postData}
      />
    </div>
  );
}

*/

export default EditMentorForm;
