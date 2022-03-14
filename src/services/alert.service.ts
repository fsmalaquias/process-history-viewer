import { NOTIFICATION_TYPE, Store } from 'react-notifications-component';

export default class AlertService {

  static showAlert(title: String, message: String, type: NOTIFICATION_TYPE) {
    Store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  }

  static error(title: String, message: String) {
    this.showAlert(title, message, 'danger');
  }

}