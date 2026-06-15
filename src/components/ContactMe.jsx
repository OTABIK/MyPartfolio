import s from "./ContactMe.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  const sendInfoTelegram = (data) => {
    const token = import.meta.env.VITE_TELEGRAM_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const urlTelegram = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `
    name: ${data.name}
    number: ${data.number}
    Timeline: ${data.Timeline}
    email: ${data.email}
    options: ${data.options}
    details: ${data.details}`;

    try {
      axios.post(urlTelegram, {
        chat_id: chatId,
        text: message,
      });

      toast.success("Data Sent");
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };

  const onSubmit = (data) => sendInfoTelegram(data);

  return (
    <form id="contactMe" className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.container}>
        <h2 className={s.title}>Contact me</h2>
        <p className={s.text}>
          Cultivating Connections: Reach Out and Connect with Me
        </p>

        <div className={s.inpBlock}>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "This name is required",
              },
              minLength: {
                value: 3,
                message: "The min length is 3",
              },
              maxLength: {
                value: 45,
                message: "The max length is 40",
              },
            })}
            className={s.inp}
            type="text"
            placeholder="Name"
          />

          <input
            className={s.inp}
            {...register("number", {
              required: {
                value: true,
                message: "This Phone Number is required",
              },
              minLength: {
                value: 3,
                message: "The min length is 3",
              },
              maxLength: {
                value: 45,
                message: "The max length is 40",
              },
            })}
            type="number"
            placeholder="Phone Number"
          />

          <input
            {...register("Timeline")}
            className={s.inp}
            type="date"
            placeholder="Timeline"
          />

          <input
            {...register("email", {
              required: {
                value: true,
                message: "This email is required",
              },
              minLength: {
                value: 3,
                message: "The min length is 3",
              },
              maxLength: {
                value: 45,
                message: "The max length is 40",
              },
            })}
            className={s.inp}
            type="email"
            placeholder="Email"
          />

          <input
            {...register("options", {
              required: {
                value: true,
                message: "This options is required",
              },
            })}
            placeholder="Service of Interest"
            className={s.inp}
            type="text"
            list="options"
          />

          <datalist className={s.datalist} id="options">
            <option className={s.option} value="Figma to Website" />
            <option className={s.option} value="Social Media Content" />
            <option className={s.option} value="Video Editing" />
            <option className={s.option} value="Product Card Design" />
            <option className={s.option} value="Microsoft Office" />
            <option className={s.option} value="Other Services" />
          </datalist>

          <div className={s.block}>
            <textarea
              className={s.inp2}
              {...register("details")}
              type="text"
              placeholder="Project Details..."
            ></textarea>

            <button className={s.btn} type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactMe;
