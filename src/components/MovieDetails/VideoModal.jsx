import { useEffect, useState } from 'react'
import axios from 'axios'

const VideoModal = ({ id, title, isVideoPlay, handleClick }) => {
    const [videoURL, setVideoURL] = useState(null)

    useEffect(() => {
        const getUrl = async () => {
            try {
                const result = await axios(`https://seapi.link/?type=tmdb&id=${id}&max_results=1`)

                setVideoURL(result.data.results[0].url)
            } catch (error) {
                console.log(error)
            }
        }

        getUrl()
    }, [id])

    if (isVideoPlay) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'

    return (
        <>
            <div
                className={`absolute left-0 top-0 transform backdrop-filter backdrop-blur-sm w-full h-screen z-30 transition-all duration-300
        ${isVideoPlay || '-translate-y-full'}`}
                onClick={handleClick}
            >
                {isVideoPlay && (
                    <div
                        className={`absolute top-1/2 left-1/2 w-full bg-black container transform -translate-x-1/2 -translate-y-1/2
                border-2 border-blue-900 border-opacity-50
          `}
                    >
                        <div className='h-0 overflow-hidden' style={{ paddingBottom: '52.25%', paddingTop: '30px' }}>
                            <iframe
                                className='absolute top-0 left-0 w-full h-full'
                                src={videoURL}
                                title={title}
                                frameBorder='0'
                                allowFullScreen={true}
                            />
                        </div>
                        <div
                            className='absolute top-1 right-3 sm:top-4 sm:right-6 cursor-pointer opacity-30 hover:opacity-100 
                      transition duration-300'
                        >
                            <i className='fas fa-times-circle text-lg sm:text-2xl' />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default VideoModal
