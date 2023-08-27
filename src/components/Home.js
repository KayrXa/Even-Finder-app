import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchEvents } from "../slicers/eventslice";

export default function Home() {
  const dispatch = useDispatch();
  const eState = useSelector((state) => state.eventreducer);
  const eStatus = eState.status;
  const events = eState.events;

  useEffect(() => {
    if (eStatus === "idle") {
      dispatch(fetchEvents());
    }
  }, [eStatus]);

  let last1event;
  let last2event;
  let last3event;

  let pageContent = "";
  if (eStatus === "success") {
    last1event = events[events.length - 1];
    last2event = events[events.length - 2];
    last3event = events[events.length - 3];
    pageContent = (
      /* Page Content*/
      <div className="container px-4 px-lg-5">
        {/* Heading Row*/}
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <h1 className="font-weight-light">Welcome to My Event Finder!</h1>
            <p>
                This app was made for meet and know other people on any kind of festival.
                So if you are interest in any kind of festival, creating some, or just want to meet a new people, you are on a right place!
            </p>
          </div>
          <div className="col-lg-5">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.ervpojistovna.cz/fileadmin/blog_images/pic/hudebni-festivaly-2019/hudebni-festivaly1.jpg"
              alt="..."
            />
          </div>
        </div>
        {/* Content Row*/}
        <div className="row gx-4 gx-lg-5">
          <h2 className="font-weight-light">Check Last Added Events</h2>
          <p></p>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{last1event.eName}</h4>
                <p className="card-text">
                  {last1event.eRegion}, {last1event.eDate}
                </p>
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={last1event.eImage}
                  alt="..."
                />
              </div>
              <div className="card-footer">
                <NavLink
                  className="btn btn-primary btn-sm"
                  to={"/events/" + last1event.id}
                >
                  More Info
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{last2event.eName}</h4>
                <p className="card-text">
                  {last2event.eRegion}, {last2event.eDate}
                </p>
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={last2event.eImage}
                  alt="..."
                />
              </div>
              <div className="card-footer">
                <NavLink
                  className="btn btn-primary btn-sm"
                  to={"/events/" + last2event.id}
                >
                  More Info
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{last3event.eName}</h4>
                <p className="card-text">
                  {last3event.eRegion}, {last3event.eDate}
                </p>
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={last3event.eImage}
                  alt="..."
                />
              </div>
              <div className="card-footer">
                <NavLink
                  className="btn btn-primary btn-sm"
                  to={"/events/" + last3event.id}
                >
                  More Info
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>{pageContent}</div>;
}