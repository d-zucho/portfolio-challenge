import { FieldError, UseFormRegister } from 'react-hook-form'

// The Structure of the data that is expected and will be sent to the server
export type FormDataType = {
  email: string
  name: string
  message: string
}

// defines the properties expected by the form field component
export type FormFieldPropTypes = {
  type: string
  placeholder: string
  name: ValidFieldNames
  label: string
  send: UseFormRegister<FormDataType>
  error: FieldError | undefined
}

export type ValidFieldNames = 'name' | 'email' | 'message'
