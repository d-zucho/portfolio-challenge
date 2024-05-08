'use client'
import { FormDataType } from '@/lib/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import FormField from './FormField'
import { error } from 'console'
import MyButton from './MyButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/schema'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormDataType>({ resolver: zodResolver(ContactFormSchema) })
  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log(data)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-around gap-10 max-w-sm md:max-w-full'
    >
      <FormField
        type='text'
        name='name'
        placeholder='Name'
        send={register}
        label='Name'
        error={errors.name}
      />
      <FormField
        type='email'
        name='email'
        placeholder='E-mail'
        send={register}
        label='Email'
        error={errors.name}
      />
      <FormField
        type='text'
        name='message'
        placeholder='Message'
        send={register}
        label='Message'
        error={errors.name}
      />

      <MyButton
        label='Send Message'
        classNames='w-fit ml-auto uppercase text-sm hover:text-brightGreen border-b-2 border-b-brightGreen pb-2'
      />
    </form>
  )
}

export default Form
