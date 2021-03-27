const actions = {
  MODIFY_FILE: 'MODIFY_FILE',
  VIEW_FILE: 'VIEW_FILE',
  DELETE_FILE: 'DELETE_FILE',
  CREATE_FILE: 'CREATE_FILE',
  EXPORT_FILE: 'EXPORT_FILE',
}

const roles = {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  GUEST: 'GUEST',
}

const types = {
  PDF: 'PDF',
  DOCX: 'DOCX',
  XLSX: 'XLSX',
  PPTX: 'PPTX',
}

const licenses = {
  PAID: 'PAID',
  FREE: 'FREE',
}

export {actions, roles, types, licenses}
