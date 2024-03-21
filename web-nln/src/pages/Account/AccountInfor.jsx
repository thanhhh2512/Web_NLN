import { Field, Form, Formik } from 'formik'
import React from 'react'
import './AccountInfor.css'
function AccountInfor() {
    const fakeinfor =
    {
        id: 1,
        username: 'hhd',
        email: 'hhd111@gmail.com',
        phoneNumber: '0707278154',
        gender: 'Male',
        dateOfBirth: "2024-03-21"
    }
    const optionGender = ['Male', 'Female', 'Other']

    return (
        <>
            <div className='text-b-lg text-center'>THÔNG TIN TÀI KHOẢN</div>
            <div className="form">
                <Formik
                    initialValues={{
                        username: fakeinfor?.username ?? "",
                        email: fakeinfor?.email ?? "",
                        phoneNumber: fakeinfor?.phoneNumber ?? "",
                        gender: fakeinfor?.gender ?? "",
                        dateOfBirth: fakeinfor?.dateOfBirth ?? "",
                    }}
                    onSubmit={(values) => {
                        // Submit logic here
                        console.log(values)
                    }}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <Field type="text" id="username" name="username" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <Field type="tel" id="phoneNumber" name="phoneNumber" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <Field as="select" id="gender" name="gender" className="form-control">
                                <option value="">Select Gender</option>
                                {optionGender.map((item, id) => {
                                    return <option key={id} value={item}>{item}</option>
                                })}


                            </Field>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dateOfBirth">Date of Birth:</label>
                            <Field type="date" id="dateOfBirth" name="dateOfBirth" className="form-control" />
                        </div>
                        <button type="submit">LƯU THAY ĐỔI</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default AccountInfor