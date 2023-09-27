import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/blogs.css'
import Carousel from 'react-bootstrap/Carousel';

const Blogs = () => {
    return(
      <>
      <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">I'm Carol</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="./pages/Home.js">Home</Nav.Link>
            <Nav.Link href="../pages/Blogs.js">About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Why?
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                WHERE?
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <h1 >Blog Articles</h1>;
      <h3><em> Hello This is my BlogPage</em>
  <br /><br /> 
  Im a Full Stack developer thats trying to learn how things on jsx work right now and also a little bit of html and css and since im a fresher i dont have equivalent knowledge or skills 
  to showcase a site properly. But im quite skilled on DJango . The tasks i could perform are : <br /> 
  1.Authentication of User <br />
  2.Send Email after login <br />
  3.Connect between Templates and MVT.  <br />
  4.Make a useful Website for Ecommerce and Inventory Management System.     
  <br /><br />
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut aperiam et sed corporis porro ipsum architecto nulla modi rem, commodi necessitatibus ex excepturi possimus nisi. Voluptatem nobis corrupti velit doloremque sunt earum? Molestiae.
      </h3>
      <Form className="basicForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Carousel>
      <Carousel.Item>
        <img src="data:image/jpeg;base64,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"></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAoQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABBEAABAwIDBAUHCQgDAQAAAAABAAIDBBEFEiEGMUFREyJhcdEUMkKBkbHBBxUjM1JUcpOhFkNiY3OCkuGio/A0/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQGBf/EACMRAAICAQQDAQADAAAAAAAAAAABAhEDEiFBUQQTMRQiI0L/2gAMAwEAAhEDEQA/ALOOY81JY8O3qpa+ykRyr0554Ni9U3DsNnrTFnETc2QG2bVHMTXMDuYBVDtbKXbPVLAT1sjfa4K8ikIjaL3sAL81F/yaNdtNjOgTTAQpIkHFdnCqySGWJjmqY7KUJ0YPmlAyPZIimMgobgR3JAJdJxQzNE09aRg73BNNRCfNla78Jze5K0OgpTbIRqY72GcnlkKTym2ohkI9Q+KVoKYfLdMdGodDiL6yljqI4LNfuBf29yN5TNmDTEzUE3zHs7O1GpMGmjnsshuFkrpJD6cY/tPio5lcS7NUMFjYWAHAKbQ6ClK1wCgyTsG+uYP7mBRvLaexz1w3ndIBx7FOtD0Nl1nC5UnltJ97/wC13iuT9iD1s0DGkozWkKomxuCMAtfDY/xZiPUNyhVG08LA76cgejlAb79UnmguQWGb4LDaq4wdwO4zRj/kFcipijFnysGm7MvP8V2hixGIQREkteH3MhduUWTa51yYmEX06kYHvWL8mCbZsvHk4pHo7sQgAJBe632WlDfiNgCIjY/acAvMJdp6t9wM9j/Nt7gokuN1b+LB33d7yofmx4LXhvk9SlxcNdYyQNFj6WbwUSTHIwTer0/lsv8AArzF2JVbv34H4WgIT6uof51TMe5xCzfmvhGi8Rdnpjsci1zSVDr6i2miiyY5TC94s2t+u8fFecGUnz5HHveubkdubdQ/Lm/hX5YG+dtJBFmLBTgk3+sBQDtY1tyZYATvsC5Ytsch82F7u5hKK2jrX+ZRVJ7oXeCl+RkZXoxo052tdoTUa/ww/wClHk2rkdf6eY9zAFRS4biMcTpZKGoZG0XLnxloHtS02HvlaXPfk5C11Pty2UsWNFn8+PpGNp2unDWbgx1ghP2hkd6EzvxSIM2C4tVyGamopZInea5oFim/s5jm75vm9rfFDeXhMEsfaFdjUh3Qe2T/AEmHFpD+4b/kiDZjHTuoJP8ANnilOy+OjfQv/MZ4qf7emO8XaI7sUm4RMCYcTn+ywepSDszjf3F35rPFIdmsa+5H81nilpy9MerH2iP851H8H+K5H/ZrGfuZ/NZ4pUacvTHqx9ogNfV1EvRs8okkduY25J9QVlS7KbQ1YDoMGrDf0nRFn6usp+xe0gwPFY6qWJ80YYWFrSMwvxBK9jwXavDsWhz087muHnRSss5vsKrHiU1dkynp4PHBsljeGdHLiNKIGzvEMeaRpOY9gJR8T2Er8EoTW4jNBJGHBnRxlxNz2+pek7dVcUwwRrXMcPnKIm3L/wAU75T5qeTZciNoDjUM3Hsctnhil8Ep38Z51sbsVT7Qx1Mk9VNAIcthGBYg359y1UXyXYOzV9RVy98ob7grT5HaAVOH1510MY07nLdz4NMAXMNxyRB4FtKrHKGV7o88i+TzA4tRQl/45nH4o7dksDh0GEUlx9qPN71qnQTsLgWu6pIOiaQBrIwkexdMfVwkc0o5ObKCPBcOiFosPpGfhhaPgieRxs+rhjb3MAVu9kB3MI9e5BfC30SVqnHoycX2VjopG6BqE6N/EFQds8efs9TQmKNkksriAHHQAc/arDDcN2mxHC6Svp5cJyVMLZQx7pGlocL2NmnmpeaCdCeN1bM9tfGThDmuboZG8FjSzKCBf1L0vFtndpK2l6CpiwzJcOvFUvBNu+Neaw1sdRVilhdLBI5/Rtddrg51yAL6EblyZ5pys6vHjtRtdnnhmEU7LdYA3B3jUqx6ULz6OHFgY5afpJc9gwBw1uGOHHlIz2qywfaKVkroq9h6rsrmuFnNI+KuHlVSkqJyeJduDs1+Zp4JriLJY5YpohLCWvaeIQnu7LLr1WjicadMY8sso0jgiSPuosncixpHZwuTPUVyVjPLspvobFWWHV8tO9pJc1zT1ZGHcoFxyS3GltF8WMnF7H1mk0a12PvrHUjap7XCmmbKZWjUgcxz04K0x/H6TFaHyenmDyHhx0I4EcR2rD0rnGKe7r9XTs0KSgkIe+/Fq6PfL52YvFG7XB6LsXjNLhdPKyerZTueWkZpMua1/Fbel2l6QAQ4kx4O60114ZVvv0XDqpkUMsnWAAaN7joB60e//Omw0u7To+hKPaOqhjcXvjkb0rwS9t7aqc/aSZzcsjac5twDV4VhtLVhoL6qcR/ZD3AHuVpLPKxwilqqiEHRr2yHqnlqrUMbVuIa8i5PUK3EGVFO0uiDRnYOqf4gmmemDdTY/wBQeC8hrMMr75o6uSdu8Znm6qZxUwk9KJW9pJQ8mhUkFuTts1Pyr1DDV4cWODmhjjoRvuFbbD7UVMtLTUeKwVUlPCwMbJFUGEBgAABDQDpbmvOXvzjr9b8WqaHFos0kDsKy9v8AK2DhcaPVMZxHC6isifHgU1RCxsmYPqjKH6XucxNstj7V5thNTRmkja6lha8Nylzhq489e/gh0Ls73tL5AAL9V5HYolVSFpvFA9g7NVM5XTRpiiomh6OmnilZSExzHVp6Qht7jh6gq6ulmlmIq2ubVtA+kdo549x71Aoql0LtXXtvuLK/pq+Koaxk7GyWOhI1HcpbcjbZfCZg1ZUUjQ4ZrEasJWgdi9AQD5THuVIXNa27BcFZ2ux7FKWsmhjqeo13VBjboLacF0Y8vrVM5c2L2O0bR+L4fwqY/wBfBRn4vh/3mP8AXwWMbtHibf37TfU3jbv9id+0uI38+M/2BX+qJj+Zmu+d6D71H+vguWL+earm32Lk/wBUSvzFeusnNY9/mtv2qZBQOfrJoOPALgUW/h1WDpReOUAakW966no5nG4+jtoSeCm5aeDqsAe7s3I0EU1Tcu6kfJaqF0RYNkUZeAR08o0HBo8VZU9KzOHzHM9u5u5re5OgiZEMsbQOZCkNAG5bxgkS2GGttd6HUsbMXsfq13ant84XTZLNIvwK0JI1HUOY7yeoeQ4GzXnj3qY9l9HnN6lCr4jKBJHq7iAn4fWhwEU57GvPuKi+GDXI2fDYZbkCx7Aq2owqVvmOuFonNtzTbclLhFgpGYo4pIJX9ILaaEKVM9jWXc5XUkTJBZ7GnvUSXDonG4APIO1t60lGtkOzPNhLqqTMOqdx5FSoC2N4APrUuqw64GUPZbi05h7FEmjs3f1hxCxlGnZtCVqi4p6mwyu1CpNoYh5UyZouHixtwISU9U5psTopVbTuqqMvZe7esPUk3aoZQ5detoEhA4G67uddLlNt3rUANy9oXJ2Xv9iVIC1zwwbh0h7dya+WacgNNgmQQZrAAu7VaU8DY23Op5rpSbMbSB0tEGgPkF+9TRa1m7kzNfTgnXsFqkl8FYVtwNyIy49FAGpGqJfTeqQBWm5OibIL3sCmtcQ3emuN96AHAgi1h/tV1VHlkMoADXnXsKmh2Ug3tZJMGvaQ7zHa9ymW6Gh2H1wsIZj2NefcVYm1u1Zg5muLHNN723K0w+uabQVBPJr/AIFKMiZR5RNeeaGjSRW4IJDb62TBDt6i11IKiOzSGvGod4qRlaeAUSato4ZDHNPE1w3gnVJ1W5SvgopAGuItZw3hEjxHyaM5jv4KLiFeyWpmdGBbNZttxA4qte8vN3Lkbo3HmT6UvaMtzeyOJcw6xBvzG5Q1Ko5+ikyuIyO0IO5ShMdp9oe1crHK37EP6LlppI1E6JgYOA7EUuKA06orV0mQRpT7oQKUapgHaU4FCBslzap2MNcWTCU0nRNuhsBxsdCuGosmXuUrXJACqoBLHnYLvbv7QoQIIsQrRjsrtdxUKviEUgkHmu/QrNoaZMw+vJaKeodpua/4FT5GAHQ3HNZu4IVjQV+rYZzpua48OwqlITjyTisVicZhrpmO35yb8wVt3WVTjGFtrWiSKzZmiw5O7FGWOpFQdMyZXJXAtJBFiOBSLlNjglCRcgBbnmUqRciwNM110QFBZuRG7l3HKEB0T2lC4hEbuQMUlcDqm8UqAH5t/euumDzj3peaBilyQOSFN4pWAUm7U130o6J2WxFiTvSN3JWfWhDArjE6F5jebkceaQ66KXX/AFw/AoY831rMon4fW2tBOdNzXcuwqycO3VZ30Sr+P6pvcPcri72E9jM7QUohqelYLMl1NuDuKqlo9pP/AI4/6o9xWcK5siqRrF2jly5csyjlyVcmB//Z"></img>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="data:image/jpeg;base64,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" height='200px' width='200px'></img>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
    )
  };
  
  export default Blogs;
  