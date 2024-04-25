import React, { useEffect, useState } from 'react';

function ScheduleConsultation() {
  const calendlyUrl = 'https://calendly.com/kingsleyspcfoba/30min';  
  const [height, setHeight] = useState(''); 

  useEffect(() => {
    function updateSize() {
      const newHeight = `${window.innerHeight -40}px`; 
      setHeight(newHeight);
    }

    window.addEventListener('resize', updateSize);
    updateSize(); 

    return () => window.removeEventListener('resize', updateSize); 
  }, []);

  return (
    <div style={{backgroundColor: '#fff'}}>
      <h1 className="text-center">Schedule a Consultation</h1>
      <iframe
        src={calendlyUrl}
        width="100%"
        height={height}
        frameborder="0"
        allowfullscreen
        title="Schedule a Consultation"
      ></iframe>
    </div>
  );
}

export default ScheduleConsultation;
