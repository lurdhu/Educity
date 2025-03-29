import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faLocationDot,
  faEnvelopeOpen,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="container  mx-auto px-4">
        <div className="max-w-5xl mx-auto mt-24 pb-10">
            <div className="border-t border-black flex justify-between pt-3">
                <p className="font-medium">
                © 2024 Edusity. All rights reserved.
                </p>
                <div className="flex gap-x-4">
                    <p className="font-medium">Terms of Services</p>
                    <p className="font-medium">Privacy Policy</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
