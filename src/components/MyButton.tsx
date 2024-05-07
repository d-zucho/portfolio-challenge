interface MyButtonProps {
  label: string
  classNames?: string
}

const MyButton = ({ classNames, label }: MyButtonProps) => {
  return <button className={classNames}>{label}</button>
}

export default MyButton
