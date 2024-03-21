import React from 'react'
import './AccountChangePassword.css'
import { Field, Form, Formik } from 'formik'
function AccountChangePassword() {
    return (
        <>
            <div className='text-b-lg text-center'>THÔNG TIN TÀI KHOẢN</div>
            <div className="form">
                <Formik
                    initialValues={{
                        currentPassword: '',
                        newPassword: '',
                        repeatNewPassword: ''
                    }}
                    onSubmit={(values) => {
                        // Submit logic here
                        console.log(values)
                    }}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="currentPassword">MẬT KHẨU HIỆN TẠI:</label>
                            <Field type="text" id="currentPassword" name="currentPassword" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newPassword">MẬT KHẨU MỚI:</label>
                            <Field type="text" id="newPassword" name="newPassword" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repeatNewPassword">NHẬP LẠI MẬT KHẨU MỚI:</label>
                            <Field type="text" id="repeatNewPassword" name="repeatNewPassword" className="form-control" />
                        </div>

                        <button type="submit">LƯU THAY ĐỔI</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default AccountChangePassword