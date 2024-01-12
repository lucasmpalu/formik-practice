import React from 'react'

// SIEMPRE IMPORTAR ASÍ, PARA EMPEZAR A USAR
import { Formik } from 'formik'
import { FormBox, FormStyled, FormSubtitle, FormTitle } from './FormEjemploStyles.js'
import { initialValues } from '../formik/initialValues.js'
import { validationSchema } from '../formik/validationSchema.js'
import InputEjemplo from '../inputAndButton/inputEjemplo.jsx'
import SubmitBtn from '../inputAndButton/SubmitBtn.jsx'




/* FORMIK TIENE 5 COMPONENTES OBLIGATORIOS

0- <Formik>: Este componente debe encerrar a todo el formulario y le debo pasar la validation y los initialValues

1- <Form>: Este componente se utiliza para envolver todo el formulario. 
   Ayuda a establecer el contexto de Formik y a gestionar la lógica del formulario.

2- <Field>: Este componente se utiliza para representar un campo de formulario.
   Puedes usarlo para manejar la entrada de datos y las validaciones asociadas a un campo específico.

3- <ErrorMessage>: Este componente se utiliza para mostrar mensajes de error asociados a un campo específico.

4- <FieldArray>: Este componente se utiliza para trabajar con campos de formulario que son arrays.
   Permite agregar, eliminar y manipular elementos en un array.
*/

const FormEjemplo = () => {


  return (
            <FormBox>

               <FormTitle>Formulario de Ejemplo</FormTitle>

               <FormSubtitle>Este es un formulario de Ejemplo</FormSubtitle>

               <Formik 
               initialValues={initialValues}
                validationSchema={validationSchema}
               //  values y resetForm, vienen predeterminados,
                onSubmit={(values, resetForm) => { 
                  console.log(values)
                  resetForm()
                  }}> {/* Componente <Formik> */}

                  <FormStyled> {/* Componente <Form> */}
                     
                     <InputEjemplo
                     name="name"
                     label="Nombre"
                     type="text"
                     />
                     
                     <InputEjemplo
                        name="surname"
                        label="Apellido"
                        type="text"
                     />
                     
                     <InputEjemplo
                        name="age"
                        label="Edad"
                        type="number"
                     />

                     <InputEjemplo
                        name="email"
                        label="Correo Electronico"
                        type="email"
                     />

                  <SubmitBtn></SubmitBtn>
                     
                  </FormStyled>

                </Formik>

            </FormBox>
  )

}

export default FormEjemplo