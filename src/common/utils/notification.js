import { store } from 'react-notifications-component'

export default {
  success(message) {
    store.addNotification({
      title: 'Success',
      message,
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 5000
      }
    })
  },
  error(message) {
    store.addNotification({
      title: 'Error',
      message,
      type: 'error',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate', 'fadeIn'],
      animationOut: ['animate', 'fadeOut'],
      dismiss: {
        duration: 5000
      }
    })
  }
}
