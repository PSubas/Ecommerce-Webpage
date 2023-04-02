import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  /* background: #9aa19b; */
  margin: 3rem 0 1rem 0;
  .grid {
    gap: 2.8rem;
  }
  .services-1,
  .services-2,
  .services-3 {
    width: 100%;
    padding: 0rem 1rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: #bcc2be;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .grid {
    display: grid;
    gap: 3rem;
  }
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-three-column {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .services-2 {
    gap: 2rem;
    background-color: transparent;
    box-shadow: none;
    .services-colum-2 {
      background: #bcc2be;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    font-size: 1rem;
  }
  .icon {
    width: 6rem;
    height: 4rem;
    padding: 1rem;
    border-radius: 10%;
    background-color: transparent;
    color: #5138ee;
  }
`;
export default Services;
