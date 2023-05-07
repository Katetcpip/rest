import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormOrder = ({ fromFormData }: any) => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                phone: '',
                email: '',
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string().required('Name is required'),
                phone: Yup.string()
                    .min(11, 'Need 11 numbers')
                    .max(11, 'Max 11 numbers')
                    .required('Phone is required'),
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
            })}
            onSubmit={(fields) => {
                fromFormData(fields)
            }}
            render={({ errors, status, touched }) => (
                <Form className="border-2 rounded-xl border-yellow-400 lg:w-fit w-full">
                    <div className="flex flex-col p-4 rounded-t-xl w-full">
                        <label htmlFor="firstName" className="pb-2">
                            Имя
                        </label>
                        <Field
                            name="firstName"
                            type="text"
                            className="rounded-xl ml-2 border border-yellow-400 pl-2 md:p-1 p-3"
                        />
                        <ErrorMessage
                            name="firstName"
                            component="div"
                            className="w-full text-red-800 font-thin"
                        />
                    </div>
                    <div className="flex flex-col p-4 w-full">
                        <label htmlFor="phone" className="pb-2">
                            Телефон
                        </label>
                        <Field
                            name="phone"
                            type="number"
                            className="rounded-xl ml-2 border border-yellow-400 pl-2 md:p-1 p-3"
                        />
                        <ErrorMessage
                            name="phone"
                            component="div"
                            className="w-full text-red-800 font-thin"
                        />
                    </div>
                    <div className="flex flex-col p-4 w-full">
                        <label htmlFor="email" className="pb-2">
                            Email
                        </label>
                        <Field
                            name="email"
                            type="text"
                            className="rounded-xl ml-2 border border-yellow-400 pl-2 md:p-1 p-3"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-800 font-thin"
                        />
                    </div>
                    <div className="flex flex-row p-4">
                        <button
                            type="submit"
                            className="font-bold !text-white p-2 px-4 rounded-full !bg-white mr-2 !flex"
                        >
                            Оформить
                        </button>
                        <button
                            type="reset"
                            className="font-semibold !text-yellow-600 p-2 rounded-full !bg-white mr-2 !flex"
                        >
                            Сбросить
                        </button>
                    </div>
                </Form>
            )}
        />
    )
}

export default FormOrder
