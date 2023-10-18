import { Col, Row } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
import { Link } from 'react-router-dom'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons"

export default function Header() {
    const onSearch = (value) => console.log(value);
    return (
        <Row gutter={16} className='bg-[rgb(72,135,232)] py-[10px] px-[120px] items-center max-w-full' >
            <Col className="gutter-row" span={6}>
                <Link to="/" >
                    <h1 className="font-bold text-3xl text-white text-left">Tiki</h1>
                </Link>
            </Col>
            <Col className="gutter-row" span={12}>
                <Search placeholder="input search text" className='font-semibold text-xl' onSearch={onSearch} enterButton />
            </Col>
            <Col className="gutter-row" span={6}>
                <div className="text-white">
                    <div className="flex gap-x-3 items-center">
                        <Link to="/login" className='flex gap-x-1 items-center'> <UserOutlined /> Đăng nhập / Đăng Ký</Link>
                        <div className="w-[1px] h-4 bg-white"></div>
                        <Link to="/sign-up" className='flex gap-x-1 items-center'>Tài Khoản <CaretDownOutlined /></Link>
                        <Link to="/cart" > <ShoppingCartOutlined className='text-2xl' /></Link>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
