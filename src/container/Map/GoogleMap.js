import React from 'react'

const GoogleMap = () => {
    return (
        <div className="google-map-area section text-center section-padding-bottom">
            <div className="container">
                <div className="contact-map-area" data-aos="fade-up">
                    <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6306.580613899434!2d-122.48269971774795!3d37.783235790304005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587052b9aa323%3A0x83da08c1f4a4cb35!2s5901%20California%20St%2C%20San%20Francisco%2C%20CA%2094121!5e0!3m2!1sen!2sus!4v1617310555902!5m2!1sen!2sus"  aria-hidden="false"></iframe>
                </div>
            </div>
        </div>
    )
}
export default GoogleMap;
