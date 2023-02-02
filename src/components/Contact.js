import { useState, useContext } from "react";
import UserContext from "./UserContext";

const Section = ({ title, description, isvisible, setVisible }) => {
  console.log(isvisible);
  console.log(setVisible);
  return (
    <div className=" border border-black m-2">
      <h1 className="font-bold text-2xl">{title}</h1>
      {isvisible ? (
        <div>
          <button
            className="underline"
            onClick={() => {
              setVisible("");
            }}
          >
            Hide
          </button>
          <p>{description}</p>
        </div>
      ) : (
        <button
          className="underline"
          onClick={() => {
            setVisible();
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Contact = () => {
  const [visiblesection, setVisibleSection] = useState("");
  const { userinfo, setPersonalDetails } = useContext(UserContext);
  return (
    <>
      <input
        placeholder="Change "
        className="mt-3 ml-[600px] "
        onChange={(e) =>
          setPersonalDetails({
            ...userinfo,
            name: e.target.value,
          })
        }
      ></input>
      <input
        placeholder="Change email"
        className="mt-3 ml-[600px] "
        onChange={(e) =>
          setPersonalDetails({
            ...userinfo,
            email: e.target.value,
          })
        }
      ></input>
      <h1 className="ml-[600px] text-2xl ">name:{userinfo.name}</h1>
      <h1 className="ml-[600px] text-2xl ">Email:{userinfo.email}</h1>
      <Section
        title={"About owner"}
        description={
          "Restaurant Owner A restaurant owner is sometimes also the restaurant manager. The actual job description depends on the other workers employed. Some owners have various managers who supervise specific departments and then report to them. Others take care of every one of the aspects of the restaurant. Basically, the owner is the one who keeps the business running on a daily basis.To be a restaurant owner, you need to be socially experienced. There will be many times when you have to go out of your way to please someone. Or you can lose a customer."
        }
        isvisible={visiblesection === "about"}
        setVisible={() => {
          setVisibleSection(visiblesection === "about" ? "" : "about");
        }}
      />
      <Section
        title={"About team"}
        description={
          "Teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.Talent wins games, but teamwork and intelligence win championships.Alone we can do so little; together we can do so much It is literally true that you can succeed best and quickest by helping others to succeed None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful."
        }
        isvisible={visiblesection === "team"}
        setVisible={() => {
          setVisibleSection(visiblesection === "team" ? "" : "team");
        }}
      />
      <Section
        title={"About carrer"}
        description={
          "A career is the variety of experiences that you have undertaken throughout your life. As you gain more experience in the worlds of work and life, you are building your career. Your career path takes account of your education, training and paid or unpaid work. It also includes your family and life roles, activities, volunteer work, community involvement and more. A career is the variety of experiences that you have undertaken throughout your life. As you gain more experience in the worlds of work and life, you are building your career. Your career path takes account of your education, training and paid or unpaid work. It also includes your family and life roles, activities, volunteer work, community involvement and more."
        }
        isvisible={visiblesection === "carrer"}
        setVisible={() => {
          setVisibleSection(visiblesection === "carrer" ? "" : "carrer");
        }}
      />
    </>
  );
};
export default Contact;
