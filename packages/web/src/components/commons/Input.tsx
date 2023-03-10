import React from 'react'
import styled from 'styled-components'

interface IProps {
  type: string
  name: string
  placeholder: string
  value: string | number
  onChange(evnet: React.ChangeEvent<HTMLInputElement>): void
  onKeyDown(event: React.KeyboardEvent): void
}

const Input: React.FC<IProps> = (props) => {
  const { type, name, placeholder, onChange, onKeyDown, value } = props

  return (
    <$input className={'input'} type={type} name={name} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} value={value} />
  )
}

export default Input

const $input = styled.input`
  display: inline-block;
  padding: 0 20px;
  height: 60px;
  width: 100%;
  font-size: 16px;  
`