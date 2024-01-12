import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { InputStyled, ErrorStyled, InputBoxStyled, InputLabelStyled } from './inputEjemploStyles'

const InputEjemplo = ({type, name, isError, label}) => {
  return (
    <InputBoxStyled>
        <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
        <Field
            name={name}
            type={type}
            error={isError}
            id={label}
            as={InputStyled}
        />
        <ErrorMessage name={name} component={ErrorStyled}/>
    </InputBoxStyled>
  )
}

export default InputEjemplo