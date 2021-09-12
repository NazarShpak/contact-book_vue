import Vue from 'vue'
import Vuex from 'vuex'
import extend from "extend";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    deleteContact(state, payload) {
      state.contacts.splice(payload, 1)
    },
    addNewContact(state, payload) {
      state.contacts.unshift(payload)
    },
    deleteContactInfo(state, {contactKey, contactIndex}) {
      let contact = state.contacts[contactIndex]
      delete contact[contactKey]
      state.contacts.splice(contactIndex, 1, contact)
    },
    addNewInfo(state, {contactKey, contactValue, contactIndex}) {
      let contact = state.contacts[contactIndex]
      contact[contactKey] = contactValue
    },
    editContactInfo(state, {editKey, editValue, contactIndex, contactKey}) {
      let contact = state.contacts[contactIndex]
      if (editKey === contactKey) {
        contact[contactKey] = editValue
      } else {
        delete contact[contactKey]
        contact[editKey] = editValue
      }
    },
    rollbackContact(state, {contactCopy, contactIndex}) {
      state.contacts.splice(contactIndex, 1, extend(true, {}, contactCopy))
    },
  },
})
