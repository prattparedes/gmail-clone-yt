import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required!</p>}

        <input
          name="subject"
          placeholder="Submit"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p className="sendMail__error">Subject is required!</p>}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="sendMail__error">Message is required!</p>}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="container"
            color="priamry"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
