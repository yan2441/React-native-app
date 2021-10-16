import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Notifications from "expo-notifications"
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";



function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    try {
      Keyboard.dismiss();

      const result = await messagesApi.send(message, listing.id);

      if (!result.ok) {
        console.log("Error", result);
        return Alert.alert("Error", "Could not send the message to the seller.");
      }


      Alert.alert("massage send", "done");
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "You've got mail! 📬",
          body: 'Here is the notification body',
          data: { data: 'goes here' },
        },
        trigger: { seconds: 0 },
      });
      resetForm()
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={2}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
