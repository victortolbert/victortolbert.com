import { reactive } from 'vue'
import axios from 'axios'

const emailSet = new Set()

export function useEmailSelection() {
  const emails = reactive(emailSet)

  const forSelected = (fn) => {
    emails.forEach((email) => {
      fn(email)
      axios.put(`http://api.victortolbert.com/emails/${email.id}`, email)
    })
  }
  const clear = () => {
    emails.clear()
  }
  const toggle = (id) => {
    if (emails.has(id))
      emails.delete(id)

    else
      emails.add(id)
  }
  const addMultiple = (newEmails) => {
    newEmails.forEach((email) => {
      emails.add(email)
    })
  }
  const markRead = () => {
    forSelected(e => e.read = true)
  }
  const markUnread = () => {
    forSelected(e => e.read = false)
  }
  const archive = () => {
    forSelected(e => e.archived = true)
    clear()
  }
  const moveToInbox = () => {
    forSelected(e => e.archived = false)
    clear()
  }

  return {
    emails,
    clear,
    toggle,
    addMultiple,
    markRead,
    markUnread,
    archive,
    moveToInbox,
  }
}
