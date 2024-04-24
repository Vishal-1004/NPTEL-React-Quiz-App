import React from 'react'
import {MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit'
import {Link} from 'react-router-dom'
import {MdQuiz} from 'react-icons/md'
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start">
      <section className="border-top">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <Link className="navbar-brand" to="/">
                <MdQuiz size={30} style={{color: '#0d6efd'}} />
                <span
                  className="logo-name"
                  style={{
                    fontWeight: '400 !important',
                    fontSize: '1.5rem',
                    color: 'black',
                  }}
                >
                  &nbsp;Quiz App
                </span>
              </Link>
              <p className="my-4 p-logo">
                Developed a full-stack quiz app using React for its frontend and sanity.io for
                backend.
                <br />
                Designed to practice for NPTEL exams on Forest and their management.
              </p>
            </MDBCol>

            <MDBCol md="5" lg="4" xl="4" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact Developer</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Vishal Kumar Yadav, VIT - Chennai
              </p>
              <p>
                <MDBIcon className="me-3 d-flex justify-content-center align-items-center" />
                <MdOutlineMail /> &nbsp; vishal100403@gmail.com
              </p>
              <p>
                <MDBIcon className="me-3 d-flex justify-content-center align-items-center" />
                <AiOutlineLinkedin /> &nbsp;
                <Link
                  to="https://www.linkedin.com/in/vishal-kumar-yadav-8085a3232/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </p>
              <p>
                <MDBIcon className="me-3 d-flex justify-content-center align-items-center" />
                <FaGithubSquare /> &nbsp;
                <Link to="https://github.com/Vishal-1004" target="_blank">
                  GitHub
                </Link>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
        © {new Date().getFullYear()} Copyright : All Rights Reserved
      </div>
    </MDBFooter>
  )
}

