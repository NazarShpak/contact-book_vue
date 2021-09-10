import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {
        'name': 'Nazar',
        'phone': '380936862232',
        'e-mail': 'hunter.nazik@gmail.com'
      },
      {


        'e-mail': 'savandriy@gmail.com'
      },
      {
        'name': 'Roma',
        'phone': '380671443263',
        'e-mail': 'roma_lesiv@gmail.com'
      },
      {
        'name': 'Dima',
        'phone': '380501443263',
        'e-mail': 'Dimonchik_1997@gmail.com'
      },
      {
        'name': 'Nazar1',
        'phone': '380936862232',
        'e-mail': 'hunter.nazik@gmail.com'
      },
      {
        'name': 'Andriy1',
        'phone': '380686223254',
        'e-mail': 'savandriy@gmail.com'
      },
      {
        'name': 'Roma1',
        'phone': '380671443263',
        'e-mail': 'roma_lesiv@gmail.com'
      },
      {
        'name': 'Dima1',
        'phone': '380501443263',
        'e-mail': 'Dimonchik_1997@gmail.com'
      },
      {
        'name': 'Nazar2',
        'phone': '380936862232',
        'e-mail': 'hunter.nazik@gmail.com'
      },
      {
        'name': 'Andriy2',
        'phone': '380686223254',
        'e-mail': 'savandriy@gmail.com'
      },
      {
        'name': 'Roma2',
        'phone': '380671443263',
        'e-mail': 'roma_lesiv@gmail.com'
      },
      {
        'name': 'Dima',
        'phone': '380501443263',
        'e-mail': 'Dimonchik_1997@gmail.com'
      },

    ],
    contactsCopy: [],
  },
  getters: {
    getContacts(state) {
      return state.contacts
    }
  },
  mutations: {
    deleteContact(state, payload) {
      state.contacts.splice(payload, 1)
      console.log(state.contacts)
    },
    addNewContact(state, payload) {
      state.contacts.push(payload)
    },
    deleteContactInfo(state, payload) {
      let contact = state.contacts[payload[1]]
      delete contact[payload[0]]
      state.contacts.splice(payload[1], 1, contact)
    },
    addNewCInfo(state, payload) {
      let contact = state.contacts[payload[2]]
      contact[payload[0]] = payload[1]
      state.contacts.splice(payload[2], 1, contact)
    }
  },
  actions: {
    async changeContact({ commit }, contact) {
      try {
        commit('deleteContact', contact)
        commit('addNewContact', contact)
        commit('deleteContactInfo', contact)
        commit('addNewCInfo', contact)
      } catch (error) {
        console.log(error)
      }
    },
  }
})