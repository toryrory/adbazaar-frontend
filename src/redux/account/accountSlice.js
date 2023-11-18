import { createSlice } from '@reduxjs/toolkit';
import { notifications } from '@/data/notifications';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    settings: {
      avatar: null, //проверить подставив вместо null -> TestAvatar
    },

    cart: [],
    notifications: notifications,
  },
  reducers: {
    changeCheckBox(state, action) {
      const notification = state.notifications.find(
        (notification) => notification.id === action.payload
      );
      notification.checked = !notification.checked;
    },
    markAsRead(state, action) {
      state.notifications = state.notifications.map((notif) => ({
        ...notif,
        isRead: notif.checked ? true : notif.isRead,
      }));
    },
    deleteNotification(state, action) {
      state.notifications = state.notifications.filter(
        (notif) => notif.checked === false
      );
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});
// сделать екстраредюсер на получение данных с формы

export const { changeCheckBox, markAsRead, deleteNotification, clearCart } =
  accountSlice.actions;
export const accountReducer = accountSlice.reducer;
