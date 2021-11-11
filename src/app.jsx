import React, { useEffect, useRef, useState } from 'react';

// global config
import config from './config';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

export default function App() {

    // camera video & camera phot ref
    const videoRef = useRef( null );
    const photoRef = useRef( null );

    // photo taken state
    const [ photoTaken, setPhotoTaken ] = useState( false );


    // utility functions
    const getVideo = async () => {

        // get accest to video stream
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: config.video });

        // set video stram source
        videoRef.current.srcObject = videoStream;
        videoRef.current.play();
    };
    
    const takePhoto = () => {

        // photo propeties
        const { photo } = config;

        // set photo ref propeties
        photoRef.current.width = photo.width;
        photoRef.current.height = photo.height;

        // get canvas context
        const ctx = photoRef.current.getContext( '2d' );
        ctx.drawImage( videoRef.current, 0, 0, photo.width, photo.height );

        // set photo taken variable
        setPhotoTaken( true );
    };

    const quitPhoto = () => {

        // photo propeties
        const { photo } = config;

        // get canvas context
        const ctx = photoRef.current.getContext( '2d' );
        ctx.clearRect( 0, 0, photo.width, photo.height );

        // set photo taken variable
        setPhotoTaken( false );
    };

    const savePhoto = () => {
        
    };


    // module effects
    useEffect(() => {

        getVideo();

    }, [ videoRef ]);

/*  Module layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>

        <div className={ `view-elem camera ${ photoTaken ? 'hide' : '' }` } >
            <video ref={ videoRef }></video>
            <button onClick={ takePhoto } >Action 1</button>
        </div>

        <div className={ `view-elem result ${ photoTaken ? '' : 'hide' }` } >
            <canvas ref={ photoRef }></canvas>
            <button onClick={ quitPhoto } >Action 2</button>
        </div>
    </>
)};