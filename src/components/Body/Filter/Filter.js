import React from 'react'
import { Dropdown, Container, Row, Col } from 'react-bootstrap'
import { FaArrowDownShortWide } from 'react-icons/fa6'

export default function Filter() {
    return (
        <Container className='mt-3 justify-content-end d-flex'>
            <Row className='align-items-center'>
                <Col>
                    <span className='text-secondary'>Filter</span>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            All
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">All</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                <Col className='d-flex align-items-center'>
                    <span className='text-secondary'>Sort</span>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            Added date
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <span className='text-success'>
                        <FaArrowDownShortWide/>
                    </span>
                </Col>

            </Row>
        </Container>
    )
}
