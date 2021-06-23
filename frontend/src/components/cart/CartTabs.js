import React from 'react'

export const CartTabs = ({ color, data }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const { name, phone } = data.data; 
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> User Details
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i> Payment Details
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i>  How to pay?
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-0 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex font-semibold justify-between py-3 text-sm uppercase">
                    <label>For: </label>
                    <span className="text-gray-500" >{name}</span>
                  </div>
                  <div className="flex font-semibold justify-between py-3 text-sm uppercase">
                    <label>Send to: </label>
                    <span className="text-gray-500" >{phone}</span>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex font-semibold justify-between py-3 text-sm uppercase">
                      <label>Bank Name: </label>
                      <span className="text-gray-500" >Luis Manzanero</span>
                  </div>
                  <div className="flex font-semibold justify-between py-3 text-sm uppercase">
                      <label>Account Name: </label>
                      <span className="text-gray-500" >6547879</span>
                  </div>
                  <div className="flex font-semibold justify-between py-3 text-sm uppercase">
                      <label>Account #: </label>
                      <span className="text-gray-500" >6547879</span>
                  </div>
                  <div className="flex font-semibold justify-between py-3 text-sm uppercase">
                      <label>Description: </label>
                      <span className="text-gray-500" >ZCC1-609-1112-14T1</span>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                   <ul>
                     <li className="flex justify-between py-1"><label className="font-semibold mr-5">1:</label> <span> Login to your online banking website or head to your nearest Belize Bank branch.</span></li>
                     <li className="flex justify-between py-1"><label className="font-semibold mr-5">2:</label> <span> Click on the ‘Payment details’ tab to view the information to make a payment.</span></li>
                     <li className="flex justify-between py-1"><label className="font-semibold mr-5">3:</label> <span> Enter the payment information on your online banking website and send the payment. If you’re depositing at a Belize Bank branch, show the payment details to the teller and give him/her a total of $116 BZD.</span></li>
                     <li className="flex justify-between py-1"><label className="font-semibold mr-5">4:</label> <span> Click on the ‘Confirm Payment’ button on the top right of this page, read the disclaimer and click the accept button. Can’t find it? Click here instead.</span></li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
