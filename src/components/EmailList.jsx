import React, { useEffect, useState } from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "../firebaseConfig";
import { doc, getDocs, onSnapshot, collection } from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState([]);
  const emailRef = collection(db, "emails");

  const timequery = query(emailRef, orderBy("timestamp", "desc"));

  // useEffect(() => {
  //   getDocs(timequery).then((response) => {
  //     console.log(response.docs.map((item) => {
  //       return { ...item.data(), id: item.id}
  //     }))
  //   })
  // }, [timequery])

  useEffect(() => {
    onSnapshot(timequery, (data) => {
      setEmails(
        data.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      console.log(emails);
    });
  }, []);

  // useEffect(() => {
  //   console.log(emails)
  // }, [emails])

  // useEffect(() => {
  //   db.collection("emails")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) =>
  //       setEmails(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );
  // }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
        <EmailRow title='EmailTest' subject='Testing the scroll and behavior when the list gets full' description='Nice website! Glad to see progress and being able to learn so much new features' time='10pm' />
      </div>
    </div>
  );
}

export default EmailList;
