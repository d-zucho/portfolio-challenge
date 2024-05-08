'use client'
import { FormDataType, FormFieldPropTypes } from '@/lib/types'
import { register } from 'module'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const FormField: React.FC<FormFieldPropTypes> = ({
  type,
  name,
  placeholder,
  send,
  label,
}) => {
  const { register, handleSubmit } = useForm<FormDataType>()
  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log(data)
  }

  return (
    <>
      <label htmlFor={`form-${name}`} />
      <input
        id={`form-${name}`}
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true })}
        className='bg-transparent border-gray-500 w-full p-2 border-b-2 placeholder:text-gray-400/80 focus:outline-none focus:border-b-brightGreen transition'
      />

      {/* {error && <p>{error.message}</p>} */}
    </>
  )
}

export default FormField
