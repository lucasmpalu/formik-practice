/* YUP es una herramienta de Formik para hacer validaciones
Acá me traigo TODO lo de Yup en esta importacion*/
import * as Yup from 'yup'

export const validationSchema = Yup.object({
    // valor del "name" del input, estos metodos son de yup, estas son las validaciones
    // podemos buscar todos los metodos de yup en la pagina oficial de yup
    name: Yup.string().trim().max(10, "Te pasaste de caracteres").required('Campo requerido'),
    surname: Yup.string().trim().required('Campo requerido'),
    age: Yup.number()
         .required('Campo requerido')
         .moreThan(18, "Debes ser mayor de edad")
         .lessThan(100, "Debes ser menor a 100 años")
         .integer('Debes ingresar un numero entero'),
    email: Yup.string()
           .email('Debes ingresar un email valido')
           .required('Campo requerido')
})