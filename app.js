"use strict";
const fullName = document.querySelector("#YourName");
const email = document.querySelector("#YourEmail");
const phone = document.querySelector("#YourPhone");
const message = document.querySelector("#YourMessage");
const button = document.querySelector("#SubmitForm");
const form = document.querySelector("#form");
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdaVCsAxup4YgzycB0jcHc8BtsRdj0_8ubA9UFdx_a4koTPMQ/formResponse"; // your google form response URL e.g https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfVQ2ycW2AROnbmCmVw8I8Uc7Z40BZtjleJ_-IQjgtznQ_4cJl/formResponse

const handleSubmit = async (event) => {
  event.preventDefault();
  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const phoneValue = phone.value;
  const messageValue = message.value;
  const formData = {
    "entry.1014224063": fullNameValue, // entry.253486596 is the name attribute for the full name field on our google form
    "entry.592059813": emailValue, // entry.1124906099 is the name attribute for the email address field on our google form
    "entry.516219041": phoneValue, // entry.1163114650 is the name attribute for the notes address field on our google form
    "entry.233743879": messageValue, // entry.1163114650 is the name attribute for the notes address field on our google form
  };
  const appendedFormData = newFormData({ ...formData });

  try {
    button.disabled = true;
    button.textContent = "processing...";
    const response = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: appendedFormData,
    });
    alert("Form submitted to google spreadsheet successfully!");
  } catch (error) {
    alert("Something went wrong, please try again");
    console.log(error);
  } finally {
    button.disabled = false;
    button.textContent = "Submit";
  }
};

form.addEventListener("submit", handleSubmit);

// A helper function to help convert the data to FormData
const newFormData = (inputs) => {
  const formData = new FormData();
  const newArr = Object.entries(inputs);
  newArr.map((item) => {
    return formData.append(`${item[0]}`, item[1]);
  });
  return formData;
};
