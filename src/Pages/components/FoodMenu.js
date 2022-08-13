import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/nav'

import MenuSection2 from '../MenuComponents/MenuSection2'
import MenuSection3 from '../MenuComponents/MenuSection3'
import MenuSection4 from '../MenuComponents/MenuSection4'
import Footer from './footer'

import BannerImg from '../img/MenuImg/banner.png'

import { useCart } from '../components/CartComponent/Utils/useCart'
import { Modal, Button } from 'react-bootstrap'

function FoodMenu(props) {
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  const navigate = useNavigate()
  const { addItem } = useCart()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const showModal = (name) => {
    setProductName('餐點：' + name + '已成功加入購物車')
    handleShow()
  }

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            navigate('/Cart', { replace: true })
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )

  return (
    <>
      <section className="MBodyMenu">
        <div className="PatternBG">
          {messageModal}
          <div className="Mcontainer">
            <div className="BannerContainer">
              <div className="BContent">
                <h3>最正異國風味</h3>
                <p>
                  鮮蝦與香料為基底熬煮，嚐起來帶有嗆辣感好是滋味！...
                  東央貢熬煮的時候廚房充斥著酸辣味，瞬間一秒來到泰式餐廳的感覺！這道菜不難，所有材料在家樂福可以一站購全，不想出門遙控吳伯義或是傅龐達購買也可以唷
                </p>
                <div className="d-flex justify-content-end">
                  <Link to="#/" className="Sec5Link">
                    點我了解更多
                  </Link>
                </div>
              </div>
              <div className="BannerImg">
                <img src={BannerImg} alt="" />
              </div>
            </div>
          </div>
          <MenuSection2 showModal={showModal} />
          <MenuSection3 showModal={showModal} />
          <MenuSection4 showModal={showModal} />
        </div>

        <Footer />
      </section>
    </>
  )
}

export default FoodMenu
